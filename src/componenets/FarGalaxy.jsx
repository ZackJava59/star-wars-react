import {link_api} from "../utils/constants.js";
import {useEffect, useState} from "react";

const FarGalaxy = () => {
    const [openingCrawl, setOpeningCrawl] = useState('');
    let id = Math.floor((Math.random() * 6) + 1);
    const getOpeningCrawl = async () => {
        const response = await fetch(`${link_api}/${id}`);
        const data = await response.json();
        setOpeningCrawl({
            textCrawl: data.opening_crawl
        });

    };

    useEffect(() => {
        getOpeningCrawl();
    }, [])

    return (
        <p className="farGalaxy">{openingCrawl.textCrawl}</p>
    );
};

export default FarGalaxy;