import {useEffect, useState} from "react";
import {link_api, period_month} from "../utils/constants.js";


const AboutMe = () => {

    const [lukeInfo, setLukeInfo] = useState({});

    useEffect(() => {

            const getLukeInfo = async () => {
                try {
                    const response = await fetch(`${link_api}/v1/peoples/${1}`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch Luke info");
                    }
                    const data = await response.json();

                    setLukeInfo({
                        name: data.name,
                        gender: data.gender,
                        skin_color: data.skin_color,
                        hair_color: data.hair_color,
                        eye_color: data.eye_color,
                        height: data.height,
                        weight: data.mass,
                        birth_year: data.birth_year
                    });
                    localStorage.setItem('local_lukeInfo', JSON.stringify({
                        name: data.name,
                        gender: data.gender,
                        skin_color: data.skin_color,
                        hair_color: data.hair_color,
                        eye_color: data.eye_color,
                        height: data.height,
                        weight: data.mass,
                        birth_year: data.birth_year,
                        saveTime: new Date().toISOString()
                    }));

                } catch (e) {
                    console.log(e.message);
                }
            }

            const luke = JSON.parse(localStorage.getItem('local_lukeInfo'));
            if (luke && (Date.now() - luke.saveTime) < period_month) {
                setLukeInfo({luke})
            } else {
                getLukeInfo();
            }
        },
        []
    )

    return (
        <div>
            {lukeInfo && (
                <div className='text-4xl tracking-widest leading-15 text-justify ml-8'>
                    {Object.keys(lukeInfo).map(key => <p key={key}>
                        <span className={'text-3xl capitalize'}>{key.replace('_', ' ')}: {lukeInfo[key]}</span>
                    </p>)}
                </div>
            )}
        </div>
    );
}

export default AboutMe;

