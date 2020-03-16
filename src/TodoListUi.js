import React from 'react'
import { Input,Button, List } from 'antd'
import 'antd/dist/antd.css'


const TodoListUi =(props)=>{
    return(
        <div>
        <Input 
            value={props.inputValue} 
            placeholder="todo info" 
            style={{width:'300px',marginLeft:'10px'}}
            onChange={props.handleInputChange} 
        />
        <Button onClick={props.handleClickItem} type='primary'>提交</Button>
            <List
                style={{marginTop:'10px',width:'300px',marginLeft:'10px'}}
                bordered
                dataSource={props.list}
               
                renderItem={(item,index) => (
                    <List.Item  onClick={()=>{props.handleDeleteItem(index)}}>
                        {item}
                    </List.Item>
                )}
                />
         </div>
    )
}


// class TodoListUi extends Component{

//     render(){
//         return(
//             <div>
//             <Input 
//                 value={this.props.inputValue} 
//                 placeholder="todo info" 
//                 style={{width:'300px',marginLeft:'10px'}}
//                 onChange={this.props.handleInputChange} 
//             />
//             <Button onClick={this.props.handleClickItem} type='primary'>提交</Button>
//                 <List
//                     style={{marginTop:'10px',width:'300px',marginLeft:'10px'}}
//                     bordered
//                     dataSource={this.props.list}
                   
//                     renderItem={(item,index) => (
//                         <List.Item  onClick={(index)=>{this.props.handleDeleteItem(index)}}>
//                             {item}
//                         </List.Item>
//                     )}
//                     />
//              </div>
//         )
//     }

// }
export default TodoListUi