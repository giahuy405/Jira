import * as actionTypes from '../../constants/constants'

export const openModalEditTaskAction = { type: actionTypes.OPEN_MODAL_EDIT_TASK }
export const closeModalEditTaskAction = { type: actionTypes.CLOSE_MODAL_EDIT_TASK }

export const editInfoTaskDetailAction = (name, value) => ({
    type: actionTypes.EDIT_INFO_TASK_DETAIL,
    name, value
})
/* API */
export const getTaskTypeAction = { type: actionTypes.GET_ALL_TASK_TYPE }
export const deleteTaskIdAction = (taskId,id)=>({
type:actionTypes.DELETE_TASK_id,
taskId,
id
})
