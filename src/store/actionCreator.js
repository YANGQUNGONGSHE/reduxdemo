import actionTypes from './actionTypes';
import axios from 'axios';


export const getAddTodoItem = ()=>({
  type:actionTypes.ADD_TODO_ITEM
});

export const getRemoveTodoItem = (index)=>({
  type:actionTypes.REMOVE_TODO_ITEM,
  index
});

export const getChangeInputValue = (value)=>({
  type:actionTypes.CHANGE_INPUT_VALUE,
  value
});

export const initListData = (data)=>({
  type:actionTypes.INIT_LIST_DATA,
  data
})
//redux-saga测试
export const getInit = ()=>({
   type:actionTypes.GET_INIT_LIST
});

//redux-thunk测试
export const getInitListData = ()=>{
  return(dispatch)=>{
     axios.get('/list.json').then((res)=>{
       const action = initListData(res.data);
       dispatch(action);
     }).catch((error)=>{
       console.log(error);
     });
  }
}



