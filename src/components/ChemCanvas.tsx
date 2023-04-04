import * as React from "react";
import { useApp } from "./hooks";

export const ChemCanvas = () => {
    const vault = useApp()?.vault??undefined;
    return <div><h4>{vault?.getName()}</h4><button type="button">TODO: ChemCanvas</button></div>;
};