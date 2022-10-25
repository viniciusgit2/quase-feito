import React, { useState } from "react";

import Cliente from "./Cliente";
import Tabela from "./Tabela";
import Formulario from "./Formulario";


  interface BotoesProps{
  children:any
    cor?:"green"|"red"
    classname?:String
 }
 export default function Botoes(props:BotoesProps){
  return(
    <button className="${props.cor} text-zinc-100 px-4 py-2 rounded-md-"{...props.classname}> {props.children}</button>
  )
 }
