import actionTypes from './actionTypes';


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
})



