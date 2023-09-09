"use client"
import { useFormik } from 'formik';
import Input from '@/components/form/input'
import MiddleTitle from '@/components/title/middleTitle'
import Link from 'next/link'
import { loginSchema } from '../../../../schema/loginSchema'
import { useSession, signIn } from "next-auth/react";
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import axios from 'axios';


function Login() {
    const { data: session } = useSession();
    const router = useRouter()



    useEffect(() => {
        if (session) {
            router.push(`/user/${session.id}`)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session])

    const onSubmit = async (values, actions) => {
        const { email, password } = values;
        let options = { redirect: false, email, password };
        const res = await signIn("credentials", options);
        res.error !== null ? toast.error(res.error) : toast.success("login")
        // actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
            initialValues: {
                email: "",
                password: "",
            },
            onSubmit,
            validationSchema: loginSchema,
        });



    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email Address",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
    ];


    return (
        <>
            <div className="w-full flex flex-col items-center justify-center my-16">
                <div className='flex justify-between gap-5 mb-5 w-[400px]'>
                    <Link href="login" className='w-full'>
                        <button className='bg-gray-400 text-white px-3 py-2 rounded-md w-full hover:bg-slate-700 transition-all'>Login</button>
                    </Link>
                    <Link href="register" className='w-full'>
                        <button className='bg-gray-300 text-white px-3 py-2 rounded-md w-full hover:bg-slate-700 transition-all'>register</button>
                    </Link>
                </div>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-[400px]" onSubmit={handleSubmit} >
                        <MiddleTitle classStyle={"text-center mb-5"}>Login</MiddleTitle>
                        {inputs.map((input) => (<div className='mb-4' key={input.id} ><Input  {...input} onChange={handleChange} onBlur={handleBlur} /></div>))}
                    <div className="flex items-center justify-between">

                        <button type="submit" className="bg-secondary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Login
                        </button>

                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <div className='mt-5 flex gap-4'>
                        <button onClick={() => signIn("google")} type="button" className=" text-[12px] border border-gray-400 flex  items-center gap-4 bg-white hover:bg-opacity-90 text-black font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline">
                            <FcGoogle size={30} /> Google
                        </button>
                        <button onClick={() => signIn("github")} type="button" className=" text-[12px] border border-gray-400 flex  items-center gap-4 bg-white hover:bg-opacity-90 text-black font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline">
                            <AiFillGithub size={30} /> Github
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login