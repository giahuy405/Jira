import { ArrowDownOutlined, ArrowUpOutlined, BugOutlined, FileTextOutlined, SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import BreadCrumd from '../components/Global/BreadCrumd'
import ProjectLayout from '../HOCs/ProjectLayout'
import { getProjectDetail, getTaskDetailAction } from '../redux/actions/Home/ProjectActions'
import { ModalCreateTask } from '../components/Home'
import { openModalEditTaskAction } from '../redux/actions/Home/TaskAction'
import ModalEditTask from '../components/Home/ModalEditTask'
const ProjectDetail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { projectDetailInfo } = useSelector(state => state.projectReducer);
    useEffect(() => {
        dispatch(getProjectDetail(id))
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
    return (
        <ProjectLayout>
            <BreadCrumd> Projects / Singularity 7.0 / Project Detail</BreadCrumd>
            <div className='pb-14 min-h-screen'>
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
                    {projectDetailInfo?.lstTask.map(item =>
                        <div className='bg-gray-100 dark:bg-primary-dark rounded p-1' key={item.statusId}>
                            <h3 className='py-3 pl-1.5 text-xs text-gray-500'>{item.statusName}</h3>
                            {/* TASK LIST */}
                            {item.lstTaskDeTail?.map(taskDetail =>
                                <div className='bg-white shadowKanban dark:text-white dark:bg-secondary-dark my-1.5'
                                    onClick={() => {
                                        dispatch(openModalEditTaskAction)
                                        //  taskDetail.taskId
                                        console.log(taskDetail.taskId)
                                        dispatch(getTaskDetailAction(taskDetail.taskId))
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
                            )}
                        </div>
                    )}
                </div>
            </div>
            <ModalEditTask />
        </ProjectLayout>
    )
}

export default ProjectDetail