import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Formulario from './Formulario'

import Tabela from './Tabela'
import Layoout from './Layout'
import { useState } from 'react'
import Cliente from './Teste1'


const Home: NextPage = () => {

  
 return (

    <div className ={'  bg-emerald-500 justify-center'}>
      <h1 className='px-5 py-2xl'> </h1>
<h1><Layoout titulo='cadastrosimples'></Layoout></h1>
<span>qq</span>
<h2> <Tabela {...Cliente} ></Tabela></h2>
      <h3><Formulario /></h3>

    </div>
 )
}


export default Home
