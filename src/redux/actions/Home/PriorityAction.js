import * as actionTypes from '../../constants/constants'


/* API */
export const getAllPriorityAction = (id) => ({
    type: actionTypes.GET_ALL_PRIORITY,
    id
})