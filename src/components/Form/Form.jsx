"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "@/yupShemas/contactShema";

import styles from "./Form.module.scss";

const Form = () => {
    const initialValues = {
        defaultValues: {
            userName: "",
            tel: "",
            message: "",
        },
        resolver: yupResolver(contactSchema),
        mode: "onChange",
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset } = form;
    const { errors, isSubmitSuccessful, isErrors, isSubmitting, dirtyFields } =
        formState;

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit = (data) => {
        console.log("data befor sending:", data);
        emailjs
            .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data, {
                publicKey: "YOUR_PUBLIC_KEY",
            })
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                },
                (err) => {
                    console.log("FAILED...", err);
                }
            );
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            noValidate
        >
            <h3>Хочу співати!</h3>
            <div className={styles.inputWrap}>
                <label htmlFor='userName' className={styles.label}>
                    Ім’я
                </label>

                <input
                    type='text'
                    id='userName'
                    {...register("userName")}
                    placeholder='Вікторія'
                    maxLength='30'
                    className={styles.input}
                />
                <p className={styles.error}>{errors.userName?.message}</p>
            </div>
            <div className={styles.inputWrap}>
                <label htmlFor='tel' className={styles.label}>
                    Номер телефону
                </label>

                <input
                    type='text'
                    id='tel'
                    {...register("tel")}
                    placeholder='+380123456789'
                    maxLength='13'
                    className={styles.input}
                />
                <p className={styles.error}>{errors.tel?.message}</p>
            </div>
            <div className={styles.inputWrap}>
                <label htmlFor='message' className={styles.label}>
                    Декілька слів про себе
                </label>

                <input
                    type='text'
                    id='message'
                    {...register("message")}
                    placeholder='Хочу навчитись співати джаз!'
                    className={styles.input}
                />
                <p className={styles.error}>{errors.message?.message}</p>
            </div>
            <button
                type='submit'
                className={styles.btn}
                disabled={isErrors || isSubmitting}
            >
                Записатись на безкоштовний урок
            </button>
        </form>
    );
};

export default Form;
