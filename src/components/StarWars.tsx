import {starWarsInfo} from "../utils/constants.ts";
import Text from "../uicomponents/Text.tsx";
import errorWrapper from "../hoc/ErrorWrapper.tsx";


const StarWars = () => {

    return (
        <Text>{starWarsInfo}</Text>
    )
};

export default errorWrapper(StarWars);