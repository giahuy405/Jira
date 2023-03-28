import React from "react";
import { Modal, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModalCreateUser, postCreateUser } from "../../redux/actions/Manager/action";
import { useFormik } from "formik";
import { createUserSchema } from "../../schema/createUserSchema";
const ModalCeateUser = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.reducer.modalCreateUser);
  const handleCancel = () => {
    dispatch(closeModalCreateUser);
  };
  //------------ONCLICK CREATE USER----------------
  const Formik = useFormik({
    initialValues: {
      email: "",
      passWord: "",
      confirmPassword:"",
      name: "",
      phoneNumber: "",
    },
    validationSchema: createUserSchema,
    onSubmit: values=>{
        dispatch(postCreateUser(values))
    },
   
  });
  return (
    <div>
      <Modal open={open}  footer={null} onCancel={handleCancel}  className="modalCreate">
        <div className="flex justify-center">
          <h2 className="textFirst text-3xl font-semibold text-blue-900">Create</h2>
          <h2 className="text-3xl font-semibold text-orange-600">User</h2>
        </div>
        <div
          className=" bg-slate-800 mt-3"
          style={{ height: 1, width: "100%" }}
        ></div>
        <form onSubmit={Formik.handleSubmit} className="form"  >
          <div className="flex flex-col justify-center items-center">
            <div className="mb-2 mt-5 flex flex-col ">
              <h2 className="text-lg text-slate-600">Name :</h2>
              <Input
                placeholder="Name"
                name="name"
                className="w-80"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.errors.name&& Formik.touched.name && (
                <span className="text-red-500">{Formik.errors.name}</span>
              )}
            </div>
            <div className="mb-2 flex flex-col">
              <h2 className="text-lg text-slate-600">Email :</h2>
              <Input
                placeholder="email"
                name="email"
                className="w-80"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.errors.email && Formik.touched.email && (
                <span className="text-red-500">{Formik.errors.email}</span>
              )}
            </div>
            <div className="mb-2 flex flex-col">
              <h2 className="text-lg text-slate-600">Number :</h2>
              <Input
                placeholder="Number"
                name="phoneNumber"
                type="Number"
                className="w-80"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.errors.phoneNumber && Formik.touched.phoneNumber && (
                <span className="text-red-500">
                  {Formik.errors.phoneNumber}
                </span>
              )}
            </div>
            <div className="mb-6 flex flex-col">
              <h2 className="text-lg text-slate-600">PassWord :</h2>
              <Input.Password
                placeholder="PassWord"
                name="passWord"
                className="w-80"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.errors.passWord && Formik.touched.passWord && (
                <span className="text-red-500">{Formik.errors.passWord}</span>
              )}
            </div>
            <div className="mb-6 flex flex-col">
              <h2 className="text-lg text-slate-600">Confirm Password :</h2>
              <Input.Password
                placeholder="confirmPassword"
                name="confirmPassword"
                className="w-80"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              {Formik.errors.confirmPassword && Formik.touched.confirmPassword && (
                <span className="text-red-500">{Formik.errors.confirmPassword}</span>
              )}
            </div>
            <div>
            <button
            type="button"
              onClick={handleCancel}
                className="bg-red-700 py-1 px-3 mr-3 rounded-md text-white hover:bg-red-500"
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-sky-700 py-1 px-3 rounded-md text-white hover:bg-sky-500"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ModalCeateUser;
