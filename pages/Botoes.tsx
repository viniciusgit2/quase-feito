import React from "react";
import Iconedeletar from "./iconedeletar";
import Iconeeditar from "./Iconeeditar";
import Cliente from "./Cliente";
import Tabela from "./Tabela";
import Formulario from "./Formulario";
export default function Botoes(){
    return(
        <div className="outline-yellow-400">
            <h1><select> <option > <Tabela></Tabela></option> <option><Formulario/></option></select>quase certo select <Iconeeditar/> </h1>
        
            <h2> <button autoSave="Formulario">provalvamente falso salvar </button></h2>
            <h3> <button onSubmit={Formulario}> </button> talves enviar</h3>
            <h4> <button type="reset">duvido que funcione</button><Iconedeletar/></h4>
            
        </div>
    )
    }