import './App.css'
import React from 'react'
import Primeiro from './components/Primeiro'
import Comparamneto from'./components/Comparamneto'
import Comfilhos from './components/Comfilhos'
import Card from './layout/Card'
import Repeticao from './layout/Repeticao'
import Condicional from './layout/condicional'
import CondicionalComif from './layout/CondicionalComif'

export default (props) => (
<div className="App">
      
<Card titulo ="#05 - Condicional v1">
<Condicional numero={10}></Condicional>
</Card>    
<Card titulo ="#04 - Repetição">
<Repeticao></Repeticao>
</Card>
<Card titulo="#03 -Componente Com Filhos">
<Comfilhos>
        <ul>
            <li>ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
        </ul>
         </Comfilhos>
    </Card>    
<Card titulo="#02 -Componente Com Paramentro ">
<Comparamneto titulo="esse e o titulo"
         subtitulo ="esse e o subtitulo "/>
        </Card>
        <Card titulo="#01 - primeiro componete">
        <Primeiro/> 
        </Card>
    </div>
    );
