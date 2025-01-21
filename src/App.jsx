import './App.css'
import Header from "./componenets/Header.jsx";
import Footer from "./componenets/Footer.jsx";
import Main from "./componenets/Main.jsx";
import {useState} from "react";
import {navItems} from "./utils/constants.js";

function App() {

    const [page, setPage] = useState(navItems[0]);

    return (
        <div className={'container-fluid'}>
            <Header changePage={setPage}/>
            <Main page={page}/>
            <Footer/>
        </div>
    )
}

export default App
