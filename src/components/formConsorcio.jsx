import React from "react";
import {post} from "../api/http";

export function FormConsorcio(){
    const crearConsorcio = (event) =>{
        event.preventDefault();
        const data = new FormData(event.target);
        const newConsor = {
            nombre: data.get("txtconsorcio"),
            descripcion: data.get("txtdescripcion")
        }
        post("consorcios", newConsor);
        alert("Consorcio Creado con éxito");
    }
    return(
        <div className="modal modal-signin position-static d-block bg-transparent py-2" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog " role="document">
                    <div className="modal-content rounded-5 shadow bg-white">
                        <div className="modal-header p-5 pb-4 border-bottom-0 ">
                            <h3 className="fw-bold mb-0 text-black ">Crear Consorcio</h3>
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form className="" onSubmit={crearConsorcio} name="formCrearConsorcio">
                            
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control rounded-4" name="txtconsorcio" id="txtconsorcio" required/>
                                <label htmlFor="txtconsorcio">Nombre Consorcio</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control rounded-4" name="txtdescripcion" id="txtdescripcion"  required></textarea>
                                <label htmlFor="txtdescripcion">Descripción</label>
                            </div>
                            
                            <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-dark" type="submit">Crear</button>
                            
                            </form>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
    );
}