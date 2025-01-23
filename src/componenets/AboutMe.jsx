import {useEffect, useState} from "react";
import {link_api} from "../utils/constants.js";


const AboutMe = () => {

        const [lukeInfo, setLukeInfo] = useState(null);

        useEffect(() => {

                const getLukeInfo = async () => {
                    try {
                        const response = await fetch(`${link_api}/v1/peoples/${1}`);
                        if (!response.ok) {
                            throw new Error("Failed to fetch Luke info");
                        }
                        const lukeData = await response.json();
                        const lukeWithTimeStamp = {
                            lukeData,
                            saveTime: new Date().toISOString()
                        }
                        setLukeInfo(lukeData);
                        localStorage.setItem('local_lukeInfo', JSON.stringify(lukeWithTimeStamp));

                    } catch (e) {
                        e.message;
                    }
                }

                const local_LukeInfo = localStorage.getItem('local_lukeInfo');

                if (local_LukeInfo) {
                    try {
                        const LukeParsedInfo = JSON.parse(local_LukeInfo);
                        const savedTime = new Date(LukeParsedInfo.saveTime);
                        const now = new Date();
                        const differenceInDays = (now - savedTime) / (1000 * 60 * 60 * 24);

                        if (differenceInDays < 30) {
                            setLukeInfo(LukeParsedInfo.lukeData);
                        } else {
                            getLukeInfo();
                        }
                    } catch (e) {
                        console.error("Error parsing localStorage data:", e.message);
                        getLukeInfo();
                    }
                } else {
                    getLukeInfo();
                }
            },
            []
        )

        return (
            <div>
                {lukeInfo && (
                    <div className='farGalaxy'>
                        <p>My name is {lukeInfo.name}</p>
                        <p>I`m a {lukeInfo.gender}</p>
                        <p>I have a {lukeInfo.skin_color} skin color</p>
                        <p>And {lukeInfo.hair_color} hair color</p>
                        <p>Also I have {lukeInfo.eye_color} eye color</p>
                        <p>My height is {lukeInfo.height} and weight: {lukeInfo.mass}</p>
                        <p>My birth year is {lukeInfo.birth_year}</p>
                    </div>
                )}
            </div>
        )
            ;
    }
;

export default AboutMe;