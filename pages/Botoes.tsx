import React, { useState } from "react";


import Tabela from "./Tabela";
import Formulario from "./Formulario";


  interface BotoesProps{
  children:any
    cor?:"green"|"red"
    classname?:String
    onclick?:()=>void
 }
 export default function Botoes(props:BotoesProps){
  return(
    <button  onClick={props.onclick} className="${props.cor} text-zinc-100 px-4 py-2 rounded-md-"{...props.classname}></button>
  )
 }
 