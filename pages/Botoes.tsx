import React from "react";
import Iconedeletar from "./iconedeletar";
import Iconeeditar from "./Iconeeditar";
import Cliente from "./Cliente";
import Tabela from "./Tabela";
import Formulario from "./Formulario";
export default function Botoes(){
    return(
        <div>
            <  button className="focus-visible:relative bg-gradient-to-br divide-red-600-500  text-red-600">< Iconedeletar></Iconedeletar>falso restaurar</button>
            <button onReset={Formulario}> </button>
            <button className="focus-visible:relative bg-gradient-to-br divide-green-500  text-emerald-300"> <Iconeeditar></Iconeeditar>falso editar</button>
          <select className={"Cliente"}> falso selecionar</select>
          <button className="bg-emerald-400"autoSave="Formulario">falso salvar</button>
            <button className="bg-orange-500">falso cancelar</button>
        </div>
    )
}