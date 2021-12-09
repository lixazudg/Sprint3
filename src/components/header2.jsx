import React from "react";
import imagen from "../images/costa-peaje.png";

export function Header2 (){
    
    return(
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img className="bi me-2 w-50" src={imagen} aria-label="Bootstrap" />
            </a>
            <div className="col">
                <h1>Plataforma Sistema de Peajes</h1>
                <div className="row">
                    <ul className="nav d-flex items-lg justify-content-center">
                        <li><a className="m-2 text-decoration-none text-black" href="/cash">Efectivo</a></li>
                        <li><a className="m-2 text-decoration-none text-black" href="/freepass">Free-Pass</a></li>
                        <li><a className="m-2 text-decoration-none text-black" href="/cashcard">Cash-Card</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-3 text-center">
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Peaje: Lorica" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Fecha: 25/11/2021" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Hora: 10:30 pm" readOnly />
            </div>
            <div className="w-100 d-flex flex-wrap row-md-3 justify-content-center">
                <input className="m-2 bg-secondary text-center text-white fw-bold" type="text" value="Cajero: 63" readOnly />
                <input className="m-2 bg-secondary text-center text-white fw-bold" type="text" value="Carril: 4" readOnly />
            </div>
            </header>
        </div>
    );
}