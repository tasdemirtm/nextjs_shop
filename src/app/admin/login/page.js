"use client"
import { useFormik } from 'formik';
import Input from '@/components/form/input'
import MiddleTitle from '@/components/title/middleTitle'
import axios from 'axios';
import { adminSchema } from '../../../../schema/admin';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'

function Login() {


    const router = useRouter()

    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin`,
                { username: values.username, password: values.password });

            if (res.status === 200) {
                router.push("/admin/profile")
                toast.success("Admin Login Success!");
            }
            else {
                toast.success(res.response.data.error);
            }
        } catch (err) {
            toast.error("invalid user");
        }
        actions.resetForm();
    };
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
            initialValues: {
                username: "",
                password: "",
            },
            onSubmit,
            validationSchema: adminSchema,
        });


    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Your Username",
            value: values.username,
            errorMessage: errors.username,
            touched: touched.username,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Your Password",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
    ];


    return (
        <>
            <div className="w-full flex flex-col items-center justify-center my-16">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-[400px]" onSubmit={handleSubmit} >
                    <MiddleTitle classStyle={"text-center mb-5"}>Admin</MiddleTitle>
                        {inputs.map((input) => (<div className='mb-4' key={input.id} ><Input  {...input} onChange={handleChange} onBlur={handleBlur} /></div>))}
                    <div className="flex items-center justify-between">
                        <button className="bg-secondary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login