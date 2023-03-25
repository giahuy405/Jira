import { produce } from 'immer'
import * as actionTypes from '../constants/constants'

const initalState = {
    allUsers: null,
    usersByIdProj: null,

    listUser: null,
    infoUser: null,
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
            case actionTypes.USER_LIST_INFO: {
                draft.listUser = payload;
                break;
            }
            case actionTypes.EDIT_INFO_USER: {
                draft.infoUser = payload;
                break;
            }
            default:
                break
        }
    })
}