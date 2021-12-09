import React, { Fragment } from "react";
import { Header } from "../components/header";
import { FormRegistro } from "../components/formRegistro";

export function Registro(tit){
    return(
        <Fragment>
            <Header/>
            <FormRegistro tit={tit}/>
        </Fragment>
    );
}