import React from 'react'
import ReactDom from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import fieldReducers from './fieldReducers'

import Field from './field'

const reducers = combineReducers({
    field: fieldReducers
})

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='teste'/>
    </Provider>
    , document.getElementById('app'))