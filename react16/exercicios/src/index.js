import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import {BoaTarde, BoaNoite} from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'


const elemento = <h1>React!</h1>

ReactDOM.render(<div>
    <Saudacao/>
</div>, document.getElementById('root'))