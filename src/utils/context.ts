import {createContext} from "react";
import {navItems} from "./constants.ts";

interface PageContextType {
    page: string;
    setPage: (newPage: string) => void;
}

export const PageContext = createContext<PageContextType>({
    page: navItems[0],
    setPage: () => {
    }
});