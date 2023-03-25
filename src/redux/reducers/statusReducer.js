import { produce } from 'immer'
import * as actionTypes from '../constants/constants'

const initalState = {
    allStatus: null
}

export const statusReducer = (state = initalState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case actionTypes.ALL_STATUS: {
                draft.allStatus = payload
                break
            }
            default:
                break
        }

    })
}