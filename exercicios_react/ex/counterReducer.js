const INITIAL_STATE = {step: 1, number: 0}

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'DEC':
            return({...state, number: state.number - state.step})
        case 'INC':
            return({...state, number: state.number + state.step})
        case 'STEP_CHANGED':
            return({...state, step: +action.payload})
        default:
            return state
    }
}