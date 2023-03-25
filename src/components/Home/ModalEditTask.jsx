import { Modal, Select } from 'antd'
import { Formik, Form } from 'formik'
import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CustomInput, CustomSelect, Button } from '../Global'
import { LoadingOutlined } from '@ant-design/icons';
import { Editor } from '@tinymce/tinymce-react';
import { createProjectSchema } from '../../schema/createProjectSchema'
import { closeModalEditTaskAction, openModalEditTaskAction } from '../../redux/actions/Home/TaskAction'
const { Option } = Select;
const ModalEditTask = (props) => {
    const { openModalEditTask } = useSelector(state => state.taskReducer);
    const { taskDetail } = useSelector(state => state.projectReducer);
    const dispatch = useDispatch()
    const editorRef = useRef(null);
    const navigate = useNavigate()
    useEffect(() => {
        // dispatch(projectCategoryAction);
    }, [])
    console.log(taskDetail)
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
                <h3 className='text-center text-xl font-semibold mb-6'>Edit Task</h3>
                <div className="flex">
                    <div className='w-2/3'>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        <h4 className='text-lg font-bold'>Description</h4>
                        {/* Parse stringHTML to HTML */}
                        <div dangerouslySetInnerHTML={{ __html: taskDetail.description }} />
                    </div>
                    <div className='w-1/3'>
                        <Select
                            style={{
                                width: '100%',
                            }}
                        // defaultValue={allPriority[0]?.priorityId}
                        // onChange={value => setFieldValue('priorityId', value)}
                        >

                            {/* <Option key={item.priorityId} value={item.priorityId}>{item.priority}</Option> */}
                            <Option >a</Option>
                        </Select>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default ModalEditTask