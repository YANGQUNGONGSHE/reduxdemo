import React, { Component } from 'react';
import {Input,Button,List} from 'antd'; 
import 'antd/dist/antd.css';
// import store from './store';
import {getAddTodoItem,getRemoveTodoItem,getChangeInputValue,getInit} from './store/actionCreator';
import {connect} from 'react-redux';

class TodoList extends Component {

	  componentDidMount(){
       this.props.initlistData();
		}

		render(){
			const {inputValue,handleChange,handleOnClick,list,handleDeleteClick} = this.props;
			return(
					<div style = {{margin:10}}>
						<Input 
							style = {{width:300,marginRight:10}}
							value = {inputValue}
							onChange = {handleChange}
						/>
						<Button 
							type ='primary'
							onClick = {handleOnClick}
						>提交</Button>
						<List
							style = {{width:300,marginTop:10}}
							dataSource = {list}
							bordered
							renderItem = {(item,index)=>(
								<List.Item
									onClick = {()=>{
										handleDeleteClick(index);
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
		},
		handleOnClick(){
			const action = getAddTodoItem();
			dispatch(action);
		},
		handleDeleteClick (index){
			const action = getRemoveTodoItem(index);
			dispatch(action);
		},
		initlistData(){
			const action = getInit();
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
