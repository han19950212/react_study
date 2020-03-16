// import  {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'
import React, { Component } from 'react'

import {getTodoList,getChangeInputValue,getAddTodoItem,getDeleteTodoItem} from './store/actionCreators'

import store from './store/index.js'
import TodoListUi from './TodoListUi'


class TodoList extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleClickItem=this.handleClickItem.bind(this);
        this.handleDeleteItem=this.handleDeleteItem.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render(){
        return(
            <TodoListUi 
            inputValue={this.state.inputValue}  
            handleInputChange={this.handleInputChange}
            handleClickItem={this.handleClickItem}
            list={this.state.list}
            handleDeleteItem={this.handleDeleteItem}
            />
        )
    }

    componentDidMount(){
        const action = getTodoList();
        store.dispatch(action)
         //这个地方有点听不懂了
    }

    handleInputChange(e){
        const action =getChangeInputValue(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange(e){
        this.setState(store.getState())   //这个意思是，重新渲染，整个仓库  卧槽，这里好叼
    }

    handleClickItem(){
        const action = getAddTodoItem()
        store.dispatch(action)
    }

    handleDeleteItem(e){   //删除
        const action = getDeleteTodoItem(e)
        store.dispatch(action)
    }
}

export default TodoList