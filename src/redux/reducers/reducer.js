import { produce } from 'immer'
import * as actionTypes from '../constants/constants'

const initalState = {
    infoUser: null,
    isLoading: false,
}

export const reducer = (state = initalState, { type, payload }) => {
    return produce(state, draft => {
        {
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
                default:
                    break
            }
        }
    })
}