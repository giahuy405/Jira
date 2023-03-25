import * as yup from 'yup';

export const createTaskSchema = yup.object().shape({
    description: yup.mixed().test('len', 'Description must be at least 6 characters', val => {
        if (val) {
            // remove html from content
            return val.replace(/<[^>]*>?/gm, '').trim().length >= 6;
        }
        return false;
    }).required('Description is required'),
    listUserAsign: yup
        .array().min(1, 'At least assign 1 member'),
})