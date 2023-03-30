import * as actionTypes from '../../constants/constants'


/* API */
export const getAllCommentAction = (taskId) => ({
    type: actionTypes.GET_ALL_CMT_API,
    taskId
});
export const deleteCommentAction = (payload,taskId) => ({
    type: actionTypes.DELETE_CMT_API,
    payload,
    taskId
});
