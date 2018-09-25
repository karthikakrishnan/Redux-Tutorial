import GET_LIST from '../actions/actionTypes';

const initialState = {
    employees: [{"name":'Karthika', "id": '7'}]
}

export default function(state = initialState, action) {
    console.log('swittch', action)
    switch(action.type) {
        case GET_LIST:
            return { ...state, employees: action.payload }
        default:
            return state;
    }
}