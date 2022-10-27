import Cliente from "./Teste1"
 import Iconedeletar from "./iconedeletar"
 import Iconeeditar from "./Iconeeditar"
import Home from "./index"

export default function Tabela(){
    return(
<div className="bg-slate-200"{...renderizarcabecalho}>

<table><tr><td>nome</td><td>id</td><>idade</></tr><tr><Cliente/></tr></table>
<button onClick={Home} className={"bg-lime-400"}>{renderizardados}<Iconeeditar/></button>
<button className={"bg-red-700"}> <Iconedeletar/></button>
</div>
    )
}
    function renderizarcabecalho(){
        return (
            <div>
                <th className="text-left-p-4">id</th>
                <th className="text-left p-2">idade</th>
                <th className="text-left p-8">nome</th>
                {renderizardados}
            </div>
        )
        }
        function renderizardados(Cliente){
            return Cliente?.map((Cliente));{
            
            }
        
        }
        return(
            <div>
       <td>{Cliente}</td>   
     
       </div>
        )
        
        

  
  

        