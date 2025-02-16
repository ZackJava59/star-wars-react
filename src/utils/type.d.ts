import React from "react";

export interface baseUI {
    children: React.ReactNode,
    className?: string,
    type?: string,
    name?: string,
    placeholder?: string
}

export interface HeroInfoTypes {
    name: string,
    gender: string,
    skin_color: string,
    hair_color: string,
    eye_color: string,
    height: number,
    weight: number,
    birth_year: string
}

export interface Item {
    title: string,
    path: string,
}

export interface Hero {
    name: string,
    img: string,
    url: string,
}

export interface Characters {
    [key: string]: Hero;
}

export interface SWContextValue {
    hero: string;
    changeHero: (hero: string) => void;
    isError: boolean;
    setIsError: (isError: boolean) => void;
}
