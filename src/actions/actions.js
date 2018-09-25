import GET_LIST from './actionTypes';

// const employees = ['Jon', 'Jaime', 'Arya'];

export const showList = () => dispatch => {
    return {
        type: GET_LIST,
        payload: [{"name":'Jon', "id": '1'}, {"name": 'Jaime',"id":'2'}]
    }
}