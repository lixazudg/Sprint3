import React from "react";
import imagen from "../images/costa-peaje.png";

export function Header (){
    
    return(
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img className="bi me-2 w-50" src={imagen} aria-label="Bootstrap" />
            </a>

            <ul className="nav col-8 col-md-auto mb-2 justify-content-center mb-md-0 items-lg">
                <li><a href="/" className="nav-link px-2 link-dark">Inicio</a></li>
                <li><a href="/usuarios" className="nav-link px-2 link-dark">Usuarios</a></li>
                <li><a href="/precios" className="nav-link px-2 link-dark">Precios</a></li>
                <li><a href="/categorias" className="nav-link px-2 link-dark">Categorías</a></li>
                <li><a href="/contacto" className="nav-link px-2 link-dark">Contacto</a></li>
            </ul>

            <div className="col-md-3 text-end">
                <button onClick={()=>window.location.pathname="/inicio"} type="button" name="ingresar" className="btn btn-dark rounded-pill" id="ingresar">Ingresar</button>
            </div>
            </header>
        </div>
    );
}