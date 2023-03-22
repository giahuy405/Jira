import * as Yup from 'yup'

export const signUpSchema = Yup.object().shape({
    email: Yup 
    .string()
    .required('* Email không được bỏ trống !')
    .email("* Email sai định dạng phải chứa '@'"),
    passWord: Yup 
    .string()
    .required('* Mật khẩu không được bỏ trống !')
})