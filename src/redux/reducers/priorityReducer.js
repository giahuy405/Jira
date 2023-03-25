import { produce } from 'immer'
import * as actionTypes from '../constants/constants'

const initalState = {
    allPriority: null
}

export const priorityReducer = (state = initalState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case actionTypes.ALL_PRIORITY: {
                draft.allPriority = payload
                break
            }
            default:
                break
        }

    })
}