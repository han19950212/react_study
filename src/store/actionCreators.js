import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes';
import axios from 'axios'

export const getChangeInputValue =(value)=>({
    type:CHANGE_INPUT_VALUE,
    value:value
})

export const getAddTodoItem =()=>({
    type:ADD_TODO_ITEM,
})

export const getDeleteTodoItem =(e)=>({
    type:DELETE_TODO_ITEM,
    index:e
})

export const initListAction =(data)=>({
    type:INIT_LIST_ACTION,
    data:data
})

export const getTodoList =()=>{
    return(dispatch)=>{
        axios.get('/list').then((res)=>{
            const data=res.data;
            console.log(data)
            const action =initListAction(data);
            dispatch(action);
        })
    }
}
