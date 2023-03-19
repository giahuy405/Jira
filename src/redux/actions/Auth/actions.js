import * as actionTypes from '../../constants/Auth/AuthConstant'

export const loginAction = (payload) => {
    return {
        type: actionTypes.LOGIN_API,
        payload
    }
}