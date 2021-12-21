import React, {Fragment, useState, useEffect} from "react";
import corsa from "../images/corsablanco.png";
import foto from "../images/fotovehiculo.png";
import freepass from "../images/FREE-PASS.PNG";
import imprimir from "../images/print.png";
import salir from "../images/salir.png";
import cash from "../images/CASH.PNG";
import cashcard from "../images/CASH-CARD.PNG";
import {post, get, patch, borrar} from "../api/http";

export function ContenidoPagos(){
    let titulo;
    let imagen;
    let contenido;
    const [peajes, setPeajes]=useState([]);
    const [doChange, setDoChange]=useState(false);
    const [pagos, setPagos]=useState([]);

    useEffect(()=>{
        get("peajes").then(data=>{
            setPeajes(data.peajes);
        })
        get("pagos").then(data=>{
            setPagos(data.pagos);
        })
    },[]);

    useEffect(()=>{
        if(doChange){
            get("peajes").then(data=>{
                setPeajes(data.peajes);
            })
            get("pagos").then(data=>{
                setPagos(data.pagos);
            })
            setDoChange(false);
        }
    },[doChange]);

    if(window.location.pathname==="/freepass"){
        titulo="Pago electrónico Free-Pass";
        imagen=freepass;
        contenido=
        <Fragment>
            <div className="col text-center">
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Lectura TAG" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="NRO Tarjeta" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Debitar de Tarjeta" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Saldo Tarjeta" readOnly />
            </div>
            <div className="col">
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
            </div>
        </Fragment>
    }
    else if(window.location.pathname==="/cash"){
        titulo="Pago Efectivo - Cash";
        imagen=cash;
        contenido=
        <Fragment>
            <div className="col text-center">
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Tarifa" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Efectivo" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Cambio" readOnly />
            </div>
            <div className="col">
                <input className="m-0 mb-2 text-center text-black shadow" type="text" id="tarifa"/>
                <input className="m-0 mb-2 text-center text-black shadow" type="text" id="efectivo" onPointerOut={()=>document.getElementById("cambio").value=(parseInt(document.getElementById("efectivo").value)-parseInt(document.getElementById("tarifa").value))}/>
                <input className="m-0 mb-2 text-center text-black shadow" type="text" id="cambio"/>
            </div>
        </Fragment>
    }
    else if(window.location.pathname==="/cashcard"){
        titulo="Pago Mixto Cash-Card";
        imagen=cashcard;
        contenido=
        <Fragment>
            <div className="col text-center">
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Tarifa" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="NRO Tarjeta" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Saldo Tarjeta" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Pago Efectivo" readOnly />
                <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Total" readOnly />
            </div>
            <div className="col">
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
                <input className="m-0 mb-2 text-center text-black shadow" type="text" />
            </div>
        </Fragment>
    }
    
    const crearPago=(event)=>{
        event.preventDefault();
        const newpago={
            placa: document.getElementById("placa").value,
            peaje: document.getElementById("selpeaje").value,
            tipo: "efectivo",
            tarifa: parseInt(document.getElementById("tarifa").value)
        }
        post("pagos", newpago);
        alert("Pago realizado con éxito");
        const prevRecaudo=parseInt(peajes.filter(peaje=>peaje.nombre===document.getElementById("selpeaje").value).map(peaje=>peaje.recaudo));
        const newrec=prevRecaudo+parseInt(document.getElementById("tarifa").value);
        const modRecaudo={
            nombre: document.getElementById("selpeaje").value,
            recaudo: newrec
        }
        patch("peajes", modRecaudo);
        console.log(`Recaudo en el peaje ${document.getElementById("selpeaje").value} con éxito`);
        setDoChange(true);
    }

    const ajustarTarifa =(event) =>{
        event.preventDefault();
        if(event.target.value==="1"){
            document.getElementById("ejes").value="2";
            document.getElementById("tarifa").value="8700";
        }
        if(event.target.value==="2"){
            document.getElementById("ejes").value="3";
            document.getElementById("tarifa").value="9500";
        }
        if(event.target.value==="3"){
            document.getElementById("ejes").value="4";
            document.getElementById("tarifa").value="11200";
        }
        if(event.target.value==="4"){
            document.getElementById("ejes").value="5";
            document.getElementById("tarifa").value="15700";
        }
        if(event.target.value==="5"){
            document.getElementById("ejes").value="6";
            document.getElementById("tarifa").value="20900";
        }
    }

    const eliminarPago = (event) =>{
        event.preventDefault();
        const id_pago=document.getElementById("selpago").value;
        const pagoAEliminar=pagos.filter(p=>p._id===id_pago).map(p=>p.peaje);
        const prevRecaudo=parseInt(peajes.filter(pe=>pe.nombre===pagoAEliminar[0]).map(p=>p.recaudo));
        
        const newrec=prevRecaudo-parseInt(pagos.filter(p=>p._id===id_pago).map(p=>p.tarifa)[0]);
        
        const modRecaudo={
            nombre: pagoAEliminar[0],
            recaudo: newrec
        }
        console.log(modRecaudo);
        patch("peajes", modRecaudo);
        borrar("pagos",{id:id_pago});
        alert("Pago eliminado con éxito");
        setDoChange(true);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img className="w-100" src={corsa} alt="" />
                </div>
                <div className="col text-center">
                    <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Peaje" readOnly />
                    <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Categoria" readOnly />
                    <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Ejes" readOnly />
                    <input className="m-0 mb-2 bg-secondary text-center text-white fw-bold" type="text" value="Placa" readOnly />
                </div>
                <div className="col">
                    <select className="m-0 mb-2 text-center text-black shadow w-100" name="selpeaje" id="selpeaje">
                        <option value="">Seleccione un peaje</option>
                        {peajes.map(peaje=>
                            <option value={peaje.nombre}>{peaje.nombre}</option>
                        )}
                    </select>
                    <select className="m-0 mb-2 text-center text-black shadow w-100" onChange={ajustarTarifa} name="selCategoria" id="selCategoria">
                        <option value="1">CAT 1</option>
                        <option value="2">CAT 2</option>
                        <option value="3">CAT 3</option>
                        <option value="4">CAT 4</option>
                        <option value="5">CAT 5</option>
                    </select>
                    <input className="m-0 mb-2 text-center text-black shadow" type="text" id="ejes"/>
                    <input className="m-0 mb-2 text-center text-black shadow" type="text" id="placa"/>
                </div>
                <div className="col">
                    <img className="w-80" src={foto} alt="" />
                </div>
            </div>
            <hr />
            <div className="row">
                <h2>{titulo}</h2>
                <div className="col-2">
                 <img className="w-100" src={imagen} alt="" />
                </div>
                
                {contenido}
                <div className="col-6">
                    <select className="m-4 mb-2 text-center text-black shadow" name="selpago" id="selpago">
                        <option value="">Seleccione un pago</option>
                        {pagos.map(pago=>
                            <option value={pago._id}>{pago.placa} - {pago.peaje}</option>
                        )}
                    </select>
                    <button className="btn btn-danger" onClick={eliminarPago}>Eliminar pago</button>
                </div>
                <div className="col-2 d-flex flex-wrap justify-content-center">
                    <img className="w-25 m-2" src={imprimir} alt="" />
                    <button className="btn btn-success m-2" onClick={crearPago}>Imprimir Tiquete</button>
                    <img className="w-25 m-2" src={salir} alt="" />
                    <button onClick={()=>window.location.pathname="/"} className="btn btn-success m-2"> Salida</button>
                </div>
            </div>

        </div>
    );
}