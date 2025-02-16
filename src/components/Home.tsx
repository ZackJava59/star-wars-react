import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";
import ErrorPage from "./ErrorPage.tsx";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";

const Home = () => {
    const {heroId = defaultHero} = useParams();
    const {changeHero, setIsError} = useContext(SWContext)
    const actualHeroId = heroId || defaultHero;

    useEffect(() => {
        if (!characters[actualHeroId]) {
            setIsError(true);
        } else {
            changeHero(actualHeroId);
            setIsError(false);
        }
    }, [heroId, changeHero, setIsError]);

    return !characters[actualHeroId] ? (
        <ErrorPage/>) : (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;