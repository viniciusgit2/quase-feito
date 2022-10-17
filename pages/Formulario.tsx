import { useState } from "react";
import Cliente from "./Cliente";
import Entrada from "./Entrada";

export default function Formulario (){

    return(
        <div className="bg-red-600">
        <><Entrada type texto={"nome"} onchange></Entrada><Entrada texto="idade"tipo={"number"}></Entrada></>
        </div>
            )
            }
