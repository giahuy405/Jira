import React, { useState, useRef } from 'react'
import { CustomInput, Button } from '../components/Global'
import BreadCrumd from '../components/Global/BreadCrumd'
import ProjectLayout from '../HOCs/ProjectLayout'
import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import CustomSelect from '../components/Global/CustomSelect';
const Settings = () => {
    const [userLogin, setUserLogin] = useState({ email: "", passWord: "" });
    const [errorLogin, setErrorLogin] = useState({ email: "", passWord: "" });
    const editorRef = useRef(null);

    const onSubmit = async (values, actions) => {
        console.log(values)
        console.log(actions)
        actions.resetForm();
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    }

    return (
        <ProjectLayout>
            <BreadCrumd> Projects / Singularity 7.0 / Project Details</BreadCrumd>
            <div className='max-w-[600px] mx-auto mt-3 '>
                <h3 className='text-2xl font-medium text-[#172A4D]'>Project Details</h3>
                <Formik
                    initialValues={{
                        name: "",
                        passWord: "",
                        confirmPassword: "",
                        email: "",
                        phoneNumber: "",
                    }}
                    // validationSchema={signUpSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form >
                            <div className='mt-3 mb-3'>
                                <CustomInput
                                    label='Name'
                                    name='name'
                                    type='text'
                                    id='name'
                                />
                            </div>
                            <div className='mb-3'>
                                <CustomSelect
                                    label='Project Category'
                                    name='category'
                                    id='category'
                                >
                                    <option value="">Category</option>
                                    <option value="GP01">Software</option>
                                    <option value="GP02">Web</option>
                                    <option value="GP03">App</option>
                                </CustomSelect>
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
                                />
                            </div>

                            <div className="mt-6">
                                <div>
                                    <Button
                                        type='submit'
                                        myClass='py-1.5 px-4 '
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