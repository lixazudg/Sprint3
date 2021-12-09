import React, { Fragment } from "react";
import imagen from "../images/iconologin.png"
export function FormInicio(){
    
    return (
        <Fragment>
            <div className="modal modal-signin position-static d-block bg-transparent py-2" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog " role="document">
                    <div className="modal-content rounded-5 shadow bg-white">
                        <div className="modal-header p-5 pb-4 border-bottom-0 ">
                            <h3 className="fw-bold mb-0 text-black ">Login Usuario</h3>
                            <img className="w-25" src={imagen} alt="" />
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form className="" onSubmit="" action="#">
                            
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control rounded-4" id="txtusuario" required/>
                                <label htmlFor="txtusuario">Nombre de Usuario</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control rounded-4" id="txtpassword"  required/>
                                <label htmlFor="txtpassword">Contraseña</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control rounded-4" id="txttag"  required/>
                                <label htmlFor="txttag">Número de TAG</label>
                            </div>
                            <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-dark" type="submit">Iniciar Sesión</button>
                            
                            </form>
                            <button className="w-100 mb-2 btn btn-md rounded-4 btn-primary btn-dark" type="submit">¿Olvido su usuario o contraseña?</button>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}