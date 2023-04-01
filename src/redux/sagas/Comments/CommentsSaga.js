
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { commentService } from '../../../services/CommentService'
import Swal from 'sweetalert2'
import * as actionTypes from '../../constants/constants'
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})


/**
 * get all cmt for modal edit task
 * creator : Huy - 28/3/2023
 */
export function* getAllCommentSaga() {
    yield takeLatest(actionTypes.GET_ALL_CMT_API, function* getAllCmt({ type, taskId }) {
        // console.log(taskId);
        try {
            const res = yield call(() => commentService.getAllComments(taskId));
            // console.log(res.data.content);
            yield put({
                type: actionTypes.ALL_CMT,
                payload: res.data.content
            })
        } catch (err) {
            console.log(err.response)
            Toast.fire({
                icon: 'error',
                title: 'Unauthorized !'
            })
        }
    });
    yield takeLatest(actionTypes.POST_CMT_API,function* postCmt ({type,payload}){
        try{
          
            yield call(()=>{commentService.postComments(payload)});
            yield delay(500)
            const res = yield call(() => commentService.getAllComments(payload.taskId));
            yield put({
                type: actionTypes.ALL_CMT,
                payload: res.data.content
            })
        }catch(err){
            console.log(err);
            Toast.fire({
                icon: 'error',
                title: 'Unauthorized !'
            })
        } 
    });
    yield takeLatest(actionTypes.DELETE_CMT_API, function* deleteCmt ({type,payload,taskId}){
        try{
            yield call(()=>{commentService.deleteComments(payload)})
            yield delay(500)
            const res = yield call(() => commentService.getAllComments(taskId));
            yield put({
                type: actionTypes.ALL_CMT,
                payload: res.data.content
            })
            Toast.fire({
                icon: 'success',
                title: 'Delete success !'
            })
        }catch(err){
            console.log(err);
            Toast.fire({
                icon: 'error',
                title: 'Unauthorized !'
            })
        }
    });
    yield takeLatest (actionTypes.PUT_CMT_API, function* putCmt({type,payload,item}){
        try{
            yield call(()=>commentService.putComments(payload,item.id))
            const res = yield call(() => commentService.getAllComments(item.taskId));
            yield put({
                type: actionTypes.ALL_CMT,
                payload: res.data.content
            })
        }catch(err){
            console.log(err);
            Toast.fire({
                icon: 'error',
                title: 'Unauthorized !'
            })
        }
    })
}

