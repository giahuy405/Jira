import { produce } from 'immer'
import * as actionTypes from '../constants/constants'

const initalState = {
    projectCategory: null,
    allProject: null,
    allProjectKeyword: null,
    projectDetailInfo: null,
    userProject: null,
    taskDetail: null,
}

export const projectReducer = (state = initalState, { type, payload, name, value }) => {
    return produce(state, draft => {
        switch (type) {
            case actionTypes.PROJECT_CATEGORY: {
                draft.projectCategory = payload
                break
            }
            case actionTypes.ALL_PROJECT: {
                draft.allProject = payload
                break
            }
            case actionTypes.ALL_PROJECT_KEYWORD: {
                draft.allProjectKeyword = payload
                break
            }
            case actionTypes.PROJECT_DETAIL_INFO: {
                draft.projectDetailInfo = payload
                break
            }
            case actionTypes.USER_PROJECT: {
                draft.userProject = payload
                break
            }
            case actionTypes.TASK_DETAIL: {
                draft.taskDetail = payload
                break
            }
            case actionTypes.EDIT_INFO_TASK_DETAIL: {
                draft.taskDetail = { ...state.taskDetail, [name]: value }
                break
            }
            case actionTypes.TASK_DETAIL_ASSIGN: {
                draft.taskDetail = { ...state.taskDetail, assigness: [...state.taskDetail.assigness, payload] }
                break
            }
            case actionTypes.REMOVE_USER_ASSIGN: {
                draft.taskDetail.assigness = [...state.taskDetail.assigness.filter(item => item.id !== payload)]
                break
            }
            default:
                break
        }

    })
}