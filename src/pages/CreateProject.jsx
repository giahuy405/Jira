import React, { useState, useRef, useEffect } from 'react'
import { CustomInput, Button } from '../components/Global'
import BreadCrumd from '../components/Global/BreadCrumd'
import ProjectLayout from '../HOCs/ProjectLayout'
import { Field, Form, Formik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import CustomSelect from '../components/Global/CustomSelect';
import { useDispatch, useSelector } from 'react-redux';
import { createProjectAction, projectCategoryAction } from '../redux/actions/Home/ProjectActions';
import { createProjectSchema } from '../schema/createProjectSchema';
import { LoadingOutlined } from '@ant-design/icons';
const CreateProject = () => {
    const editorRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = async (values, actions) => {
        // console.log('values', values)
        await new Promise((resolve, reject) => setTimeout(resolve, 1500))
        if (editorRef.current) {
            // console.log(editorRef.current.getContent());
        }
        await dispatch(createProjectAction(values,navigate));
        actions.resetForm();
    }
    useEffect(() => {
        dispatch(projectCategoryAction);
    }, [])
    const { projectCategory } = useSelector(state => state.reducer);
    const handleChangeEditor = (content, editor) => {
        // console.log(content)
    }
    return (
        <ProjectLayout>
            <div className='max-w-[600px] mx-auto mt-3 mb-20 dark:text-white h-screen'>
                <BreadCrumd> Projects / Singularity 7.0 / Project Details</BreadCrumd>
                <h3 className='text-2xl font-medium text-[#172A4D] dark:text-blue-500'>Create new project</h3>
                <Formik
                    initialValues={{
                        projectName: "",
                        description: '<p>Enter your content here</p>',
                        categoryId: "1",
                        alias: "",
                    }}
                    validationSchema={createProjectSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting, setFieldValue, errors, touched }) => (
                        <Form style={{ lineHeight: '16px' }} className="CreateProject">
                            <div className='grid grid-cols-2 gap-4 mt-4'>
                                <div className='col-span-1'>
                                    <CustomInput
                                        placeholder="Project Name"
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
                                     placeholder="URL website"
                                    label='URL website ( optional )'
                                    name='alias'
                                    type='text'
                                    id='name'
                                />
                            </div>
                            <div>
                                <label className='cursor-pointer text-sm font-extralight' htmlFor="description">Description</label>
                                <Editor
                                    className='Description'
                                    id='description'
                                    name='description'
                                    apiKey='an4j8gh14omc9ehdjjqq7byek89ohgr1tyjhurzeqb2k3s3p'
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue="<p>Enter your content here</p>"
                                    init={{
                                        height: 200,    
                                        menubar: false,
                                        plugins: [
                                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
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
                                <div>
                                    {isSubmitting ?
                                        <Button
                                            type='submit'
                                            disabled={true}
                                            myClass='py-2.5 px-3 flex items-center justify-center gap-2 cursor-not-allowed opacity-70'
                                            text={`Loading...`}
                                            icon={<LoadingOutlined />}
                                        />
                                        :
                                        <Button
                                            type='submit'
                                            myClass='py-2.5 px-6 leading-4'
                                            text='Create '
                                        />
                                    }

                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </ProjectLayout>
    )
}

export default CreateProject