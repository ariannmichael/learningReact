import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
    <Family lastName='Silva'>
        <Member name='Guilherme'/>
        <Member name='Rafael'/>
        <Member name='Gabriela'/>
    </Family>
    , document.getElementById('app'))