import React from "react";
import imprimir from "../images/print.png"
import salir from "../images/salir.png"

export function ContenidoRecarga(){
    return(
        <div className="container">
            <div className="row text-center">
                <div className="col">
                    <button className="btn btn-lg btn-success">Recarga simple</button>
                </div>
                <div className="col">
                    <button className="btn btn-lg btn-success">Recarga tarjeta crédito</button>
                </div>
            </div>
            <div className="row my-5 text-end">
                <div className="col-3">
                    <input className="m-0 mb-2 bg-info text-center text-black fw-bold" type="text" value="NRO TARJETA TAG" readOnly />
                    <input className="m-0 mb-2 bg-info text-center text-black fw-bold" type="text" value="SALDO TARJETA" readOnly />
                    <input className="m-0 mb-2 bg-info text-center text-black fw-bold" type="text" value="VALOR A RECARGAR" readOnly />
                    <input className="m-0 mb-2 bg-info text-center text-black fw-bold" type="text" value="SALDO TOTAL" readOnly />
                </div>
                <div className="col-3 content-start">
                    <input className="m-0 mb-2 bg-white text-center text-black w-100" type="text" />
                    <input className="m-0 mb-2 bg-white text-center text-black w-100" type="text" />
                    <input className="m-0 mb-2 bg-white text-center text-black w-100" type="text" />
                    <input className="m-0 mb-2 bg-white text-center text-black w-100" type="text" />
                    <button className="btn btn-primary btn-lg m-5" type="submit">Recargar</button>
                </div>
                <div className="col d-flex justify-content-center">
                    <div className="col-3 d-flex flex-wrap justify-content-center">
                        <img className="w-50 m-2" src={imprimir} alt="" />
                        <button className="btn btn-success m-2 row"> Imprimir Tiquete</button>
                        <img className="w-50 m-2" src={salir} alt="" />
                        <button onClick={()=>window.location.pathname="/"} className="btn btn-success m-2"> Salida</button>
                    </div>
                </div>
            </div>
        </div>
    )
}