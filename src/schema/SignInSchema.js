import * as Yup from 'yup'

export const signUpSchema = Yup.object().shape({
    email: Yup 
    .string()
    .required('* Please enter your password !')
    .email("* Email is not valid"),
    passWord: Yup 
    .string()
    .required('* Please enter your password !')
})