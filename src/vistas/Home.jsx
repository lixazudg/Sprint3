import React, { Fragment } from "react";
import { Header } from "../components/header";
import { ContenidoHome } from "../components/contenidoHome";

export function Home(){
    return(
        <Fragment>
            <Header/>
            <ContenidoHome/>
        </Fragment>
    );
}