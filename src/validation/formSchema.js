import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required("Username is required your face!")
    .min(3, "Username has to be 3 characters long ya chump!"),
})

export default formSchema;