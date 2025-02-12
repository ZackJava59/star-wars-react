import {useEffect, useState} from "react";
import {characters, defaultHero, period_month} from "../utils/constants.ts";
import {HeroInfoTypes} from "../utils/type";
import {useParams} from "react-router";

const AboutMe = () => {

    const [heroInfo, setHeroInfo] = useState<HeroInfoTypes>({} as HeroInfoTypes);
    const {heroId = defaultHero} = useParams();

    useEffect(() => {

            const getHeroInfo = async () => {
                try {
                    const response = await fetch(characters[heroId].url);
                    if (!response.ok) throw new Error("Failed to fetch Hero info");
                    const data = await response.json();
                    const hero: HeroInfoTypes = {
                        name: data.name,
                        gender: data.gender,
                        skin_color: data.skin_color,
                        hair_color: data.hair_color,
                        eye_color: data.eye_color,
                        height: data.height,
                        weight: data.mass,
                        birth_year: data.birth_year
                    }
                    setHeroInfo(hero);
                    localStorage.setItem(heroId, JSON.stringify({
                        payload: hero,
                        saveTime: Date.now()
                    }));
                } catch (e) {
                    if (e instanceof Error)
                        console.log(e.message);
                }
            }

            const hero = JSON.parse(localStorage.getItem(heroId)!);
            if (hero && (Date.now() - hero.saveTime) < period_month) {
                setHeroInfo(hero.payload)
            } else {
                getHeroInfo();
            }
        },
        []
    )

    return (
        <div>
            {heroInfo && (
                <div className='text-4xl tracking-widest leading-13 text-justify ml-8'>
                    {Object.entries(heroInfo).map(([key, value]) =>
                        <p key={key}>
                            <span className={'text-3xl capitalize'}>{key.replace('_', ' ')}</span>: {value}
                        </p>)}
                </div>
            )}
        </div>
    );
}

export default AboutMe;

