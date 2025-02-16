import {link_api, period_month} from "../utils/constants.ts";
import {useEffect, useState} from "react";
import Input from "../uicomponents/Input.tsx";
import Select from "../uicomponents/Select.tsx";
import TextArea from "../uicomponents/TextArea.tsx";
import Button from "../uicomponents/Button.tsx";
import errorWrapper from "../hoc/ErrorWrapper.tsx";

interface Planet {
    name: string;
}

const Contact = () => {

    const [planets, setPlanets] = useState<string []>(['Wait...']);

    const getPlanetList = async () => {
        try {
            const response = await fetch(`${link_api}/v1/planets`);
            if (!response.ok) {
                throw new Error('Failed to fetch planet list');
            } else {
                const data: Planet[] = await response.json();
                const planets: string[] = data.map(item => (item.name));
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
        const planets = JSON.parse(localStorage.getItem('planets')!);
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
            <Input type={'text'} name={'firstName'} placeholder={'Your First Name'}>First Name:</Input>
            <Input type={'text'} name={'lastName'} placeholder={'Your Last Name'}>Last Name:</Input>
            <Select options={planets}>Planets</Select>
            <TextArea name='subject' placeholder='Write something...'>Subject</TextArea>
            <Button className='py-3 px-5'>Submit</Button>
        </form>
    )
};


export default errorWrapper(Contact);