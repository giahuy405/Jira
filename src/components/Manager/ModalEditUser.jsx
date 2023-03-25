/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModalUserEdit,  putEditUser } from "../../redux/actions/Manager/action";
import { Input } from "antd";
import { useFormik } from "formik";
import { editUserSchema } from "../../schema/editUserSchema";


const modalEditUser = () => {
  
  const { infoUser } = useSelector((state) => state.userReducer);
  
  const dispatch = useDispatch();
  const formit = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: infoUser?.userId,
      passWord: null,
      email: infoUser?.email,
      name: infoUser?.name,
      phoneNumber:infoUser?.phoneNumber,
    },
    validationSchema: editUserSchema,
    onSubmit: values =>{
      dispatch(putEditUser(values))
      
    }
  });
  const open = useSelector((state) => state.reducer.modalUser);
  //--------submit value----------
  const handleCancel = () => {
    dispatch(closeModalUserEdit);
  };
  return (
    <div>
      <Modal open={open} onCancel={handleCancel} okType="default" >
        <div className="flex justify-center">
          <h2 className="text-3xl font-semibold text-blue-900">Edit</h2>
          <h2 className="text-3xl font-semibold text-orange-600">User</h2>
        </div>
        <div
          className=" bg-slate-800 mt-3"
          style={{ height: 1, width: "100%" }}
        ></div>
        <form onSubmit={formit.handleSubmit}>
          <div className="flex justify-center items-center pt-3">
            <img
              className="w-11 mr-1"
              style={{ borderRadius: "50%" }}
              src={infoUser?.avatar}
              alt="#"
            />
            <h2 className="text-lg font-medium">ID:{infoUser?.userId}</h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="mb-2 flex flex-col ">
              <h2 className="text-lg text-slate-600">Name :</h2>
              <Input placeholder="Name" name="name" className="w-80" onChange={formit.handleChange} value={formit.values.name} onBlur={formit.handleBlur} />
              { formit.errors.name && formit.touched.name && <span className="text-red-500">{formit.errors.name}</span>}
            </div>
            <div className="mb-2 flex flex-col">
              <h2 className="text-lg text-slate-600">Email :</h2>
              <Input placeholder="email" name="email" className="w-80" onChange={formit.handleChange} value={formit.values.email} onBlur={formit.handleBlur}/>
              { formit.errors.email && formit.touched.email && <span className="text-red-500">{formit.errors.email}</span>}
            </div>
            <div className="mb-2 flex flex-col">
              <h2 className="text-lg text-slate-600">Number :</h2>
              <Input
                placeholder="Number"
                name="phoneNumber"
                type="Number"
                className="w-80"
                onChange={formit.handleChange}
                value={formit.values.phoneNumber}
                onBlur={formit.handleBlur}
              />
               { formit.errors.phoneNumber && formit.touched.phoneNumber && <span className="text-red-500">{formit.errors.phoneNumber}</span>}
            </div>
            <div className="mb-6 flex flex-col">
              <h2 className="text-lg text-slate-600">PassWord :</h2>
              <Input.Password
                placeholder="PassWord"
                name="passWord"
                className="w-80"
                onChange={formit.handleChange}
                onBlur={formit.handleBlur}
              />
              { formit.errors.passWord && formit.touched.passWord && <span className="text-red-500">{formit.errors.passWord}</span>}
            </div>
            <div>
              <button type="submit" className="bg-sky-700 py-1 px-3 rounded-md text-white hover:bg-sky-500"
              style={{
                position: "relative",
                transform: "translateY(43px)",
                zIndex:10,
                marginLeft:426
              }}
              >Save</button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default modalEditUser;
