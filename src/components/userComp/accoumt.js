import React, { useState } from 'react'
import Input from '../form/input';
import { useFormik } from "formik";
import { profileSchema } from '../../../schema/profileSchema';
import axios from 'axios';
import { toast } from 'react-toastify';
import LittleTitle from '../title/littleTitle';
import Image from 'next/image';

function Account({ userData }) {



    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, { values, userData })
            if (res.status === 200) {
                toast.success("success");
            }

        } catch (error) {

        }

    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
            enableReinitialize: true,
            initialValues: {
                fullName: userData?.name,
                phoneNumber: userData.phoneNumber === undefined ? "" : userData.phoneNumber,
                email: userData?.email,
                address: userData.address === undefined ? "" : userData.address,
                province: userData.province === undefined ? "" : userData.province,
                county: userData.county === undefined ? "" : userData.county,
            },
            onSubmit,
            validationSchema: profileSchema,
        });
    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Full Name",
            value: values.fullName,
            errorMessage: errors.fullName,
            touched: touched.fullName,
        },
        {
            id: 2,
            name: "phoneNumber",
            type: "number",
            placeholder: "Phone Number",
            value: values.phoneNumber,
            errorMessage: errors.phoneNumber,
            touched: touched.phoneNumber,
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Email Address",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 5,
            name: "province",
            type: "text",
            placeholder: "Province",
            value: values.province,
            errorMessage: errors.province,
            touched: touched.province,
        },
        {
            id: 6,
            name: "county",
            type: "text",
            placeholder: "County",
            value: values.county,
            errorMessage: errors.county,
            touched: touched.county,
        },
        {
            id: 4,
            name: "address",
            type: "text",
            placeholder: "Address",
            value: values.address,
            errorMessage: errors.address,
            touched: touched.address,
        },

    ];

    return (
        <>
            <form  onSubmit={handleSubmit} className='w-full flex  items-center justify-between'>
                <div className='flex flex-wrap items-center justify-between w-[65%] h-fit'>
                    {inputs.map((input) => (
                        <div className='w-[32%] h-fit my-4' key={input.id}>
                            <Input {...input} onBlur={handleBlur} onChange={handleChange} />
                        </div>
                    ))}
                    <button type='submit' className='bg-secondary py-1 px-4 rounded-md text-white hover:bg-opacity-90 transition-all'>Edit</button>
                </div>

                <div className=' w-[25%] mb-5 p-4'>
                    <div className='bg-white flex flex-col items-center justify-between rounded-md p-4'>
                        <LittleTitle classStyle={"capitalize"}>{userData.name} </LittleTitle>
                        <div className='relative w-[100px] h-[100px] rounded-full overflow-hidden my-5'>
                            <Image src="/images/admin.jpg" alt='' fill sizes='100%' />
                        </div>
                        {/* <div className=' w-full'>
                            <Input type="file" />
                        </div> */}

                    </div>
                </div>
            </form>
        </>
    )
}

export default Account