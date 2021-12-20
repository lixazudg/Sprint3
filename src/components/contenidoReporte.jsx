import React from "react";
import imprimir from "../images/print.png"
import salir from "../images/salir.png"

export function ContenidoReporte(){
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
                    <input className="m-0 mb-2 w-100 text-center text-black shadow" type="text" />
                    <input className="m-0 mb-2 w-100 text-center text-black shadow" type="date" />
                    <input className="m-0 mb-2 w-100 text-center text-black shadow" type="date" />
                    <button className="btn btn-success">Generar</button>
                </div>
            </div>
            <div className="row">
                <div className="col-9 d-flex flex-wrap">
                    <table className="table table-success">
                        <thead>
                            <th scope="col">Nombre Peaje</th>
                            <th scope="col">Fecha Inicial</th>
                            <th scope="col">Fecha Final</th>
                            <th scope="col">Total Recaudo</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lorica</td>
                                <td>20/11/2021</td>
                                <td>20/12/2021</td>
                                <td>3000000</td>
                            </tr>
                            <tr>
                                <td>Cartagena</td>
                                <td>20/11/2021</td>
                                <td>20/12/2021</td>
                                <td>4000000</td>
                            </tr>
                            <tr>
                                <td>Puerto Colombia</td>
                                <td>20/11/2021</td>
                                <td>20/12/2021</td>
                                <td>7000000</td>
                            </tr>
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