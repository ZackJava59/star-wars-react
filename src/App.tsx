import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Main from "./components/Main.tsx";
import {defaultHero} from "./utils/constants.ts";
import {useState} from "react";
import {SWContext} from "./utils/context.ts";

function App() {
    const [hero, setHero] = useState(defaultHero)
    const [isError, setIsError] = useState(false);

    return (
        <SWContext.Provider value={{hero, changeHero: setHero, isError, setIsError}}>
            <Header/>
            <Main/>
            <Footer/>
        </SWContext.Provider>
    )
}

export default App
