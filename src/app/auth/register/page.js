"use client"
import { useFormik } from 'formik';
import Input from '@/components/form/input'
import MiddleTitle from '@/components/title/middleTitle'
import Link from 'next/link'
import { registerSchema } from '../../../../schema/registerSchema';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';


function Registration() {
  const router = useRouter()

  const onSubmit = async (values, actions) => {

    const rand = function() {
      return Math.random().toString(36).substr(2); // remove `0.`
  };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
        {
          id:rand() + rand() + rand()  + rand() + rand() + rand(),
          name: values.fullName,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        }
      );
      
      if (res.status === 200) {
        toast.success("User created successfully");
        router.push("/auth/login")
      }
    } catch (err) {
      toast.error(err.message);
    }
    actions.resetForm();

  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Password Again",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
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
            <button className='bg-gray-300 text-white px-3 py-2 rounded-md w-full hover:bg-slate-700 transition-all'>Register</button>
          </Link>
        </div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-[400px]" onSubmit={handleSubmit} >
          <MiddleTitle classStyle={"text-center mb-5"}>Register</MiddleTitle>
          {inputs.map((input) => (<div className='mb-4' key={input.id} ><Input  {...input} onChange={handleChange} onBlur={handleBlur} /></div>))}
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-secondary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  )
}

export default Registration