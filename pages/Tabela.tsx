import Cliente from "./Cliente"
 import Iconedeletar from "./iconedeletar"
 import Iconeeditar from "./Iconeeditar"

export default function Tabela(){
    return(
<div className="bg-slate-200"{...renderizarcabecalho}>

<table><tr><td>nome</td><td>id</td><>idade</></tr><tr><Cliente/></tr></table>
<button className={"bg-lime-400"}>{renderizardados}<Iconeeditar/></button>
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
        function renderizardados(){
            return Cliente?.map((Cliente)=>{
                return(continua)
            })
            }
   
        
 function continua(Cliente){
    <div>
     <tr key={Cliente}></tr> 
     <td className="text-left p-4">{Cliente}</td>   
    
    </div>
  }

