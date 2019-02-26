import React, {Component} from 'react'


export default class Saudacao extends Component {
    state = {
        tipo: "Fala",
        nome: "Pedro"
    }


    setTipo(e){
        this.setState({tipo: e.target.value})
    }
    
    render(){
        const { tipo, nome } = this.state
        return(
            <div>
                <h1>{tipo} {nome}</h1>
                <hr/>
                <input type="text" placeholder="Tipo..."
                    value={tipo} onChange={e => this.setTipo(e)}/>
                <input type="text" placeholder="Nome..." value={nome}/>
            </div>
        )
    }
}