import { produce } from 'immer'
import * as actionTypes from '../constants/constants'

const initalState = {
    taskType: null,

}

export const taskReducer = (state = initalState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case actionTypes.ALL_TASK_TYPE: {
                draft.taskType = payload
                break
            }

            default:
                break
        }
    })
}