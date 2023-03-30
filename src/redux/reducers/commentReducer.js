import { produce } from 'immer'
import * as actionTypes from '../constants/constants'

const initalState = {
    allCmt: null,
    modalCmt: false
}

export const commentReducer = (state = initalState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case actionTypes.ALL_CMT: {
                draft.allCmt = payload
                break;
            }
            case actionTypes.OPEN_MODAL_CMT:{
                draft.modalCmt = true
                break;
            }
            case actionTypes.CLOSE_MODAL_CMT:{
                draft.modalCmt = false
                break
            }
            default:
                break
        }

    })
}