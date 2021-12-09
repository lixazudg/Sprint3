import React from 'react';
import { Registro } from './vistas/Registro';
import { Home } from './vistas/Home';
import { Inicio } from './vistas/Inicio';
import { Pagos } from './vistas/Pagos';
import { CrearConsorcio } from './vistas/CrearConsorcio';
import { CrearPeaje } from './vistas/CrearPeaje';
import { GenerarReporte } from './vistas/GenerarReporte';

function App() {
  if (window.location.pathname==="/") return <Home />
  else if (window.location.pathname==="/registro") return <Registro tit="externo"/>
  else if (window.location.pathname==="/registro/adm") return <Registro tit="adm" />
  else if (window.location.pathname==="/registro/internos") return <Registro tit="interno"/>
  else if (window.location.pathname==="/inicio") return <Inicio />
  else if (window.location.pathname==="/freepass" || 
          window.location.pathname==="/cash" ||
          window.location.pathname==="/cashcard") return <Pagos />
  else if (window.location.pathname==="/interno/consorcio") return <CrearConsorcio />
  else if (window.location.pathname==="/interno/peaje") return <CrearPeaje />
  else if (window.location.pathname==="/interno/reporte") return <GenerarReporte />
  else return <Home />
}


export default App;
