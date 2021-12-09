import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import corsa from "../images/corsablanco.png";
import foto from "../images/fotovehiculo.png";
import freepass from "../images/FREE-PASS.PNG";
import imprimir from "../images/print.png";
import salir from "../images/salir.png";
import cash from "../images/CASH.PNG";
import cashcard from "../images/CASH-CARD.PNG";

export function ContenidoPagos(){
    let titulo;
    let imagen;
    let contenido;
    if(window.location.pathname==="/freepass"){
        titulo="Pago electrónico Free-Pass";
        imagen=freepass;
        contenido=
        <Fragment>
            <div className="col text-center">
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Lectura TAG" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="NRO Tarjeta" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Debitar de Tarjeta" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Saldo Tarjeta" readOnly />
            </div>
            <div className="col">
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
            </div>
        </Fragment>
    }
    else if(window.location.pathname==="/cash"){
        titulo="Pago Efectivo - Cash";
        imagen=cash;
        contenido=
        <Fragment>
            <div className="col text-center">
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Tarifa" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Efectivo" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Cambio" readOnly />
            </div>
            <div className="col">
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
            </div>
        </Fragment>
    }
    else if(window.location.pathname==="/cashcard"){
        titulo="Pago Mixto Cash-Card";
        imagen=cashcard;
        contenido=
        <Fragment>
            <div className="col text-center">
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Tarifa" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="NRO Tarjeta" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Saldo Tarjeta" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Pago Efectivo" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Total" readOnly />
            </div>
            <div className="col">
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
            </div>
        </Fragment>
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img className="w-100" src={corsa} alt="" />
                </div>
                <div className="col text-center">
                    <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Categoria" readOnly />
                    <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Ejes" readOnly />
                    <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Placa" readOnly />
                </div>
                <div className="col">
                    <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                    <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                    <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                </div>
                <div className="col">
                    <img className="w-80" src={foto} alt="" />
                </div>
            </div>
            <hr />
            <div className="row">
                <h2>{titulo}</h2>
                <div className="col-2">
                 <img className="w-100" src={imagen} alt="" />
                </div>
                {contenido}
                <div className="col-2 d-flex flex-wrap justify-content-center">
                    <img className="w-25 m-2" src={imprimir} alt="" />
                    <button className="btn btn-success m-2"> Imprimir Tiquete</button>
                    <img className="w-25 m-2" src={salir} alt="" />
                    <button onClick={()=>window.location.pathname="/"} className="btn btn-success m-2"> Salida</button>
                </div>
            </div>

        </div>
    );
}