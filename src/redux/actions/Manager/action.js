
import * as actionTypes from '../../constants/constants'

export const openModalUserEdit = {type:actionTypes.OPEN_EDIT_USER};
export const closeModalUserEdit = {type:actionTypes.CLOSE_EDIT_USER};
export const openModalCreateUser = {type:actionTypes.OPEN_MODAL_CREATE_USER}
export const closeModalCreateUser = {type:actionTypes.CLOSE_MODAL_CREATE_USER}
export const getUserListAction = (payload,navigate) =>{
    return{
        type: actionTypes.GET_LIST_USER_API,
        payload,
        navigate
    }
}
export const getInfoUserEdit = (payload)=>({
    type:actionTypes.GET_INFO_USER,
    payload
})
export const putEditUser = (payload)=>({
    type:actionTypes.PUT_SAVE_INFO_USER,
    payload
})
export const deleteUser = (payload)=>({
    type:actionTypes.DELETE_USER,
    payload
})
export const postCreateUser = (payload)=>({
    type:actionTypes.POST_CREATE_USER,
    payload
})
export const searchUser = (payload)=>({
    type: actionTypes.SEARCH_USER_LIST,
    payload
})
export const updateUserAction = (payload)=>({
    type:actionTypes.UPDATE_INFO_USER,
    payload
})
   

