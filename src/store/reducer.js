import actionTypes from './actionTypes';
const defaultState = {
  inputValue:'输入数据',
  list:[1,2,3,4,5,6]
}

export default (state = defaultState,action)=>{

  if(action.type === actionTypes.CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
}else if(action.type === actionTypes.ADD_TODO_ITEM){
  const newState = JSON.parse(JSON.stringify(state));
  newState.list.push(newState.inputValue);
  newState.inputValue = '';
  return newState;
}else if(action.type === actionTypes.REMOVE_TODO_ITEM){
  const newState = JSON.parse(JSON.stringify(state));
  newState.list.splice(action.index,1);
  return newState;
}else if(action.type === actionTypes.INIT_LIST_DATA){
  const newState = JSON.parse(JSON.stringify(state));
  newState.list = action.data;
  return newState;
}
    return state;
}