import { produce } from 'immer'
import * as actionTypes from '../constants/constants'

const initalState = {
    projectCategory: null
}

export const projectReducer = (state = initalState, { type, payload }) => {
    return produce(state, draft => {
            switch (type) {
                case actionTypes.PROJECT_CATEGORY: {
                    draft.projectCategory = payload
                    break
                }
                default:
                    break
            }
        
    })
}