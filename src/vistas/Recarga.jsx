import React, { Fragment } from "react";
import { Header } from "../components/header";
import { ContenidoRecarga } from "../components/contenidoRecarga";

export function Recarga(){
    return(
        <Fragment>
            <Header/>
            <ContenidoRecarga/>
        </Fragment>
    );
}