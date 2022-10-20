import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Formulario from './Formulario'
import Cliente from './Cliente'
import Botoes from './Botoes'
import Tabela from './Tabela'



const Home: NextPage = () => {
  return (

    <div className={'bg-emerald-500'}>
      <h1 className='text-red-600'>dados do projeto</h1>
<h2> <Tabela/></h2>
      <h3><Formulario /></h3>
  <h4><Botoes/></h4>
    </div>
  )
}

export default Home
