import React from "react";
import imgpeaje from "../images/peajeHome.png";
import telefono from "../images/telefono.png";
import freepass from "../images/FREE-PASS.PNG";
import cash from "../images/CASH.PNG";
import cashcard from "../images/CASH-CARD.PNG";

export function ContenidoHome(){
    return(
        <div className="container py-4 pt-0" >
            <div className="p-3  mb-4 rounded-3">
            <div className="container-fluid py-5">
                <h1 className="text-center">Plataforma</h1>
                <h1 className="text-center">Sistema de Peajes</h1>
                <img className="w-100" src={imgpeaje} alt="" />
                <h4 className=" fs-4">Solución de control de la recaudación de peaje por ventanilla o free-pass.</h4>
            </div>
            </div>

            <div className="row align-items-md-stretch">
            <div className="col-md-4">
                <div className="h-100 p-5 bg-transparent border rounded-3">
                <a href="/freepass"><img className="w-100" src={freepass} alt=""/></a>
                <h2 className="text-center">Free-Pass</h2>
                <p>
                    El peaje free-pass permite gestionar el cobro electrónico sin interferir 
                    en el flujo de circulación, utilizando como medio de identificación un dispositivo
                    electrónico (tag) instalado en el vehículo. El débito de pago se hace directamente
                    de la tarjeta que recarga el usuario a través de la página del consorcio. 
                </p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="h-100 p-5 bg-transparent border rounded-3">
                <a href="/cash"><img className="w-100" src={cash} alt=""/></a>
                <h2 className="text-center">Pago Manual</h2>
                <p>
                    En este modelo el usuario de la autopista paga por su utilización en las
                    estaciones de peaje instaladas a lo largo de la infraestructura.
                </p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="h-100 p-5 bg-transparent border rounded-3">
                <a href="/cashcard"><img className="w-100" src={cashcard} alt=""/></a>
                <h2 className="text-center">Peaje Free-Flow</h2>
                <p>
                    Permite el pago del peaje, combinando la forma de pago por ventanilla
                    y tarjeta.
                </p>
                </div>
            </div>
            </div>
            <div className="pt-3 mt-4 row text-center border" id="menuUsuarios">
                <h3 className="text-black">Registro de Usuarios</h3>
                <div className="col">
                    <a className="h3" href="/registro">Externos</a>
                </div>
                <div className="col">
                    <a className="h3" href="/#optInternos">Internos</a>
                </div>
                <div className="col">
                    <a className="h3" href="/registro/adm">Administradores</a>
                </div>
            </div>
            <div className="pt-3 mt-4 row text-center border" id="optInternos">
            <h3 className="text-black">Opciones para usuario interno</h3>
                <div className="col">
                    <a className="h4" href="/registro/internos">Registro</a>
                </div>
                <div className="col">
                    <a className="h4" href="/interno/peaje">Crear Peaje</a>
                </div>
                <div className="col">
                    <a className="h4" href="/interno/consorcio">Crear consorcio</a>
                </div>
                <div className="col">
                    <a className="h4" href="/interno/recargar">Recargar TAG</a>
                </div>
                <div className="col">
                    <a className="h4" href="/interno/reporte">Generar Reporte</a>
                </div>
            </div>

            <footer className="pt-3 mt-4 text-muted border-top">
                <span className="d-flex justify-content-center">
                    <img width="30px" src={telefono} alt="" />
                    <h2 className="m-5 my-0">Linea de atención: 6760652</h2>
                    <h2 className="m-5 my-0">correo: atencion@costa.com.co</h2>
                </span>
            </footer>
        </div>
    );
}
