import * as Yup from 'yup';

export const YupSchema = Yup.object({
    email : Yup.string().min(2).max(25).required("Please enter your name"),
    password : Yup.string().min(6).max(25).required('Enter password')
})