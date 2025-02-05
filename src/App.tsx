import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Main from "./components/Main.tsx";
import {useState} from "react";
import {navItems} from "./utils/constants.ts";

function App() {

    const [page, setPage] = useState(navItems[0]);

    return (
        <div>
            <Header changePage={setPage}/>
            <Main page={page}/>
            <Footer/>
        </div>
    )
}

export default App
