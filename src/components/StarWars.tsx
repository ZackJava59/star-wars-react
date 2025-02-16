import {characters, defaultHero, starWarsInfo} from "../utils/constants.ts";
import Text from "../uicomponents/Text.tsx";
import {useContext, useEffect} from "react";
import ErrorPage from "./ErrorPage.tsx";
import {useParams} from "react-router";
import {SWContext} from "../utils/context.ts";

const StarWars = () => {
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
        <Text>{starWarsInfo}</Text>
    )
};

export default StarWars;