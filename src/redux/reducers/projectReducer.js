import { produce } from 'immer'
import * as actionTypes from '../constants/constants'

const initalState = {
    projectCategory: null,
    allProject: null,
    projectDetailInfo: null,
}

export const projectReducer = (state = initalState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case actionTypes.PROJECT_CATEGORY: {
                draft.projectCategory = payload
                break
            }
            case actionTypes.ALL_PROJECT: {
                draft.allProject = payload
                break
            }
            case actionTypes.PROJECT_DETAIL_INFO: {
                draft.projectDetailInfo = payload
                break
            }
            default:
                break
        }

    })
}