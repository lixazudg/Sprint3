import React, { Fragment } from "react";
import {post} from "../api/http";

export function FormRegistro(tit){
    
    let titulo;
    if(tit.tit.tit==="adm") titulo="Registro de Usuario Administrador";
    else if(tit.tit.tit==="interno") titulo="Registro de Usuario Interno";
    else if(tit.tit.tit==="externo") titulo="Registro de Usuario Externo";

    const crearUsuario = (event) =>{
        event.preventDefault();
        const data = new FormData(event.target);
        const newUser = {
            nombre: data.get("txtnombre"),
            ident: data.get("txtcedula"),
            correo: data.get("txtcorreo"),
            usuario: data.get("txtusuario"),
            password: data.get("txtpassword")
        }
        post("usuarios", newUser);
        alert("Usuario Creado con éxito");
    }

    return (
        <Fragment>
            <div className="modal modal-signin position-static d-block bg-transparent py-2" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog " role="document">
                    <div className="modal-content rounded-5 shadow bg-white ">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h3 className="fw-bold mb-0 text-black">{titulo}</h3>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form className="" onSubmit={crearUsuario}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-4" name="txtnombre" id="txtnombre" required/>
                            <label htmlFor="txtnombre">Nombre Completo</label>
                        </div>
                    
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control rounded-4" name="txtcedula" id="txtcedula" required/>
                            <label htmlFor="txtcedula">Número de identificación</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control rounded-4" name="txtcorreo" id="txtcorreo"  required/>
                            <label htmlFor="txtcorreo">Correo electrónico</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-4" name="txtusuario" id="txtusuario" required/>
                            <label htmlFor="txtusuario">Nombre de Usuario</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control rounded-4" name="txtpassword" id="txtpassword"  required/>
                            <label htmlFor="txtpassword">Contraseña</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control rounded-4" name="txtconfirmar" id="txtconfirmar"  required/>
                            <label htmlFor="txtconfirmar">Confirmar Contraseña</label>
                        </div>
                        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-dark" type="submit">Registrar</button>
                        <small className="text-muted">Al presionar en Registrar está aceptando los términos y condiciones de uso de política de privacidad de datos</small>
                        </form>
                        <br />
                    </div>
                    </div>
                </div>
                </div>
        </Fragment>
    );
}