import {starWarsInfo} from "../utils/constants.ts";
import Text from "../uicomponents/Text.tsx";

const StarWars = () => {
    return (
        <Text>{starWarsInfo}</Text>
    );
};

export default StarWars;