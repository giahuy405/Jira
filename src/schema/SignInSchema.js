import * as Yup from 'yup'

export const signInSchema = Yup.object().shape({
    email: Yup 
    .string()
    .required('* Please enter your email !')
    .email("* Email is not valid"),
    passWord: Yup 
    .string()
    .required('* Please enter your password !')
})