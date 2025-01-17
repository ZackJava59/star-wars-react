import './App.css'
import Header from "./componenets/Header.jsx";
import Footer from "./componenets/Footer.jsx";
import Main from "./componenets/Main.jsx";

function App() {

    return (
        <div className={'container-fluid'}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App
