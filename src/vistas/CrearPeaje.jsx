import React, { Fragment } from "react";
import { Header } from "../components/header";
import { FormPeaje } from "../components/formPeaje";

export function CrearPeaje(){
    return (
        <Fragment>
            <Header />
            <FormPeaje />
        </Fragment>
    );
}