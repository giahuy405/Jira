import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import BreadCrumd from '../components/Global/BreadCrumd'
import ProjectLayout from '../HOCs/ProjectLayout'
import { getProjectDetail } from '../redux/actions/Home/ProjectActions'
import { ModalCreateTask } from '../components/Home'
const ProjectDetail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { projectDetailInfo } = useSelector(state => state.projectReducer);
    console.log('pro', projectDetailInfo)
    useEffect(() => {
        dispatch(getProjectDetail(id))
    }, [])
    return (
        <ProjectLayout>
            <BreadCrumd> Projects / Singularity 7.0 / Project Detail</BreadCrumd>
            <div>
                <h3 className='text-2xl font-medium text-[#172A4D] mb-3'>Project detail - {projectDetailInfo?.projectName}</h3>
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
                        <div className='bg-gray-100 rounded p-1' key={item.statusId}>
                            <h3 className='py-3 pl-1.5 text-xs text-gray-500'>{item.statusName}</h3>
                            <div className='bg-white shadowKanban my-1.5'>
                                <p>Lorem ipsum dol rum repellendus id, iste odit.</p>
                            </div>
                            <div className='bg-white shadowKanban my-1.5'>
                                <p>Lorem ipsum dolor sit,  id, iste odit.</p>
                            </div>
                            <div className='bg-white shadowKanban my-1.5'>
                                <p>Lorem ipsum dolor s  nostrum earum repellendus id, iste odit.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </ProjectLayout>
    )
}

export default ProjectDetail