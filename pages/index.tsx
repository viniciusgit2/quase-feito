import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Formulario from './Formulario'
import Cliente from './Cliente'
import Botoes from './Botoes'



const Home: NextPage = () => {
  return (

    <div className='border 10px border-r-emerald-600'>
      <h1 className='text-lime-500'>dados do projeto</h1>
      <h2><Cliente />
      </h2>
      <h3><Formulario /></h3>
      <h4 ><Botoes />falsos Botoes</h4>
    </div>
  )
}

export default Home
