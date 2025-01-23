import {link_api} from "../utils/constants.js";
import {useEffect, useState} from "react";

const FarGalaxy = () => {
    const [openingCrawl, setOpeningCrawl] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    let id = Math.floor((Math.random() * 6) + 1);


    useEffect(() => {
        const getOpeningCrawl = async () => {
            setIsLoading(true);
            try {
                const opening_crawl = sessionStorage.getItem('opening_crawl');
                if (opening_crawl) {
                    setOpeningCrawl(opening_crawl);
                } else {
                    const response = await fetch(`${link_api}/v1/films/${id}`);
                    if (!response.ok) {
                        throw new Error(`Error loading Data`);
                    }
                    const data = await response.json();
                    setOpeningCrawl(data.opening_crawl)
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                }
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };
        getOpeningCrawl();
    }, [])

    return (
        <div>
            {isLoading && (
                <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                    <div className="spinner-border text-secondary spinner-size" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            {!isLoading && error && (
                <div className="alert alert-danger">
                    {error.message}
                </div>
            )}
            {!isLoading && (
                <div>
                    <p className="farGalaxy">{openingCrawl}</p>
                </div>
            )}
        </div>
    );
};

export default FarGalaxy;