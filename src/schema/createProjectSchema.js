import * as yup from 'yup';


const usernameRegex = /^[A-z_](\w|\.|_){3,15}$/
const regexURL = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

export const createProjectSchema = yup.object().shape({
    projectName: yup
        .string()
        .min(4, 'Project name must contain at least 5 letters')
        .required('Please enter your project name'),
    description: yup.mixed().test('len', 'Description must be at least 6 characters', val => {
        if (val) {
            // remove html from content
            return val.replace(/<[^>]*>?/gm, '').trim().length >= 6;
        }
        return false;
    }).required('Description is required'),
    alias: yup
        .string()
        .matches(regexURL, { message: "URL is not valid" })
})