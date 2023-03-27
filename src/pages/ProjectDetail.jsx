import { ArrowDownOutlined, ArrowUpOutlined, BugOutlined, FileTextOutlined, SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import BreadCrumd from '../components/Global/BreadCrumd'
import ProjectLayout from '../HOCs/ProjectLayout'
import { getProjectDetail, getTaskDetailAction } from '../redux/actions/Home/ProjectActions'
import { openModalEditTaskAction } from '../redux/actions/Home/TaskAction'
import ModalEditTask from '../components/Home/ModalEditTask'
import { getUsersByIdProjAction } from '../redux/actions/Home/UsersAction'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { updateStatusDragAction } from '../redux/actions/Home/StatusService'
import { getAllCommentAction } from '../redux/actions/Home/Comments'
const ProjectDetail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { projectDetailInfo } = useSelector(state => state.projectReducer);
    useEffect(() => {
        dispatch(getProjectDetail(id))
        dispatch(getUsersByIdProjAction(id))
    }, [])

    const renderPriority = (value) => {
        if (value === 'High' || value === 'Medium') return <ArrowUpOutlined />
        else return <ArrowDownOutlined />
    }
    const colorPriority = (value) => {
        let color;
        switch (value) {
            case 'High':
                color = 'text-red-500'
                break;
            case 'Medium':
                color = 'text-orange-500'
                break;
            case 'Low':
                color = 'text-yellow-500'
                break;
            case 'Lowest':
                color = 'text-lime-500'
                break;
        }
        return color
    }
    const handleDragEnd = (result) => {
        let { destination, draggableId, source } = result;
        // nếu vùng nằm ngoài kanban-> null -> return
        if (!destination) return
        // taskItem thả trên chính taskList của nó -> return
        if (destination.index === source.index && destination.droppableId === source.droppableId) return
        draggableId = JSON.parse(draggableId);
        let payload = {
            "taskId": draggableId.draggableId,
            "statusId": destination.droppableId,
            'id': draggableId.id
        }
        dispatch(updateStatusDragAction(payload));
    }
 
    return (
        <ProjectLayout >
            <BreadCrumd> Projects / Singularity 7.0 / Project Detail</BreadCrumd>
            <div className='h-screen'>
                <h3 className='text-2xl font-medium text-[#172A4D] dark:text-blue-500 mb-3'>Project detail - <span className='text-orange-600'>{projectDetailInfo?.projectName}</span></h3>
                <div className='flex items-center gap-5'>
                    <Input
                        className='w-[160px]'
                        prefix={<SearchOutlined />}
                        placeholder="Search" />
                    <div className='flex items-center'>
                        {projectDetailInfo?.members.map(item =>
                            <div className='coverImgMember' key={item.userId}>
                                <img width={30} src={item.avatar} className='rounded-full imgMember borderForImg' alt={item.userId} />
                            </div>
                        )}
                    </div>
                </div>
                {/* Kanban */}
                <div className="grid grid-cols-4 mt-5 gap-2">
                    <DragDropContext onDragEnd={handleDragEnd}>
                        {projectDetailInfo?.lstTask.map(item =>
                            <Droppable key={item.statusId} droppableId={item.statusId}>
                                {provided =>
                                    <div
                                        key={item.statusId}
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className='bg-gray-100 dark:bg-primary-dark rounded p-1 max-h-96 overflow-auto' >
                                        <h3 className='py-3 pl-1.5 text-xs text-gray-500'>{item.statusName}</h3>
                                        {/* TASK item */}
                                        {item.lstTaskDeTail?.map((taskDetail, index) =>
                                            <Draggable key={taskDetail.taskId?.toString()} index={index} draggableId={JSON.stringify({ id: id, draggableId: taskDetail.taskId?.toString() })}>
                                                {(provided) =>
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className='bg-white shadowKanban dark:text-white dark:bg-secondary-dark my-1.5 hover:bg-gray-200 dark:hover:bg-third-dark '
                                                        onClick={() => {
                                                            dispatch(openModalEditTaskAction);
                                                            dispatch(getTaskDetailAction(taskDetail.taskId));
                                                            dispatch(getAllCommentAction(taskDetail.taskId))
                                                        }}
                                                    >
                                                        <p>{taskDetail.taskName}</p>
                                                        <div className="flex items-center justify-between mt-4">
                                                            <span className='uppercase flex items-center gap-2 leading-3'>
                                                                {taskDetail.taskTypeDetail.taskType === 'bug' ?
                                                                    <div className='text-red-500'><BugOutlined /></div> :
                                                                    <div className='text-lime-500'><FileTextOutlined /></div>
                                                                }
                                                                <span style={{ fontSize: '12px' }}
                                                                    className={`capitalize flex items-center ${colorPriority(taskDetail.priorityTask.priority)}`}>
                                                                    {taskDetail.priorityTask.priority}
                                                                    {renderPriority(taskDetail.priorityTask.priority)}
                                                                </span>
                                                            </span>
                                                            <div >
                                                                {taskDetail?.assigness.slice(0, 3).map(item =>
                                                                    <div className='coverImgMember' key={item.id}>
                                                                        <img style={{ width: '27px', height: '27px' }} src={item.avatar} className='rounded-full imgMember borderForImg' alt={item.id} />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </Draggable>
                                        )}
                                        {provided.placeholder}
                                    </div>
                                }
                            </Droppable>
                        )}
                    </DragDropContext>
                </div>
            </div>
            <ModalEditTask projectDetailInfo={projectDetailInfo} />
        </ProjectLayout>
    )
}

export default ProjectDetail


