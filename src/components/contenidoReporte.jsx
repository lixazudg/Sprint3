import React, {useState, useEffect} from "react";
import imprimir from "../images/print.png"
import salir from "../images/salir.png"
import {get} from "../api/http";

export function ContenidoReporte(){
    const [peajes, setPeajes]=useState([]);

    useEffect(()=>{
        console.log("Leyendo peajes desde la api");
        get("peajes").then(data=>{
            setPeajes(data.peajes);
        })
    },[])

    return(
        <div className="container">
            <div className="row h-5">
                <div className="col-5">
                    <input className="m-0 mb-2 alert-secondary text-center text-black fw-bold w-100" type="text" value="Recaudado por rango de fechas" readOnly />
                </div>
                <div className="col">
                    <input className="m-0 mb-2 alert-secondary text-center text-black fw-bold" type="text" value="Nombre peaje" readOnly />
                    <input className="m-0 mb-2 alert-secondary text-center text-black fw-bold" type="text" value="Fecha Inicial" readOnly />
                    <input className="m-0 mb-2 alert-secondary text-center text-black fw-bold" type="text" value="Fecha Final" readOnly />
                </div>
                <div className="col">
                    <select className="m-0 mb-2 text-center text-black shadow w-100" name="selpeaje" id="selpeaje">
                        <option value="">Seleccione un peaje</option>
                        {peajes.map(peaje=>
                            <option value={peaje.nombre}>{peaje.nombre}</option>
                        )}
                    </select>
                    <input className="m-0 mb-2 w-100 text-center text-black shadow" type="date" />
                    <input className="m-0 mb-2 w-100 text-center text-black shadow" type="date" />
                    <button className="btn btn-success">Generar</button>
                </div>
            </div>
            <div className="row">
                <div className="col-9 d-flex flex-wrap">
                    <table className="table table-success">
                        <thead>
                            <th scope="col bg-light text-center">Nombre Peaje</th>
                            <th scope="col bg-light text-center">Total Recaudo</th>
                        </thead>
                        <tbody>
                            {peajes.map(peaje=>
                                <tr className="text-center">
                                    <td>{peaje.nombre}</td>
                                    <td>{peaje.recaudo}</td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
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