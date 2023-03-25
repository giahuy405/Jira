import { AutoComplete, InputNumber, Modal, Select, Slider } from 'antd'
import { Formik, Form } from 'formik'
import React, { useRef, useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { OpenModalTaskAction, CloseModalTaskAction, getAllProjKeywordAction } from '../../redux/actions/Home/ProjectActions'
import { CustomInput, CustomSelect, Button } from '../Global'
import { BugOutlined, ClockCircleOutlined, FileAddOutlined, LoadingOutlined } from '@ant-design/icons';
import { Editor } from '@tinymce/tinymce-react';
import { createProjectSchema } from '../../schema/createProjectSchema'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { getTaskTypeAction } from '../../redux/actions/Home/TaskAction'
import { getAllPriorityAction } from '../../redux/actions/Home/PriorityAction'
import { getUsersAction, getUsersByIdProjAction } from '../../redux/actions/Home/UsersAction'
import { createTaskSchema } from '../../schema/createTaskSchema'
import { getAllStatusAction } from '../../redux/actions/Home/StatusService'

const ModalCreateTask = (props) => {
    const { modalTaskOpen } = useSelector(state => state.reducer)
    const dispatch = useDispatch()
    const editorRef = useRef(null);
    const { allProjectKeyword } = useSelector(state => state.projectReducer);
    const { taskType } = useSelector(state => state.taskReducer);
    const { allPriority } = useSelector(state => state.priorityReducer);
    const { usersByIdProj } = useSelector(state => state.userReducer);
    const { allStatus } = useSelector(state => state.statusReducer);
    const [openModalTime, setOpenModalTime] = useState(false);
    const [timeTracking, setTimeTracking] = useState({
        spent: 1,
        remaining: 1,
    })
    const { Option } = Select;
    // user press ESC -> turn off modal
    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            setOpenModalTime(false);
        }
    }, []);
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    useEffect(() => {
        async function fetchData() {
            dispatch(getAllPriorityAction())
            dispatch(getUsersAction());
            dispatch(getAllProjKeywordAction());
            dispatch(getTaskTypeAction);
            dispatch(getAllStatusAction)
        }
        fetchData();
    }, [])
    const optionSelect = usersByIdProj?.map(item => ({ label: item.name, value: item.userId, key: item.userId }));

    const onSubmit = async (values, actions) => {
        console.log(values, 'fomrik')
        await new Promise((resolve, reject) => setTimeout(resolve, 1000))
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
        // await dispatch(updateProjectAction(values));
        // actions.resetForm();
        // dispatch(CloseModalTaskAction)
    }
    return (
        <div >
            {allProjectKeyword &&
                <Modal
                    className='modalCreateTask'
                    centered
                    open={modalTaskOpen}
                    onOk={() => dispatch(OpenModalTaskAction)}
                    onCancel={() => dispatch(CloseModalTaskAction)}
                    width={620}
                    footer={[]}
                >
                    <h3 className='text-center text-xl font-semibold mb-6'>Create task</h3>
                    <Formik
                        initialValues={{
                            "statusId": allStatus[0]?.statusId,
                            "taskName": "",
                            "listUserAsign": [],
                            "description": "",
                            "originalEstimate": 1,
                            "timeTrackingSpent": 1,
                            "timeTrackingRemaining": 1,
                            "projectId": allProjectKeyword[0].id,
                            "typeId": taskType[0]?.id,
                            "priorityId": allPriority[0]?.priorityId
                        }}
                        validationSchema={createTaskSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting, setFieldValue, errors, touched, values }) => (
                            <Form style={{ lineHeight: '16px' }} >
                                <div className='grid grid-cols-2 gap-4 mt-4'>
                                    <div className='col-span-2 flex gap-3 '>
                                        <div className='w-1/2'>
                                            <label htmlFor="" className='cursor-pointer text-sm text-gray-400'>Project</label>
                                            <Select
                                                className='uppercase'
                                                defaultValue={allProjectKeyword[0]?.projectName}
                                                style={{
                                                    width: '100%',
                                                }}
                                                onChange={value => {
                                                    // check if user change other project 
                                                    // => clear members of old project
                                                    if (values.listUserAsign.length > 0) {
                                                        setFieldValue('listUserAsign', []);
                                                        dispatch(getUsersByIdProjAction())
                                                    } else {
                                                        dispatch(getUsersByIdProjAction(value))
                                                        setFieldValue('projectId', value);
                                                    }
                                                }}
                                            >
                                                {allProjectKeyword?.map(item =>
                                                    <Option
                                                        value={item.id}
                                                        key={item.id}
                                                        className='uppercase flex items-center'
                                                    >
                                                        {item.projectName}
                                                    </Option>
                                                )}
                                            </Select>
                                        </div>
                                        <div className='w-1/2'>
                                            <label htmlFor="" className='cursor-pointer text-sm text-gray-400'>Status</label>
                                            <Select
                                                className='uppercase'
                                                defaultValue={allStatus[0]?.statusId}
                                                style={{
                                                    width: '100%',
                                                }}
                                                onChange={value => setFieldValue('statusId', value)}
                                            >
                                                {allStatus?.map(item =>
                                                    <Option
                                                        value={item.statusId}
                                                        key={item.statusId}
                                                        className='uppercase flex items-center'
                                                    >
                                                        {item.statusName}
                                                    </Option>
                                                )}
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='col-span-2 flex gap-3 '>
                                        <div className='w-1/2'>
                                            <label htmlFor="" className='cursor-pointer text-sm text-gray-400'>Piority</label>
                                            <Select
                                                style={{
                                                    width: '100%',
                                                }}
                                                defaultValue={allPriority[0]?.priorityId}
                                                onChange={value => setFieldValue('priorityId', value)}
                                            >
                                                {allPriority?.map(item =>
                                                    <Option key={item.priorityId} value={item.priorityId}>{item.priority}</Option>
                                                )}
                                            </Select>
                                        </div>
                                        <div className='w-1/2'>
                                            <label htmlFor="" className='cursor-pointer text-sm text-gray-400'>Task type</label>
                                            <Select
                                                className='uppercase'
                                                defaultValue={taskType[0]?.id}
                                                style={{
                                                    width: '100%',
                                                }}
                                                onChange={value => setFieldValue('typeId', value)}
                                            >
                                                {taskType?.map(item =>
                                                    <Option
                                                        value={item.id}
                                                        key={item.id}
                                                        className='uppercase flex items-center'
                                                    >
                                                        {item.taskType}
                                                    </Option>
                                                )}
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="col-span-2" style={{ lineHeight: '18px' }}>
                                        <label htmlFor="" className='cursor-pointer text-sm text-gray-400'>Assign members</label>
                                        <Select
                                            mode="multiple"
                                            allowClear
                                            style={{
                                                width: '100%',
                                            }}
                                            onSelect={value => {
                                                setFieldValue('listUserAsign', [...values.listUserAsign, value])
                                            }}
                                            value={values.listUserAsign}
                                            placeholder="Enter member's name"
                                            onChange={(value) => {
                                                setFieldValue('listUserAsign', value)
                                            }}
                                            optionFilterProp='label'
                                            options={optionSelect}
                                            name='listUserAsign'
                                        />
                                        {touched.listUserAsign && errors.listUserAsign &&
                                            <span className='text-xs text-red-500'>{errors.listUserAsign}</span>}
                                    </div>
                                    <div className="col-span-2 flex gap-2">
                                        <div className='w-1/2'>
                                            <label htmlFor="" className='cursor-pointer text-sm text-gray-400'>Time tracking</label>
                                            <div className='hover:bg-gray-200 px-1 rounded cursor-pointer duration-200' onClick={() => setOpenModalTime(true)}>
                                                <div className='flex items-center gap-1 w-full'>
                                                    <ClockCircleOutlined />
                                                    <div className='w-full px-2 my-1'>
                                                        <Slider
                                                            value={timeTracking.spent}
                                                            max={Number(timeTracking.spent) + Number(timeTracking.remaining)}
                                                            className='w-full timeTrackingSlider my-0 mx-0'
                                                        />
                                                        <div className='flex  text-xs text-gray-500 justify-between'>
                                                            <div>
                                                                {timeTracking.spent}h logged
                                                            </div>
                                                            <div>
                                                                {timeTracking.remaining}h remaining
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-1/2'>
                                            <label htmlFor="" className='cursor-pointer text-sm text-gray-400'>Original estimate time</label>
                                            <InputNumber
                                                name='originalEstimate'
                                                min={1} max={400} defaultValue={1} className='w-full'
                                                onChange={value => setFieldValue('originalEstimate', value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-3'>
                                    <label className='cursor-pointer text-sm font-extralight' htmlFor="description">Description</label>
                                    <CKEditor
                                        editor={ClassicEditor}

                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setFieldValue('description', data)
                                        }}
                                        onBlur={(event, editor) => {
                                            const data = editor.getData();
                                            console.log(data, 'data')
                                            setFieldValue('description', data)
                                        }}
                                    />
                                    {errors.description && touched.description && (
                                        <div className="text-red-500 text-xs">{errors.description}</div>)}
                                </div>
                                <div className="mt-6">
                                    <div className='flex justify-end'>
                                        <button
                                            type='button'
                                            className='py-1 mr-3 rounded text-gray-400 px-5 bg-white border border-gray-400 hover:text-blue-600 hover:border-blue-600'
                                            key="cancel"
                                            onClick={() => dispatch(CloseModalTaskAction)}>
                                            Cancel
                                        </button>
                                        {isSubmitting ?
                                            <Button
                                                type='button'
                                                disabled={true}
                                                myClass='py-2.5 px-5 flex items-center justify-center gap-2 cursor-not-allowed opacity-70'
                                                text={`Loading...`}
                                                icon={<LoadingOutlined />}
                                            />
                                            :
                                            <Button
                                                type='submit'
                                                myClass='py-2.5 px-4 leading-4'
                                                text='Create'
                                            />
                                        }
                                    </div>
                                </div>
                                <Modal
                                    centered
                                    open={openModalTime}
                                    // onOk={() => dispatch(OpenModalTaskAction)}
                                    onCancel={() => setOpenModalTime(false)}
                                    width={410}
                                    footer={[]}
                                    title='Time tracking'
                                >
                                    <div className='flex items-center gap-4  mt-3 mb-4 timeTrackingModal'>
                                        <ClockCircleOutlined className='text-xl' />
                                        <div className='w-full'>
                                            <Slider
                                                value={timeTracking.spent}
                                                max={Number(timeTracking.spent) + Number(timeTracking.remaining)}
                                                className='w-full my-1 mx-0'
                                            />
                                            <div className='flex  text-xs text-gray-500 justify-between'>
                                                <div>
                                                    {timeTracking.spent}h logged
                                                </div>
                                                <div>
                                                    {timeTracking.remaining}h remaining
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex gap-3 mb-6'>
                                        <div>
                                            <p>Time spent (hours)</p>
                                            <InputNumber min={1} max={200}
                                                name='timeTrackingSpent'
                                                defaultValue={1} className='w-full' onChange={value => {
                                                    setTimeTracking({
                                                        ...timeTracking,
                                                        spent: value
                                                    })
                                                    setFieldValue('timeTrackingSpent', value)
                                                }} />
                                        </div>
                                        <div>
                                            <p>Time remaining (hours)</p>
                                            <InputNumber min={1}
                                                name='timeTrackingRemaining'
                                                max={200} defaultValue={1} className='w-full' onChange={value => {
                                                    setTimeTracking({
                                                        ...timeTracking,
                                                        remaining: value
                                                    })
                                                    setFieldValue('timeTrackingRemaining', value)
                                                }} />

                                        </div>
                                    </div>
                                    <div className='flex justify-end'>
                                        <button
                                            onClick={() => setOpenModalTime(false)}
                                            type='button' className='bg-blue-600 hover:bg-blue-700 text-white p-1.5 px-5 rounded'>Done</button>
                                    </div>
                                </Modal>
                            </Form>
                        )}
                    </Formik>
                </Modal>}
        </div>
    )
}

export default ModalCreateTask