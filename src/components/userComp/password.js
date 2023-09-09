'use client'
import React from 'react'
import Input from '../form/input';
import { useFormik } from "formik";
import { newPasswordSchema } from '../../../schema/newPasswordSchema';
import { useParams } from 'next/navigation'
import { toast } from 'react-toastify';
import axios from 'axios';

function Password({ userData }) {

    const params = useParams()

    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL + "/users/" + params.id}`, { values, userData })
            if (res.status === 200) {
                toast.success("success");
                actions.resetForm();
            }

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };



    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
            enableReinitialize: true,
            initialValues: {
                oldPassword: "",
                password: "",
                confirmPassword: "",
            },
            onSubmit,
            validationSchema: newPasswordSchema,
        });
    const inputs = [
        {
            id: 1,
            name: "oldPassword",
            type: "password",
            placeholder: "Old Password",
            value: values.oldPassword,
            errorMessage: errors.oldPassword,
            touched: touched.password,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "New Password",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
        {
            id: 3,
            name: "confirmPassword",
            type: "password",
            placeholder: "New Confirm Password",
            value: values.confirmPassword,
            errorMessage: errors.confirmPassword,
            touched: touched.confirmPassword,
        },
    ];

    return (
        <form className='flex flex-col items-center justify-between w-[65%] h-fit' onSubmit={handleSubmit}>
            {inputs.map((input) => (
                <div className='w-[48%] h-fit my-4' key={input.id}>
                    <Input {...input} onBlur={handleBlur} onChange={handleChange} />
                </div>
            ))}
            <button type='submit' className='bg-secondary py-2 px-4 rounded-md text-white hover:bg-opacity-90 transition-all w-[48%]'>Edit</button>

        </form>

    )
}

export default Password