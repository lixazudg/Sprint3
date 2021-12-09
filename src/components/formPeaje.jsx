import React from "react";
import cate from "../images/categorias.png";
export function FormPeaje(){
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">Crear Peaje</h1>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <label htmlFor="txtnombre">Nombre Peaje</label>
                    <input type="text" className="form-control rounded-4" id="txtnombre"  required/>
                </div>
                <div className="col">
                    <label htmlFor="txtlat">Latitud</label>
                    <input type="text" className="form-control rounded-4" id="txtlat"  required/>
                </div>
                <div className="col">
                    <label htmlFor="txtlon">Longitud</label>
                    <input type="text" className="form-control rounded-4" id="txtlon"  required/>
                </div>
            </div>
            <div className="row mb-5 d-flex flex-wrap justify-content-center">
                <img className="w-75" src={cate} alt="" />
            </div>
            <div className="row d-flex flex-wrap justify-content-center mb-5">
                <button className="btn btn-success col-4">Crear</button>
            </div>
        </div>
    );
}