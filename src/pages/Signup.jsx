import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../components/Global'
import AuthLayout from '../HOCs/AuthLayout';
import { signUpAction } from '../redux/actions/Auth/actions';
import { Form, Formik } from 'formik';
import { signUpSchema } from '../schema/signUpSchema';
import { CustomInput } from '../components/Global'
import { LoadingOutlined } from '@ant-design/icons';

const Login = () => {
  const [userLogin, setUserLogin] = useState({ email: "", passWord: "" });
  const [errorLogin, setErrorLogin] = useState({ email: "", passWord: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1500));
    console.log(values)
    console.log(actions)
    actions.resetForm();

    const res = await dispatch(signUpAction(values, navigate));

  }


  return (
    <AuthLayout>
      <div className='bg-gray-100 h-screen pt-6 md:bg-hero-pattern bg-cover bg-center relative w-screen'>
        <div className="flex flex-col md:w-[500px] w-full h-full md:h-fit  bg-white shadow-2xl p-6 sm:p-10 sm:py-6 absolute z-10 top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 rounded ">
          <div className="mb-3 text-center bg-[]">
            <div className='h-7'>
              <svg className='h-7  mx-auto' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 532.119 66.025"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:url(#linear-gradient);}.cls-2{fill:#2684ff;}.cls-3{fill:#0052cc;}" }} /><linearGradient id="linear-gradient" x1="28.121" y1="35.051" x2="11.239" y2="64.292" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#0052cc" /><stop offset="0.923" stopColor="#2684ff" /></linearGradient></defs><title>Atlassian-horizontal-blue-rgb</title><g id="Layer_2" data-name="Layer 2"><g id="Blue"><path className="cls-1" d="M19.354,30.115a1.856,1.856,0,0,0-3.157.343L.2,62.442a1.912,1.912,0,0,0,1.71,2.767H24.185a1.843,1.843,0,0,0,1.71-1.057C30.7,54.223,27.788,39.126,19.354,30.115Z" /><path className="cls-2" d="M31.087,1.024a42.188,42.188,0,0,0-2.463,41.65L39.363,64.152a1.912,1.912,0,0,0,1.71,1.057H63.344a1.912,1.912,0,0,0,1.71-2.767S35.092,2.511,34.339,1.012A1.806,1.806,0,0,0,31.087,1.024Z" /><path className="cls-3" d="M292.314,26.669c0,7.92,3.674,14.208,18.045,16.984,8.574,1.8,10.37,3.184,10.37,6.042,0,2.776-1.8,4.573-7.839,4.573a44.236,44.236,0,0,1-20.821-5.634v12.9c4.328,2.123,10.043,4.491,20.658,4.491,15.024,0,20.985-6.7,20.985-16.657m0,0c0-9.39-4.981-13.8-19.025-16.82-7.757-1.715-9.635-3.429-9.635-5.879,0-3.1,2.776-4.409,7.92-4.409,6.206,0,12.33,1.878,18.127,4.491V14.421a40.97,40.97,0,0,0-17.719-3.674c-13.881,0-21.066,6.042-21.066,15.922" /><polygon className="cls-3" points="485.332 11.563 485.332 65.209 496.763 65.209 496.763 24.301 501.581 35.16 517.748 65.209 532.119 65.209 532.119 11.563 520.688 11.563 520.688 46.184 516.36 36.14 503.377 11.563 485.332 11.563" /><rect className="cls-3" x="400.133" y="11.563" width="12.493" height="53.646" /><path className="cls-3" d="M385.718,49.368c0-9.39-4.981-13.8-19.025-16.82-7.757-1.715-9.635-3.429-9.635-5.879,0-3.1,2.776-4.409,7.92-4.409,6.206,0,12.33,1.878,18.127,4.491V14.421a40.97,40.97,0,0,0-17.719-3.674c-13.881,0-21.066,6.042-21.066,15.922,0,7.92,3.674,14.208,18.045,16.984,8.574,1.8,10.37,3.184,10.37,6.042,0,2.776-1.8,4.573-7.839,4.573a44.236,44.236,0,0,1-20.821-5.634v12.9c4.328,2.123,10.043,4.491,20.658,4.491,15.024,0,20.985-6.7,20.985-16.657" /><polygon className="cls-3" points="195.265 11.563 195.265 65.209 220.943 65.209 224.986 53.614 207.839 53.614 207.839 11.563 195.265 11.563" /><polygon className="cls-3" points="144.533 11.563 144.533 23.157 158.414 23.157 158.414 65.209 170.988 65.209 170.988 23.157 185.849 23.157 185.849 11.563 144.533 11.563" /><path className="cls-3" d="M126.3,11.563H109.821L91.114,65.209H105.4l2.652-9.035a35.508,35.508,0,0,0,20.008,0l2.652,9.035h14.289ZM118.06,46.5a24.4,24.4,0,0,1-6.875-.989L118.06,22.1l6.875,23.419A24.4,24.4,0,0,1,118.06,46.5Z" /><path className="cls-3" d="M265.211,11.563H248.733L230.026,65.209h14.289l2.652-9.035a35.508,35.508,0,0,0,20.008,0l2.652,9.035h14.289ZM256.972,46.5a24.4,24.4,0,0,1-6.875-.989L256.972,22.1l6.875,23.419A24.4,24.4,0,0,1,256.972,46.5Z" /><path className="cls-3" d="M457.644,11.563H441.166L422.459,65.209h14.289l2.652-9.035a35.508,35.508,0,0,0,20.008,0l2.652,9.035H476.35ZM449.4,46.5a24.4,24.4,0,0,1-6.875-.989L449.4,22.1l6.875,23.419A24.4,24.4,0,0,1,449.4,46.5Z" /></g></g></svg>
            </div>
            <h1 className="mb-1 mt-3 text-xl font-semibold">Create an account</h1>
          </div>
          <Formik
            initialValues={{
              name: "",
              passWord: "",
              confirmPassword: "",
              email: "",
              phoneNumber: "",
            }}
            validationSchema={signUpSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="grid grid-cols-2 gap-3" style={{ lineHeight: '6px' }} >
                  <div className='col-span-2 '  >
                    <CustomInput
                      label='Username'
                      name='name'
                      type='text'
                      id='name'
                    />
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                    <CustomInput
                      label='Email'
                      name='email'
                      type='texemailt'
                      id='email'
                    />
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                    <CustomInput
                      label='Phone number'
                      name='phoneNumber'
                      type='text'
                      id='phoneNumber'
                    />
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                    <CustomInput
                      label='Password'
                      name='passWord'
                      type='password'
                      id='passWord'
                    />
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                    <CustomInput
                      label='Confirm Password'
                      name='confirmPassword'
                      type='password'
                      id='confirmPassword'
                    />
                  </div>
                </div>
                <div className="mt-7">
                  <div>
                    {!isSubmitting ?
                      <Button
                        type='submit'
                        myClass='py-2 px-5 w-full'
                        text='Sign up'
                      />
                      :
                      <Button
                        type='button'
                        disabled={true}
                        myClass='py-2 px-5 w-full flex items-center justify-center gap-2 cursor-not-allowed opacity-70'
                        text={`Loading...`}
                        icon={<LoadingOutlined />}
                      />
                    }
                  </div>
                  <p className="px-6 text-sm text-center mt-2.5">Have an account ?
                    <NavLink to="/login" className="hover:underline font-semibold text-blue-600 "> Login</NavLink>.
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className='absolute inset-0 bg-black bg-opacity-80 '></div>
      </div>
    </AuthLayout>
  )
}

export default Login