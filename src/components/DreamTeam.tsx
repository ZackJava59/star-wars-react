import {friends} from "../utils/constants.ts";
import Friend from "./Friend.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

const DreamTeam = () => {
    const {hero} = useContext(SWContext)
    return (
        <section className={'float-right w-1/2 grid grid-cols-3 border border-base-color rounded-b-2xl gap-1 ml-2'}>
            <h2 className={'col-span-3 text-center text-2xl'}>Dream team</h2>
            {friends.filter(friend => friend !== hero).map((friend, index) => <Friend friend={friend} key={friend} pos={index + 1}/>)}
        </section>
    );
};

export default DreamTeam;