import { produce } from 'immer'
import * as actionTypes from '../constants/constants'

const initalState = {
    allCmt: null,
}

export const commentReducer = (state = initalState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case actionTypes.ALL_CMT: {
                draft.allCmt = payload
                break;
            }
            default:
                break
        }

    })
}