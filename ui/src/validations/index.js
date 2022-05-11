import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('required'),
    password: Yup.string()
        .min(8, 'password must be at least 8 character')
        .max(50, 'Too Long!')
        .required('required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match')
        .required('Required'),
});