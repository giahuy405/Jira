import { Input, Tabs } from "antd";
import { useFormik } from "formik";
import React, { useEffect,useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ProjectLayout from "../HOCs/ProjectLayout";
import { infoUserSchema } from "../schema/infoUserSchema";
import * as actionType from "../redux/constants/constants";
import { updateUserAction } from "../redux/actions/Manager/action";
import Swal from "sweetalert2";
import { passWordSchema } from "../schema/passwordSchema";

const Profile = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2600,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actionType.LOGIN_INFO,
      payload: JSON.parse(localStorage.getItem("USER_INFO")),
    });
  }, [dispatch]);
  const info_2 = JSON.parse(localStorage.getItem("USER_INFO"))
  const { infoUser } = useSelector((state) => state.reducer);
  const tab2 = useFormik({
    enableReinitialize:true,
    initialValues: {
      id: info_2?.id,
      passWord: '',
      email: info_2?.email,
      name: info_2?.name,
      phoneNumber: info_2?.phoneNumber,
      confirmPassword: "",
      OldPassWord: "",
    },
    validationSchema: passWordSchema,
    onSubmit: (values,actions) => {
      if(values.OldPassWord !== localStorage.getItem('pw')){
        Toast.fire({
          icon: 'error',
          title: 'wrong password !'
      })
      actions.resetForm();
      }else{
        dispatch(updateUserAction(values));
        actions.resetForm();
      }
    },
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: infoUser?.id,
      passWord: localStorage.getItem("pw"),
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

        <div className="flex justify-center pt-16  ">
          <div
            className="flex flex-col items-center justify-center pt-5 pb-3 mr-32"
            style={{ height: 300 }}
          >
            <img
              src={infoUser?.avatar}
              width="100"
              style={{ borderRadius: "50%" }}
              alt="#"
            />
            <div className="pl-4 text-center">
              <h2 className="myStyle_update font-semibold text-3xl pb-1 text-sky-900 ">
                {infoUser?.name}
              </h2>
              <p className="myStyle_update_p font-medium text-sm text-gray-600">
                ID: {infoUser?.id}
              </p>
            </div>
          </div>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: "1",
                label: <><h2 className="pb-1 myStyle_tabs text-base text-black font-medium">Change User Profile</h2></>,
                children: (
                  <>
                    <form className="w-80" onSubmit={formik.handleSubmit}>
                      <div className="pb-4">
                        <h2 className="pb-1 myStyle_update text-sm text-sky-900 font-medium">
                          Name :
                        </h2>
                        <Input
                          placeholder="Name"
                          name="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.errors.name && formik.touched.name && (
                          <span className="text-red-500">
                            {formik.errors.name}
                          </span>
                        )}
                      </div>
                      <div className="pb-4">
                        <h2 className="pb-1 myStyle_update text-sm text-sky-900 font-medium">
                          Email :
                        </h2>
                        <Input
                          placeholder="Email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && formik.touched.email && (
                          <span className="text-red-500">
                            {formik.errors.email}
                          </span>
                        )}
                      </div>
                      <div className="pb-4">
                        <h2 className="pb-1 myStyle_update text-sm text-sky-900 font-medium">
                          {" "}
                          Phone Number :
                        </h2>
                        <Input
                          placeholder="Name"
                          name="phoneNumber"
                          type="number"
                          value={formik.values.phoneNumber}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.errors.phoneNumber &&
                          formik.touched.phoneNumber && (
                            <span className="text-red-500">
                              {formik.errors.phoneNumber}
                            </span>
                          )}
                      </div>
                      <div className="text-end">
                        <button
                          type="submit"
                          className="bg-blue-600 hover:bg-blue-800 duration-500 text-white px-3 text-lg rounded-md "
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </>
                ),
              },
              {
                key: "2",
                label: <><h2 className="pb-1 myStyle_tabs text-base text-black font-medium">Change Password</h2></>,
                children: (
                  <>
                    <form className="w-80" onSubmit={tab2.handleSubmit}  >
                      <div className="pb-4">
                        <h2 className="pb-1 myStyle_update text-sm text-sky-900 font-medium">
                          Old Password :
                        </h2>
                        <Input.Password
                          placeholder="Old Password"
                          name="OldPassWord"
                          onChange={tab2.handleChange}
                          value={tab2.values.OldPassWord}
                        />
                      </div>
                      <div className="pb-4">
                        <h2 className="pb-1 myStyle_update text-sm text-sky-900 font-medium">
                          New Password :
                        </h2>
                        <Input.Password
                          placeholder="New Password"
                          name="passWord"
                          onChange={tab2.handleChange}
                          value={tab2.values.passWord}
                          onBlur={tab2.handleBlur}
                        />
                         {tab2.errors.passWord && tab2.touched.passWord && (
                          <span className="text-red-500">
                            {tab2.errors.passWord}
                          </span>
                        )}
                      </div>
                      <div className="pb-4">
                        <h2 className="pb-1 myStyle_update text-sm text-sky-900 font-medium">
                          {" "}
                          Confirm Password :
                        </h2>
                        <Input.Password
                          placeholder="New Password"
                          name="confirmPassword"
                          onChange={tab2.handleChange}
                          value={tab2.values.confirmPassword}
                          onBlur={tab2.handleBlur}
                        />
                         {tab2.errors.confirmPassword && tab2.touched.confirmPassword && (
                          <span className="text-red-500">
                            {tab2.errors.confirmPassword}
                          </span>
                        )}
                      </div>
                      <div className="text-end">
                        <button 
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-800 duration-500 text-white px-3 text-lg rounded-md ">
                          Update
                        </button>
                      </div>
                    </form>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </ProjectLayout>
  );
};

export default Profile;
