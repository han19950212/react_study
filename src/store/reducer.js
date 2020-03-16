import  {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes'
const defaultState = { //默认给仓库为空
    inputValue:'123',
    list:['133','4455','12134']
}; 
export default(state = defaultState,action)=>{
 
    //做一层判断，是否是修改input的值
    if(action.type===CHANGE_INPUT_VALUE){
        //把上面的仓库，深拷贝一层放到这里，因为绝不能直接修改上面的仓库里的内容，
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue =  action.value;   //把传过来的值，放到这个对象中
        return newState // 这里返回，是返回给，index.js这个文件中，就是store  
      }

    //准备添加item中  
    if(action.type===ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        if(newState.inputValue!==""){   //判空
            newState.list.push(newState.inputValue )
            newState.inputValue="";
            return newState
        }

    } 

    //删除item中的内容
    if(action.type===DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        const index =action.index;
        newState.list.splice(index,1)
        return newState
    }

    if(action.type===INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list=action.data
        return newState
    }

      console.log(state,action)


    return state;  //state存放的就是仓库所有数据内容
}