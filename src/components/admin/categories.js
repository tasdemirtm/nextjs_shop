"use client"
import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import { categorySchema } from '@/../schema/categorySchema'
import Input from '../form/input';
import axios from 'axios';
import { toast } from 'react-toastify';
import CategoryListItem from './categorylistItem';

function Categories() {

    const [categoriesData, setCategoriesData] = useState([]);

    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/category`, { values })
            if (res.status === 200) {
                toast.success("success");
                actions.resetForm()
                getCategories()
            }
        } catch (error) {
            toast.success(error);

        }

    };

    async function getCategories() {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/category`
            );
            if (res.status === 200) {
                setCategoriesData(res.data.categories);
            }
        } catch (error) {
            toast.success(error);
        }
    }

    async function deleteCategory(category) {
        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL + "/category/" +category._id }`);
            if (res.status === 200) {
                // setCategoriesData(res.data.categories);
                toast.success("success");
        getCategories();
    }
        } catch (error) {
            toast.success(error);
        }
    }


    useEffect(() => {
        getCategories();
    }, []);

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
            enableReinitialize: true,
            initialValues: {
                categoryName: "",
                status: true
            },
            onSubmit,
            validationSchema: categorySchema,
        });

    const inputs = [
        {
            id: 1,
            name: "categoryName",
            type: "text",
            placeholder: "Category Name",
            value: values.categoryName,
            errorMessage: errors.categoryName,
            touched: touched.categoryName,
        },
    ];




    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit} className='w-full flex  items-center justify-center bg-gray-300 px-4 rounded-md mt-4'>
                <div className='flex flex-wrap items-end justify-between w-full h-fit'>
                    {inputs.map((input) => (
                        <div className='w-[300px] h-fit my-4' key={input.id}>
                            <Input {...input} onBlur={handleBlur} onChange={handleChange} />
                        </div>
                    ))}
                    <div className='w-[300px] h-fit my-4'>
                        <label className="block text-gray-700 text-sm font-bold mb-2 " >
                            Status
                        </label>
                        <select className='w-[300px] h-[40px] px-2 rounded-md' name='status' value={values.status} onBlur={handleBlur} onChange={handleChange}>
                            <option defaultValue={true}>Active</option>
                            <option defaultValue={false}>Disable</option>
                        </select>
                    </div>
                    <div className='w-[300px] h-fit my-4'>
                        <button type='submit' className='bg-gray-500 text-white px-4 py-1 rounded-md w-[300px] h-[40px]'>Add</button>
                    </div>
                </div>
            </form>

            <CategoryListItem  data={categoriesData} deleteCategory={deleteCategory} />
        </div>
    )
}

export default Categories