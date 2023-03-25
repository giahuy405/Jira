import { Modal } from 'antd'
import { Formik, Form } from 'formik'
import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { OpenModalEditAction, CloseModaEditlAction, projectCategoryAction, updateProjectAction } from '../../redux/actions/Home/ProjectActions'
import { CustomInput, CustomSelect, Button } from '../Global'
import { LoadingOutlined } from '@ant-design/icons';
import { Editor } from '@tinymce/tinymce-react';
import { createProjectSchema } from '../../schema/createProjectSchema'
const ModalEdit = (props) => {
    const { modalEditOpen } = useSelector(state => state.reducer)
    const dispatch = useDispatch()
    const editorRef = useRef(null);
    const navigate = useNavigate()
    const onSubmit = async (values, actions) => {
        console.log(values)
        await new Promise((resolve, reject) => setTimeout(resolve, 1000))
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }

        await dispatch(updateProjectAction(values));
        // actions.resetForm();
        dispatch(CloseModaEditlAction)
    }
    useEffect(() => {
        dispatch(projectCategoryAction);
    }, [])

    const { projectCategory } = useSelector(state => state.reducer);
    const { projectDetailInfo } = useSelector(state => state.projectReducer);

    return (
        <div>
            <Modal
                centered
                open={modalEditOpen}
                onOk={() => dispatch(OpenModalEditAction)}
                onCancel={() => dispatch(CloseModaEditlAction)}
                width={600}
                footer={[]}
            >
                <h3 className='text-center text-xl font-semibold mb-6'>Edit Project</h3>
                <Formik
                    initialValues={{
                        id:projectDetailInfo?.id,
                        projectName: projectDetailInfo?.projectName,
                        description: projectDetailInfo?.description,
                        categoryId: projectDetailInfo?.projectCategory.id,
                    }}
                    enableReinitialize={true}
                    validationSchema={createProjectSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting, setFieldValue, errors, touched, values }) => (
                        <Form style={{ lineHeight: '16px' }} >
                            <div className='grid grid-cols-2 gap-4 mt-4'>
                                <div className='col-span-1'>
                                    <CustomInput
                                        label='Name'
                                        name='projectName'
                                        type='text'
                                        id='name'
                                    />
                                </div>
                                <div className='col-span-1'>
                                    <CustomSelect
                                        label='Project Category'
                                        name='categoryId'
                                        id='category'
                                    >
                                        {projectCategory?.map(item =>
                                            <option key={item.id} value={item.id}>{item.projectCategoryName}</option>
                                        )}
                                    </CustomSelect>
                                </div>
                            </div>
                            <div className='my-3'>
                                <CustomInput
                                    label='URL website ( optional )'
                                    name='alias'
                                    type='text'
                                    id='name'
                                />
                            </div>
                            <div>
                                <label className='cursor-pointer text-sm font-extralight' htmlFor="description">Description</label>
                                <Editor
                                    id='description'
                                    name='description'
                                    apiKey='an4j8gh14omc9ehdjjqq7byek89ohgr1tyjhurzeqb2k3s3p'
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    value={values.description}
                                    init={{
                                        height: 200,
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
                                    onEditorChange={content => setFieldValue('description', content)}
                                />
                                {errors.description && touched.description && (
                                    <div className="text-red-500 text-xs">{errors.description}</div>
                                )}
                            </div>
                            <div className="mt-6">
                                <div className='flex justify-end'>
                                    <button
                                        type='button'
                                        className='py-1 mr-3 rounded text-gray-400 px-5 bg-white border border-gray-400 hover:text-blue-600 hover:border-blue-600'
                                        key="cancel"
                                        onClick={() => dispatch(CloseModaEditlAction)}>
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
                                            text='Save changes'
                                        />
                                    }
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </div>
    )
}

export default ModalEdit