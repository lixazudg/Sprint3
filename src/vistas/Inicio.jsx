import React, { Fragment } from "react";
import { Header } from "../components/header";
import { FormInicio } from "../components/formInicio";

export function Inicio(){
    return (
        <Fragment>
            <Header />
            <FormInicio />
        </Fragment>
    );
}