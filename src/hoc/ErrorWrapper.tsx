import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";
import {ComponentType, FC, useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "../components/ErrorPage.tsx";

export const errorWrapper = <T extends Object>(WrappedComponent: ComponentType<T>): FC<T> => (props) => {
    const {heroId = defaultHero} = useParams<{ heroId?: string }>();
    const {changeHero, setIsError} = useContext(SWContext)
    const actualHeroId: string = heroId ?? defaultHero;

    useEffect(() => {
        if (!characters[actualHeroId]) {
            setIsError(true);
        } else {
            setIsError(false);
            changeHero(actualHeroId);
        }
    }, [heroId, changeHero, setIsError]);

    return !characters[actualHeroId] ?
        <ErrorPage/> :
        <WrappedComponent {...props}/>
}
export default errorWrapper;