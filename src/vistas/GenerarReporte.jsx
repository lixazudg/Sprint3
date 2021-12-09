import React, { Fragment } from "react";
import { ContenidoReporte } from "../components/contenidoReporte";
import { Header } from "../components/header";

export function GenerarReporte(){
    return(
        <Fragment>
            <Header/>
            <ContenidoReporte />
        </Fragment>
    );
}
