import {useEffect, useState} from "react";
import {characters, defaultHero, period_month} from "../utils/constants.ts";
import {HeroInfoTypes} from "../utils/type";
import {useParams} from "react-router";
import errorWrapper from "../hoc/ErrorWrapper.tsx";

const AboutMe = () => {

    const [heroInfo, setHeroInfo] = useState<HeroInfoTypes>();
    const {heroId = defaultHero} = useParams();

    useEffect(() => {

            const getHeroInfo = async () => {
                try {
                    const response = await fetch(characters[heroId].url);
                    if (!response.ok) throw new Error("Failed to fetch info");
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
                    console.log(e);
                }
            }
            const hero = JSON.parse(localStorage.getItem(heroId)!);
            if (hero && (Date.now() - hero.saveTime) < period_month) {
                setHeroInfo(hero.payload)
            } else {
                getHeroInfo();
            }
        },
        [heroId]
    )

    return (
        <>
            {heroInfo && (
                <div className='text-4xl tracking-widest leading-13 text-justify ml-8'>
                    {Object.entries(heroInfo).map(([key, value]) =>
                        <p key={key}>
                            <span className={'text-3xl capitalize'}>{key.replace('_', ' ')}</span>: {value}
                        </p>)}
                </div>
            )}
        </>
    )
}

export default errorWrapper(AboutMe);

