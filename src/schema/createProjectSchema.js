import * as yup from 'yup';


const usernameRegex = /^[A-z_](\w|\.|_){3,15}$/
const regexURL = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

export const createProjectSchema = yup.object().shape({
    projectName: yup
        .string()
        .min(4, 'Project name must contain at least 5 letters')
        .required('Please enter your project name'),
    description: yup
        .string()
        .min(13, 'At least 6 characters')
        .required('Please enter description'),
    alias: yup
        .string()
        .matches(regexURL, { message: "URL is not valid" })
})