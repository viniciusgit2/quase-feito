import { useState } from "react";
import Cliente from "./Teste1";
import Entrada from "./Entrada";

export default function Formulario (){

    return(
        <div className="bg-red-600">
          
        <><Entrada tipo texto={"nome"} onchange></Entrada><Entrada texto="idade"tipo={"number"}/></>
    
        </div>
            )
            }
