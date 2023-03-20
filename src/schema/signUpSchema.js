import * as yup from 'yup';

const passwordRegex = /^[0-9]{5,10}$/;
const phoneRegex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
const usernameRegex = /^[A-z_](\w|\.|_){3,15}$/
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const signUpSchema = yup.object().shape({
    name: yup
        .string()
        .min(4, 'Username must contain at least 5 letters')
        .matches(usernameRegex, { message: "The username must contain 4-6 digits and start with the letter" })
        .required('Please enter your username'),
    passWord: yup
        .string()
        .min(6, 'Password must be a number between 6-10 characters')
        .matches(passwordRegex, { message: "Password must be a number between 6-10 characters" })
        .required('Please enter your password'),
    confirmPassword: yup
        .string()
        .required('Please confirm your password')
        .oneOf([yup.ref('passWord'), null], `Password doesn't match`)
    ,
    email: yup
        .string()
        .matches(emailRegex, { message: "Email is not valid" })
        .required('Please enter your email'),
    phoneNumber: yup
        .string()
        .matches(phoneRegex, { message: "Phone number is not valid" })
        .required('Please enter your phone number'),


})