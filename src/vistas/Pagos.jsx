import React, {Fragment} from "react";
import { ContenidoPagos } from "../components/contenidoPagos";
import { Header2 } from "../components/header2";

export function Pagos(){
    return(
        <Fragment>
            <Header2/>
            <ContenidoPagos/>
        </Fragment>
    );
}