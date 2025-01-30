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
        <form className={'rounded-md bg-grey-color p-5'} onSubmit={e => {
            e.preventDefault()
        }}>
            <label> First Name:
                <input
                    className={'w-full p-1.5 border border-solid border-[#ccc] rounded box-border mt-1.5 mb-5 resize-y'}
                    type='text' name='firstName' placeholder='Your name...'/>
            </label>
            <label> Last Name:
                <input
                    className={'w-full p-1.5 border border-solid border-[#ccc] rounded box-border mt-1.5 mb-5 resize-y'}
                    type='text' name='lastName' placeholder='Your last name...'/>
            </label>
            <label> Planet
                <select
                    className={'w-full p-1.5 border border-solid border-[#ccc] rounded box-border mt-1.5 mb-5 resize-y'}>
                    {planets.map(item => <option className={'text-base-color bg-black'} value={item}
                                                 key={item}>{item}</option>)}
                </select>
            </label>
            <label> Subject:
                <textarea
                    className={'w-full p-1.5 border border-solid border-[#ccc] rounded box-border mt-1.5 mb-5 resize-y h-25'}
                    name='subject' placeholder='Write something...'></textarea>
            </label>
            <button className={'bg-red-color text-base-color py-3 px-5 rounded-md cursor-pointer hover:bg-red-500'}
                    type="submit">Submit
            </button>
        </form>
    );
};

export default Contact;