import { AutoComplete, Input, InputNumber, Modal, Popconfirm, Popover, Select, Slider } from 'antd'
import { Formik, Form } from 'formik'
import React, { useRef, useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { CustomInput, CustomSelect, Button } from '../Global'
import { BugOutlined, ClockCircleOutlined, FileTextOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';
import { Editor } from '@tinymce/tinymce-react';
import { createProjectSchema } from '../../schema/createProjectSchema'
import { closeModalEditTaskAction, editInfoTaskDetailAction, getStatusID, openModalEditTaskAction } from '../../redux/actions/Home/TaskAction'
import { getAllProjectAction, getProjectDetail, getTaskDetailAction } from '../../redux/actions/Home/ProjectActions'
import { getTaskDetail } from '../../redux/sagas/Project/ProjectSaga'
import { getUsersByIdProjAction } from '../../redux/actions/Home/UsersAction'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
const { Option } = Select;

const ModalEditTask = ({ projectDetailInfo }) => {
    const { openModalEditTask } = useSelector(state => state.taskReducer);
    const { taskDetail } = useSelector(state => state.projectReducer);
    const dispatch = useDispatch()
    const editorRef = useRef(null);
    const { id } = useParams();
    const searchRef = useRef(null)
    const [searchTerm, setSearchTerm] = useState('');
    const [displayEditor, setDisplayEditor] = useState('');
    const [historyContent, setHistoryContent] = useState('');
    const [contentEditor, setContentEditor] = useState(taskDetail?.description);
    const [isCmt, setIsCmt] = useState(false);
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'm') {
                editorRef.current.focus();
                setIsCmt(true)
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const { allCmt } = useSelector(state => state.commentReducer)
    useEffect(() => {
        dispatch(getAllProjectAction())
        dispatch(getUsersByIdProjAction(id))
    }, []);
    const { allPriority } = useSelector(state => state.priorityReducer);

    const handleChange = async (name, value) => {
        await dispatch(editInfoTaskDetailAction(name, value));
        dispatch({
            type: 'HANDLE_CHANGE_TASK_DETAIL'
        })
    };
    useEffect(() => {
        dispatch(getProjectDetail(id))
    }, [taskDetail])
    const renderTimeTracking = () => {
        const { timeTrackingSpent, timeTrackingRemaining } = taskDetail;
        const max = Number(timeTrackingRemaining) + Number(timeTrackingSpent);
        const percent = Math.round(Number(timeTrackingSpent) / max * 100);

        return <div className='  px-1 rounded  duration-200'>
            <div className='flex items-center gap-1 w-full'>
                <ClockCircleOutlined />
                <div className='w-full px-2 mt-1 '>
                    <div className="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
                        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                            style={{ width: `${percent}%` }}
                            aria-valuenow={timeTrackingSpent}
                            aria-valuemin={timeTrackingRemaining}
                            aria-valuemax={max} />
                    </div>
                    <div className='flex  text-xs text-gray-400 justify-between'>
                        <div>
                            {timeTrackingSpent}h logged
                        </div>
                        <div>
                            {timeTrackingRemaining}h remaining
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-around mt-2.5'>
                <InputNumber min={1} max={200}
                    name='timeTrackingSpent'
                    value={taskDetail?.timeTrackingSpent}
                    onChange={async (value, option) => {
                        let name = document.querySelector('[name="timeTrackingSpent"]').getAttribute('name')
                        handleChange(name, value)
                    }}
                />
                <InputNumber min={1} max={200}
                    name='timeTrackingRemaining'
                    value={taskDetail?.timeTrackingRemaining}
                    onChange={async (value, option) => {
                        let name = document.querySelector('[name="timeTrackingRemaining"]').getAttribute('name')
                        handleChange(name, value)
                    }}
                />
            </div>
        </div>
    }
    const infoUser = JSON.parse(localStorage.getItem('USER_INFO'));

    return (
        <div>
            <Modal
                centered
                open={openModalEditTask}
                onOk={() => dispatch(openModalEditTaskAction)}
                onCancel={() => dispatch(closeModalEditTaskAction)}
                width={700}
                footer={[]}
            >
                <h3 className='text-center text-xl font-semibold mb-3'>Edit Task</h3>
                <div className="flex">
                    <div className='w-2/3 pr-12'>
                        <div className='flex gap-3'>
                            <div >
                                <p className='text-gray-400 mb-1'>Type</p>
                                <Select
                                    style={{
                                        width: '90px',
                                    }}
                                    name='typeId'
                                    optionFilterProp='label'
                                    value={taskDetail?.typeId}
                                    onSelect={(value, option) => {
                                        handleChange('typeId', value)
                                    }}
                                    options={[
                                        {
                                            label: <><FileTextOutlined className='mr-1 text-lime-500' />Task</>, value: 2
                                        },
                                        {
                                            label: <>   <BugOutlined className='mr-1 text-red-500' />Bug</>, value: 1
                                        },
                                    ]}
                                >
                                </Select>
                            </div>
                            <div className='w-full'>
                                <p className='text-gray-400 mb-1'>Task name</p>
                                <Input
                                    className='w-full'
                                    name='taskName'
                                    value={taskDetail?.taskName}
                                    onChange={(e,) => {
                                        handleChange('taskName', e.target.value)
                                    }}
                                />
                            </div>
                        </div>

                        <p className='text-gray-400 mb-1 mt-4'>Description</p>
                        {displayEditor ?
                            <>
                                <div style={{ color: 'black' }}>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={taskDetail.description}
                                        name='description'
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setContentEditor(data)
                                            console.log(contentEditor)
                                        }}
                                        onBlur={(event, editor) => {
                                            const data = editor.getData();
                                            console.log(data, 'data')
                                            setContentEditor(data)
                                        }}
                                    />
                                </div>
                                <div className='mt-3'>
                                    <button
                                        onClick={() => {
                                            setDisplayEditor(false)
                                            let value = historyContent;
                                            dispatch(editInfoTaskDetailAction('description', value))
                                        }}
                                        className='px-5 py-1 border border-blue-600 text-blue-600 hover:drop-shadow-md rounded'>
                                        Cancel</button>
                                    <button
                                        className='px-5 py-1 bg-blue-600 border border-blue-600 ml-2 hover:bg-blue-700 text-white rounded'
                                        onClick={async () => {
                                            setDisplayEditor(false)
                                            let value = contentEditor;
                                            console.log(contentEditor)
                                            await dispatch(editInfoTaskDetailAction('description', value))
                                            await dispatch({
                                                type: 'HANDLE_CHANGE_TASK_DETAIL'
                                            })
                                        }}
                                    >Save</button>
                                </div>
                            </> :
                            <div
                                className='cursor-pointer min-h-[50px]'
                                onClick={() => {
                                    setDisplayEditor(true)
                                    setHistoryContent(taskDetail.description)
                                }}
                                dangerouslySetInnerHTML={{ __html: `${taskDetail?.description}` }} >
                            </div>
                        }
                        <div>
                            <h3 className='text-gray-400  text-sm mt-5 mb-2'>Comments</h3>
                            {/* Add new comments */}
                            <div className='flex gap-2'>
                                <div>
                                    <img width={30} className='rounded-full' src={infoUser?.avatar} alt={infoUser?.id} />
                                </div>
                                <div>
                                    <Editor
                                        name='comment'
                                        apiKey='an4j8gh14omc9ehdjjqq7byek89ohgr1tyjhurzeqb2k3s3p'
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        // value={values.description}

                                        init={{
                                            height: 150,
                                            menubar: false,
                                            plugins: [
                                                'advlist', 'autolink', 'lists', 'link', 'charmap', 'preview',
                                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                            ],
                                            toolbar: 'undo redo | blocks | ' +
                                                'bold italic forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                                'removeformat | help',
                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        }}
                                    // onChange={e=>console.log(e.target.value)}
                                    // onEditorChange={content => setFieldValue('description', content)}
                                    />
                                    {isCmt ? <div className='mt-2'>
                                        <button
                                            onClick={() => {
                                                setIsCmt(false)
                                            }}
                                            className='px-5 py-1 border border-blue-600 text-blue-600 hover:drop-shadow-md rounded  '>
                                            Cancel</button>
                                        <button
                                            className='px-5 py-1 bg-blue-600 border border-blue-600 ml-2 hover:bg-blue-700 text-white rounded'
                                            onClick={async () => {
                                                setDisplayEditor(false)
                                                let value = contentEditor;
                                                console.log(contentEditor)
                                                await dispatch(editInfoTaskDetailAction('description', value))
                                                await dispatch({
                                                    type: 'HANDLE_CHANGE_TASK_DETAIL'
                                                })
                                            }}
                                        >Save</button>
                                    </div> : <p className='mt-1 text-sm  text-gray-400'><span className='font-bold'>Pro tip</span> : press <span className='px-1 bg-gray-200 rounded text-black'>M</span> to comment</p>
                                    }
                                </div>

                            </div>

                            {/* All comments */}
                            <div className='mt-3'>
                                {allCmt?.map(item =>
                                    <>
                                        <div key={item.id} className='flex gap-4 mb-4'>
                                            <div>
                                                <img width={30} className='rounded-full' src={item.user.avatar} alt={item.id} />
                                            </div>
                                            <div>
                                                <p className='font-semibold mb-1 text-gray-400'>{item.user.name}</p>
                                                <div className='text-sm'><div dangerouslySetInnerHTML={{ __html: `${item.contentComment}` }} /></div>
                                                <div className='text-gray-400 flex gap-2'>
                                                    <div className='hover:underline'>Edit</div>
                                                    <div className='commentDots'></div>
                                                    <div>Delete</div>


                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <div>
                            <p className='text-gray-400 mb-1'>Status</p>
                            <Select
                                style={{
                                    width: '100%',
                                }}
                                name='statusId'
                                value={taskDetail?.statusId}
                                onChange={(value, option) => {
                                    let name = document.querySelector('[name="statusId"]').getAttribute('name')
                                    handleChange(name, value)
                                }}
                            >
                                {projectDetailInfo?.lstTask.map(item =>
                                    <Option key={item.statusId} value={item.statusId}>{item.statusName}</Option>
                                )}
                            </Select>
                        </div>
                        <div className='my-3'>
                            <p className='text-gray-400 mb-1'>Assign members</p>
                            <div className="">
                                <div className='flex gap-1 mb-2 flex-wrap'>
                                    {taskDetail?.assigness.map(item =>
                                        <div className='rounded px-1 dark:text-black bg-blue-500 text-white flex items-center gap-1 relative assignMEM' key={item.id}>
                                            <img width={14} className='rounded-full' src={item.avatar} alt={item.avatar} />
                                            {item.name}
                                            <Popconfirm
                                                title="Delete the task"
                                                description="Are you sure to delete this task?"
                                                onConfirm={async () => {

                                                    dispatch({
                                                        type: 'HANDLE_DELETE',
                                                        payload: item.id
                                                    })
                                                }}
                                                // onCancel={cancel}
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <div
                                                    className=' hover:bg-red-500 hover:bg-opacity-[86%] w-full cursor-pointer assignMEMicon absolute flex justify-center'>
                                                    <span className='block mx-auto w-2'>X</span>
                                                </div>
                                            </Popconfirm>
                                        </div>)}
                                </div>
                                <Popover
                                    trigger="click"
                                    content={() => {
                                        return <Select
                                            name='assigness'
                                            style={{
                                                width: '100%',
                                            }}
                                            onSelect={value => {
                                                let userSelect = projectDetailInfo.members.find(item => item.userId == value);
                                                // add one more attribute id
                                                userSelect = { ...userSelect, id: userSelect.userId };
                                                dispatch({
                                                    type: 'TASK_DETAIL_ASSIGN_API',
                                                    payload: userSelect
                                                })
                                            }}
                                            optionFilterProp='label'
                                        >
                                            {projectDetailInfo.members?.filter(mem => {
                                                let index = taskDetail.assigness?.findIndex(item => item.id === mem.userId);
                                                if (index !== -1) return false
                                                else return true
                                            })?.map(item =>
                                                <Option key={item.userId} value={item.userId}>{item.name}</Option>
                                            )}
                                        </Select>
                                    }}
                                    title="Add new member">
                                    <button className='p-1 rounded bg-gray-300 dark:text-black '>Add +</button>
                                </Popover>
                            </div>
                        </div>
                        <div className='my-3'>
                            <p className='text-gray-400 mb-1'>Priority</p>
                            <Select
                                style={{
                                    width: '100%',
                                }}
                                name='priorityId'
                                value={taskDetail?.priorityId}
                                onChange={async (value, option) => {
                                    let name = document.querySelector('[name="priorityId"]').getAttribute('name');
                                    handleChange(name, value);
                                }}
                            >
                                {allPriority?.map(item =>
                                    <Option key={item.priorityId} value={item.priorityId}>{item.priority}</Option>
                                )}
                            </Select>
                        </div>
                        <div className='my-3'>
                            <p className='text-gray-400 mb-1'>Original estimate (hours)</p>
                            <InputNumber min={1} max={200}
                                placeholder={``}
                                className='w-full'
                                style={{
                                    marginBottom: 8,
                                    display: 'block',
                                }}
                                name='originalEstimate'
                                value={taskDetail?.originalEstimate}
                                onChange={async (value, option) => {
                                    let name = document.querySelector('[name="originalEstimate"]').getAttribute('name');
                                    handleChange(name, value)
                                }}
                            />
                        </div>
                        <div className="my-3">
                            <p className='text-gray-400 mb-1'>Time tracking</p>
                            {taskDetail && renderTimeTracking()}
                        </div>
                    </div>
                </div>
            </Modal >
        </div >
    )
}

export default ModalEditTask