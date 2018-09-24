import axios from 'axios';
import GET_LIST from './actionTypes';

// const employees = ['Jon', 'Jaime', 'Arya'];

export const showList = () => dispatch => {
    return {
        type: GET_LIST,
        payload: ['Jon', 'Jaime', 'Arya']
    }
}