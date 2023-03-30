import * as actionTypes from '../../constants/constants'

export const loginAction = (payload, navigate) => {
    return {
        type: actionTypes.LOGIN_API,
        payload,
        navigate
    }
}

export const signUpAction = (payload, navigate) => {
    return {
        type: actionTypes.SIGN_UP_API,
        payload,
        navigate
    }
}

export const testTokenAction = { type: actionTypes.TEST_TOKEN_API }
