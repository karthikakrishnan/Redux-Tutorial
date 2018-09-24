import GET_LIST from '../actions/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
    console.log('swittch', action)
    switch(action.type) {
        case GET_LIST:
            return { ...state, employees: action.payload }
        default:
            return state;
    }
}