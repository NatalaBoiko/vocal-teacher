
import * as yup from "yup";

const regexPhone = /^\+\d{12}$/;

export const contactSchema = yup.object({
    userName: yup
        .string()
        .required("Як до Вас звертатися ?"),
    tel: yup
        .string()
        .required("Куди зателефонувати ?")
        .matches(regexPhone, "+380123456789"),
    message: yup
        .string()
});