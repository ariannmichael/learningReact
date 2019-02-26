import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import {BoaTarde, BoaNoite} from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


const elemento = <h1>React!</h1>

ReactDOM.render(<div>
    <Pai nome="Paulo" sobrenome="Silva">
        <Filho nome="Pedro" />
        <Filho nome="Carol" />
        <Filho nome="Carla"/>

    </Pai>
</div>, document.getElementById('root'))