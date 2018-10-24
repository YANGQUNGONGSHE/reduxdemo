import React, { Component } from 'react';
import {Input,Button,List} from 'antd'; 
import 'antd/dist/antd.css';
import store from './store';
import {getAddTodoItem,getRemoveTodoItem,getChangeInputValue} from './store/actionCreator';
import {connect} from 'react-redux';

class TodoList extends Component {

	  constructor(props){
			super(props);
			this.state = store.getState();
			// store.subscribe(this.handleStoreChange);
		}
		handleOnClick = ()=>{
			const action = getAddTodoItem();
			this.dispatchAction(action);
		}

		// handleChange = (e)=>{
		// 	const action = getChangeInputValue(e.target.value);
		// 	this.dispatchAction(action);
		// }

		handleDeleteClick (index){
			const action = getRemoveTodoItem(index);
			this.dispatchAction(action);
		}

		handleStoreChange = ()=>{
      this.setState(store.getState());
		}

		dispatchAction(action){
			store.dispatch(action);
		}

		render(){
			return(
					<div style = {{margin:10}}>
						<Input 
							style = {{width:300,marginRight:10}}
							value = {this.props.inputValue}
							onChange = {this.props.handleChange}
						/>
						<Button 
							type ='primary'
							onClick = {this.handleOnClick}
						>提交</Button>
						<List
							style = {{width:300,marginTop:10}}
							dataSource = {this.props.list}
							renderItem = {(item,index)=>(
								<List.Item
									onClick = {()=>{
										this.handleDeleteClick(index);
									}}
								>
									{item}
								</List.Item>
							)}
						/>
					</div>
			);
		}
}

const mapStateToProps = (state)=>{
	return{
			inputValue:state.inputValue,
			list:state.list,
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		handleChange(e){
			const action = getChangeInputValue(e.target.value);
			dispatch(action);
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
