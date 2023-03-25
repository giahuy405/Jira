import * as actionTypes from '../../constants/constants'


/* API */
export const getUsersAction = (keyword) => ({
    type: actionTypes.GET_ALL_USERS,
    keyword
})

export const getUsersByIdProjAction = (idProject) => ({
    type: actionTypes.GET_USERS_BY_ID_PROJECT,
    idProject
})
