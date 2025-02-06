import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Main from "./components/Main.tsx";
import {useState} from "react";
import {navItems} from "./utils/constants.ts";
import {PageContext} from "./utils/context.ts";

function App() {

    const [page, setPage] = useState(navItems[0]);

    return (
        <div>
            < PageContext.Provider value={{page, setPage}}>
                <Header/>
                <Main/>
                <Footer/>
            </PageContext.Provider>
        </div>
    )
}

export default App
