import * as actionTypes from '../../constants/constants'


/* API */
export const getAllStatusAction = ({ type: actionTypes.GET_ALL_STATUS })
export const updateStatusDragAction = payload =>({
    type:actionTypes.UPDATE_STATUS_DRAG,
    payload
})
 