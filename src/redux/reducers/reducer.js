import { produce } from 'immer'
import * as actionTypes from '../constants/constants'

const initalState = {
    infoUser: null,
    isLoading: false,
    activeMenu: true,
<<<<<<< HEAD
    modalEditOpen: false,
    modalTaskOpen: false,

=======
    modalOpen: false,
    modalUser:false,
    modalAlert: {
        visible:false,
        contentAlert:""
    },
    modalCreateUser:false
   
>>>>>>> 10c99c16da8952ba2110b21f673382ea41b94ce7
}

export const reducer = (state = initalState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case actionTypes.LOGIN_INFO: {
                draft.infoUser = payload
                break
            }
            case actionTypes.DISPLAY_LOADING: {
                draft.isLoading = true
                break
            }
            case actionTypes.HIDE_LOADING: {
                draft.isLoading = false
                break
            }
            case actionTypes.SET_ACTIVE_MENU: {
                draft.activeMenu = payload
                break
            }
            case actionTypes.PROJECT_CATEGORY: {
                draft.projectCategory = payload
                break
            }
            case actionTypes.OPEN_MODAL_EDIT: {
                draft.modalEditOpen = true
                break
            }
            case actionTypes.CLOSE_MODAL_EDIT: {
                draft.modalEditOpen = false
                break
            }
            case actionTypes.OPEN_MODAL_TASK: {
                draft.modalTaskOpen = true
                break
            }
            case actionTypes.CLOSE_MODAL_TASK: {
                draft.modalTaskOpen = false
                break
            }
            case actionTypes.MODAL_USER_EDIT_CLOSE: {
                draft.modalUser = false
                break
            }
            case actionTypes.MODAL_USER_EDIT_OPEN: {
                draft.modalUser = true
                break
            }
            case actionTypes.OPEN_ALERT_EDIT_USER: {
                draft.modalAlert.visible = true
                draft.modalAlert.contentAlert = payload
                break
            }
            case actionTypes.CLOSE_ALERT_EDIT_USER: {
                draft.modalAlert.visible = false
                break
            }
            case actionTypes.OPEN_MODAL_CREATE_USER: {
                draft.modalCreateUser = true
                break
            }
            case actionTypes.CLOSE_MODAL_CREATE_USER: {
                draft.modalCreateUser = false
                break
            }
            default:
                break
        }
    })
}