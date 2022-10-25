import Titulo from "./Titulo"
 export interface Layoutpros{
    titulo:string
    Chiildren?:any
 }


export default function Layoout(props:Layoutpros){
    return(       <><div className=' p-6flex-col w-2/3 bg-white text-black'>cadastro simples</div><div><Titulo/></div></>
    )
    
       
}