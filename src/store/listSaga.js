import actionTypes from './actionTypes';
import { put, takeEvery} from 'redux-saga/effects' 
import {initListData} from './actionCreator';
import axios from 'axios';

function* getinitList(){
    try{
        const res = yield axios('/list.json');
        const action = initListData(res.data);
        yield put(action);
    }catch(error){
       console.log('请求list数据失败！！！');
    }
}

function* listSaga(){
   yield takeEvery(actionTypes.GET_INIT_LIST,getinitList);
}

export default listSaga;