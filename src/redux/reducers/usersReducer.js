import { produce } from 'immer'
import * as actionTypes from '../constants/constants'

const initalState = {
    allUsers: null,
    usersByIdProj: null

}

export const userReducer = (state = initalState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case actionTypes.ALL_USERS: {
                draft.allUsers = payload
                break
            }
            case actionTypes.USERS_BY_ID_PROJ: {
                draft.usersByIdProj = payload
                break
            }
            default:
                break
        }
    })
}