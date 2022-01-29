import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required("Username is required your face!")
    .min(3, "Username has to be 3 characters long ya chump!"),
    size: yup
    .string()
    .oneOf(['topping1', 'topping2', 'topping3', 'topping4'], "pick a size fool!")
})

export default formSchema;