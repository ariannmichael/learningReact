import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {
    state = {...initialState}

    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        if(this.state.current === 0) {
            this.setState({operation, current: 1, clearDisplay: true})
        } else {
            const finish = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try{
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch {
                values[1] = this.state.values[0]
            }

            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: finish ? null : operation,
                current: finish ? 0 : 1,
                clearDisplay: !finish,
                values
            })
        }
        
    }

    addDigit(n) {
        // não permite colocar mais de um ponto
        if (n === '.' && this.state.displayValue.includes('.')) return

        // limpa o display caso no display estaja 0 ou o clearDisplay for true
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay

        //se clearDisplay for true o valor será vazio, caso não ele recebe o valor do displayValue/ valor atual    
        const currentValue = clearDisplay ? '' : this.state.displayValue

        //displayValue recebe o valor existente do currentValue e concatena com o valor recebido
        const displayValue = currentValue + n

        //as mudança do valor é aplicado ao state
        this.setState({displayValue, clearDisplay: false})

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
        }
    }
    
    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)
        return(
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={() => this.clearMemory()} triple/>
                <Button label="/" click={setOperation} operation/>
                <Button label="7" click={addDigit}/>
                <Button label="8" click={addDigit}/>
                <Button label="9" click={addDigit}/>
                <Button label="*" click={setOperation} operation/>
                <Button label="4" click={addDigit}/>
                <Button label="5" click={addDigit}/>
                <Button label="6" click={addDigit}/>
                <Button label="-" click={setOperation} operation/>
                <Button label="1" click={addDigit}/>
                <Button label="2" click={addDigit}/>
                <Button label="3" click={addDigit}/>
                <Button label="+" click={setOperation} operation/>
                <Button label="0" click={addDigit} double/>
                <Button label="." click={addDigit}/>
                <Button label="=" click={setOperation} operation/>
            </div>
        )
    }
}