import React from "react";
import Iconedeletar from "./iconedeletar";
import Iconeeditar from "./Iconeeditar";

export default function Botoes(){
    return(
        <div>
            <  button className="focus-visible:relative bg-gradient-to-br divide-red-600-500  text-red-600">< Iconedeletar></Iconedeletar>falso deletar</button>
            <button className="focus-visible:relative bg-gradient-to-br divide-green-500  text-emerald-300"> <Iconeeditar></Iconeeditar>falso editar</button>
    
        </div>
    )
}