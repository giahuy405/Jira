import { Input } from "antd";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ProjectLayout from "../HOCs/ProjectLayout";
import { infoUserSchema } from "../schema/infoUserSchema";
import * as actionType from '../redux/constants/constants'
import { updateUserAction } from "../redux/actions/Manager/action";
const Profile = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({
            type: actionType.LOGIN_INFO,
            payload: JSON.parse(localStorage.getItem('USER_INFO'))
        })
    },[dispatch])
  const { infoUser } = useSelector((state) => state.reducer);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: infoUser?.id,
      passWord: "",
      confirmPassword: "",
      email: infoUser?.email,
      name: infoUser?.name,
      phoneNumber: infoUser?.phoneNumber,
    },
    validationSchema: infoUserSchema,
    onSubmit: (values) => {
      dispatch(updateUserAction(values));
     
    },
  });
  return (
    <ProjectLayout>
      <div className="h-screen">
        <div className="flex justify-center pt-10 animate__animated animate__backInDown">
          <h2 className="text-blue-700 text-3xl font-semibold">User</h2>
          <h2 className="text-orange-500 text-3xl font-semibold">Profile</h2>
        </div>
        <div className="flex justify-center pt-5">
        <div
          className="myStyle_update_shape bg-slate-800 "
          style={{ height: 1, width: "40%" }}
        ></div>
        </div>
         
        <div className="flex flex-col justify-center items-center ">
        <div className="flex items-center justify-center pt-5 pb-3 mr-12">
            <img
              src={infoUser?.avatar}
              width="70"
              style={{ borderRadius: "50%" }}
              alt="#"
            />
            <div className="pl-4">
              <h2 className="myStyle_update font-semibold text-3xl pb-1 text-sky-900 ">{infoUser?.name}</h2>
              <p className="myStyle_update_p font-medium text-sm text-gray-600">
                ID: {infoUser?.id}
              </p>
            </div>
          </div>
          <form className="w-80" onSubmit={formik.handleSubmit} >
            <div className="pb-4">
              <h2 className="pb-1 myStyle_update text-sky-900 font-medium">Name :</h2>
              <Input
                placeholder="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
                 {formik.errors.name && formik.touched.name && (
                <span className="text-red-500">{formik.errors.name}</span>
              )}
            </div>
            <div className="pb-4">
              <h2 className="pb-1 myStyle_update text-sky-900 font-medium">Email :</h2>
              <Input
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
                 {formik.errors.email && formik.touched.email && (
                <span className="text-red-500">{formik.errors.email}</span>
              )}
            </div>
            <div className="pb-4">
              <h2 className="pb-1 myStyle_update text-sky-900 font-medium"> Phone Number :</h2>
              <Input
                placeholder="Name"
                name="phoneNumber"
                type="number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
                 {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                <span className="text-red-500">{formik.errors.phoneNumber}</span>
              )}
            </div>
            <div className="pb-4">
              <h2 className="pb-1 myStyle_update text-sky-900 font-medium">PassWord :</h2>
              <Input.Password
                placeholder="New Password"
                name="passWord"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.passWord && formik.touched.passWord && (
                <span className="text-red-500">{formik.errors.passWord}</span>
              )}
            </div>
            <div className="pb-4">
              <h2 className="pb-1 myStyle_update text-sky-900 font-medium"> Confirm Password :</h2>
              <Input.Password
                placeholder="New Password"
                name="confirmPassword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
                 {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                <span className="text-red-500">{formik.errors.confirmPassword}</span>
              )}
            </div>
            <div className="text-end">
              <button
              type='submit'
                className="bg-sky-700 hover:bg-sky-500 duration-500 text-white px-3 text-lg rounded-md text-end"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </ProjectLayout>
  );
};

export default Profile;
