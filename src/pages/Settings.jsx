import React, { useState, useRef, useEffect } from 'react'
import { CustomInput, Button } from '../components/Global'
import BreadCrumd from '../components/Global/BreadCrumd'
import ProjectLayout from '../HOCs/ProjectLayout'
import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import CustomSelect from '../components/Global/CustomSelect';
import { useDispatch, useSelector } from 'react-redux';
import { projectCategoryAction } from '../redux/actions/Home/actions';
import { createProjectSchema } from '../schema/createProjectSchema';
const Settings = () => {
    const [userLogin, setUserLogin] = useState({ email: "", passWord: "" });
    const [errorLogin, setErrorLogin] = useState({ email: "", passWord: "" });
    const editorRef = useRef(null);
    const dispatch = useDispatch();
    const onSubmit = async (values, actions) => {
        console.log(values)
        console.log(actions)
        actions.resetForm();
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    }
    useEffect(() => {
        dispatch(projectCategoryAction);
    }, [])
    const { projectCategory } = useSelector(state => state.reducer);
    const handleChangeEditor = (content, editor) => {
        console.log(content)
        console.log(editor)
    }
    return (
        <ProjectLayout>

            <div className='max-w-[600px] mx-auto mt-3 '>
                <BreadCrumd> Projects / Singularity 7.0 / Project Details</BreadCrumd>
                <h3 className='text-2xl font-medium text-[#172A4D]'>Project Details</h3>
                <Formik
                    initialValues={{
                        projectName: "",
                        description: "",
                        categoryId: "",
                        alias: "",
                    }}
                    validationSchema={createProjectSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form style={{ lineHeight: '8px' }}>
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
                                        name='category'
                                        id='category'
                                    >
                                        {projectCategory?.map(item =>
                                            <option key={item.id} value={item.projectCategoryName}>{item.projectCategoryName}</option>
                                        )}
                                    </CustomSelect>
                                </div>
                            </div>
                            <div className='my-3'>
                                <CustomInput
                                    label='URL website'
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
                                    onEditorChange={handleChangeEditor}
                                />
                            </div>

                            <div className="mt-6">
                                <div>
                                    <Button
                                        type='submit'
                                        myClass='py-2 px-4 leading-4'
                                        text='Save changes'
                                    />
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </ProjectLayout>
    )
}

export default Settings