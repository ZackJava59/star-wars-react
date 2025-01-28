import '../contact.css'
import {link_api, period_month} from "../utils/constants.js";
import {useEffect, useState} from "react";

const Contact = () => {

    const [planets, setPlanets] = useState(['Wait...']);

    const getPlanetList = async () => {
        try {
            const response = await fetch(`${link_api}/v1/planets`);
            if (!response.ok) {
                throw new Error('Failed to fetch planet list');
            } else {
                const data = await response.json();
                const planets = data.map(item => item.name);
                setPlanets(planets);
                localStorage.setItem('planets', JSON.stringify({
                    payload: planets,
                    timeStamp: Date.now(),
                }));
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const planets = JSON.parse(localStorage.getItem('planets'));
        if (planets && ((Date.now() - planets.timeStamp) < period_month)) {
            setPlanets(planets.payload);
        } else {
            getPlanetList();
        }
    }, [])


    return (
        <form className='container' onSubmit={e => {
            e.preventDefault()
        }}>
            <label> First Name:
                <input type='text' name='firstName' placeholder='Your name...'/>
            </label>
            <label> Last Name:
                <input type='text' name='lastName' placeholder='Your last name...'/>
            </label>
            <label> Planet
                <select name='planet'>
                    {planets.map(item => <option value={item} key={item}>{item}</option>)}
                </select>
            </label>
            <label> Subject:
                <textarea name='subject' placeholder='Write something...'></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Contact;