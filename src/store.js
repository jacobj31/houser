import {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city:'',
    state:'',
    zip:'',
    img:"",
    mortgage:'',
    rent:''
}
export const UPDATE_NAME="UPDATE_NAME"

function reducer (state = initialState, action){
    const {payload, type} = action

    switch(type){
        case UPDATE_NAME: return{...state, name:payload}

        default: return state
    }
}

export default createStore(reducer)

