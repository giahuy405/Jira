import {
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { managerService } from "../../../services/ManagerService";
import * as actionTypes from "../../constants/constants";
import Swal from "sweetalert2";

export function* managerSaga() {
  //----------LIST USER----------------
  yield takeLatest(
    actionTypes.GET_LIST_USER_API,
    function* listUser({ type, payload, navigate }) {
      try {
        const res = yield call(() => managerService.listUser());
        yield put({
          type: actionTypes.USER_LIST_INFO,
          payload: res.data.content,
        });
      } catch (err) {
        console.log(err);
      }
    }
  );

  //----------OPEN MODAL EDIT----------------
  yield takeLatest(
    actionTypes.OPEN_EDIT_USER,
    function* open({ type, payload, navigate }) {
      yield put({
        type: actionTypes.MODAL_USER_EDIT_OPEN,
      });
    }
  );
  //-----------CLOSE MODAL EDIT ---------------
  yield takeLatest(
    actionTypes.CLOSE_EDIT_USER,
    function* close({ type, payload, navigate }) {
      yield put({
        type: actionTypes.MODAL_USER_EDIT_CLOSE,
      });
    }
  );
  //--------------GET INFO USER-----------------
  yield takeLatest(
    actionTypes.GET_INFO_USER,
    function* infoUsers({ type, payload, navigate }) {
      try {
        const res = yield call(() => managerService.infoUser(payload));
        yield put({
          type: actionTypes.EDIT_INFO_USER,
          payload: res.data.content[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  );
  //---------------------EDIT USER---------------
  yield takeLatest(
    actionTypes.PUT_SAVE_INFO_USER,
    function* editUsers({ type, payload, navigate }) {
      try {
        yield call(() => managerService.editUser(payload));
        yield put({
          type: actionTypes.GET_LIST_USER_API,
        });
        yield put({
          type: actionTypes.MODAL_USER_EDIT_CLOSE,
        });
        yield put({
          type: actionTypes.OPEN_ALERT_EDIT_USER,
          payload: "save changes successfully",
        });
        yield delay(2500);
        yield put({
          type: actionTypes.CLOSE_ALERT_EDIT_USER,
        });
      } catch (err) {
        console.log(err);
      }
    }
  );
  //--------------DELETE USER----------------
  yield takeLatest(actionTypes.DELETE_USER,function * deleteUser ({type,payload,navigate}){
    try{
        console.log(payload);
        yield call(()=>managerService.deleteUser(payload)); 
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2600,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: 'Delete success !'
        })
        yield put({
            type: actionTypes.GET_LIST_USER_API,
          });
    }catch(err){
        console.log(err);
    }
  })
  // --------------CREATE USER-------------------------
yield takeLatest(actionTypes.POST_CREATE_USER, function * ({type,payload,navigate}){
    yield call(()=>managerService.createUser(payload));
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2600,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: 'Delete success !'
    })
    yield put({
        type: actionTypes.GET_LIST_USER_API,
      });
      yield put({
        type:actionTypes.CLOSE_MODAL_CREATE_USER
      })

})  

///---------------------SEARCH USER--------------
yield takeLatest (actionTypes.SEARCH_USER_LIST, function * ({type, payload,navigate}){
   const res =  yield call(()=>managerService.infoUser(payload));
   yield put({
    type: actionTypes.USER_LIST_INFO,
    payload: res.data.content,
  });
})
}
