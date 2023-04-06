import * as yup from "yup";
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const passWordSchema = yup.object().shape({
     passWord: yup
    .string()
    .min(6, "* Password must be 4-6 characters and numbers")
    .matches(passwordRegex, {
      message: "* Minimum eight characters, at least one number "
    })
    .required("* Please enter a new password"),
    confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('passWord'), null], `Password doesn't match`)
    .required("* Please enter a new password"),
})