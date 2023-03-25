import { produce } from 'immer'
import * as actionTypes from '../constants/constants'

const initalState = {
    infoUser: null,
    isLoading: false,
    activeMenu: true,
    modalEditOpen: false,
    modalTaskOpen: false,

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
            default:
                break
        }
    })
}