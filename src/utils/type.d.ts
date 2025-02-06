import React from "react";

export interface baseUI {
    children: React.ReactNode,
    className?: string,
    type?: string,
    name?: string,
    placeholder?: string
}

export interface LukeInfoTypes {
    name: string,
    gender: string,
    skin_color: string,
    hair_color: string,
    eye_color: string,
    height: string,
    weight: string,
    birth_year: string
}



