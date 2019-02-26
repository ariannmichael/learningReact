import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import {BoaTarde, BoaNoite} from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'


const elemento = <h1>React!</h1>

ReactDOM.render(<div>
    <Pai nome="Paulo" sobrenome="Silva">
        {/* Como passo os componentes filhos aqui */}
    </Pai>
</div>, document.getElementById('root'))