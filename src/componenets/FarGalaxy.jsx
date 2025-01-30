import {link_api} from "../utils/constants.js";
import {useEffect, useState} from "react";

const FarGalaxy = () => {
    const [openingCrawl, setOpeningCrawl] = useState('Loading...');

    useEffect(() => {
        const getOpeningCrawl = async () => {
            const response = await fetch(`${link_api}/v1/films/${Math.floor(1 + (Math.random() * 6))}`);
            if (!response.ok) throw new Error(`Error loading Data`);
            const data = await response.json();
            setOpeningCrawl(data.opening_crawl)
            sessionStorage.setItem('opening_crawl', data.opening_crawl);
        }
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            setOpeningCrawl(opening_crawl);
        } else {
            getOpeningCrawl();
        }
    }, [])

    return (
        <div>
            <p className={'text-[2em] tracking-[.2em] leading-[1.5] text-justify p-[0.2em]'}>{openingCrawl}</p>
        </div>
    );
};

export default FarGalaxy;