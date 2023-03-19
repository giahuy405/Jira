import { produce } from 'immer'
import * as actionTypes from '../constants/Home/HomeConstant'

const initalState = {
    taskList: null,
    isLoading: false,
}

export const reducer = (state = initalState, { type, payload }) => {
    return produce(state, draft => {
        {
            switch (type) {
                case 'HAHA': {
                    draft.taskList = payload
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
                default:
                    break
            }
        }
    })
}