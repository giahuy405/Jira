import { produce } from 'immer'
import * as actionTypes from '../constants/constants'

const initalState = {
    taskType: null,
    openModalEditTask: false,
}

export const taskReducer = (state = initalState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case actionTypes.ALL_TASK_TYPE: {
                draft.taskType = payload
                break
            }
            case actionTypes.OPEN_MODAL_EDIT_TASK: {
                draft.openModalEditTask = true
                break
            }
            case actionTypes.CLOSE_MODAL_EDIT_TASK: {
                draft.openModalEditTask = false
                break
            }
            default:
                break
        }
    })
}