import React, { Fragment } from "react";
import { FormConsorcio } from "../components/formConsorcio";
import { Header } from "../components/header";

export function CrearConsorcio(){
    return (
        <Fragment>
            <Header />
            <FormConsorcio />
        </Fragment>
    );
}