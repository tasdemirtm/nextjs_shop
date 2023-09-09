"use client"
import { useFormik } from "formik";
import { productsSchema } from '../../../schema/productsSchema'
import Input from '../form/input';
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ProductlistItem from "./productlistItem";

function Products() {
    const [productData, setProductData] = useState([])
    const [categoriesData, setCategoriesData] = useState([]);

    const onSubmit = async (values, actions) => {


        try {
            values.categories = categoriesData.find(x => x._id === values.categoryId).categoryName
            const img = values.productName.replace(" ", "_") + "." + values.photo.type.split("/")[1]
            values.img = img

            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product`, { values })
            if (res.status === 200) {
                const data = new FormData()
                data.set("file", values.photo, img)
                const res = await fetch("/api/file", {
                    method: "POST",
                    body: data
                })
                toast.success("success");
                actions.resetForm()
                getProducts()
            }
        } catch (error) {
            toast.success(error);
        }
    };

    useEffect(() => {
        getCategories();
        getProducts()
    }, []);

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

    async function getProducts() {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`);
            if (res.status === 200) {
                setProductData(res.data.products);
            }
        } catch (error) {
            toast.success(error);
        }
    }

    const { values, errors, touched, handleSubmit, handleChange, setFieldValue, handleBlur } =
        useFormik({
            enableReinitialize: true,
            initialValues: {
                productName: "",
                categoryId: "",
                status: true,
                price: "",
                description: "",
                categories: "",
                brand: "",
                size: "",
                photo: "",
                img: ""
            },
            onSubmit,
            validationSchema: productsSchema,
        });

    const inputs = [
        {
            id: 1,
            name: "productName",
            type: "text",
            placeholder: "Products Name",
            value: values.productName,
            errorMessage: errors.productName,
            touched: touched.productName,
        },
        {
            id: 2,
            name: "price",
            type: "number",
            placeholder: "Price",
            value: values.price,
            errorMessage: errors.price,
            touched: touched.price,
        },
        {
            id: 3,
            name: "size",
            type: "text",
            placeholder: "Size",
            value: values.size,
            errorMessage: errors.size,
            touched: touched.size,
        },
        {
            id: 5,
            name: "brand",
            type: "text",
            placeholder: "Brand",
            value: values.brand,
            errorMessage: errors.brand,
            touched: touched.brand,
        },
    ];


    async function deleteProduct(product) {
        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL + "/product/" + product._id}`);
            if (res.status === 200) {
                // setCategoriesData(res.data.categories);
                toast.success("success");
                getProducts();
            }
        } catch (error) {
            toast.success(error);
        }
    }

    return (
        <div className='w-full'>
            <form encType="multipart/form-data" onSubmit={handleSubmit} className='w-full flex  items-center justify-center bg-gray-300 px-4 rounded-md mt-4'>
                <div className='flex flex-wrap items-center justify-between w-full h-fit'>
                    {inputs.map((input) => (
                        <div className='w-[200px] h-fit my-4' key={input.id}>
                            <Input {...input} onBlur={handleBlur} onChange={handleChange} />
                        </div>
                    ))}
                    <div className='w-[200px] h-fit my-4'>
                        <label className="block text-gray-700 text-sm font-bold mb-2 " >
                            Category
                        </label>
                        <select component="select" className='w-[200px] h-[40px] px-2 rounded-md' name='categoryId' value={values.categoryId} onBlur={handleBlur} onChange={handleChange} required={true}>
                            <option value="" selected>
                                Select Category
                            </option>
                            {
                                categoriesData.map(x => {
                                    return (
                                        <option key={x._id} value={x._id} label={x.categoryName}>{x.categoryName}</option>
                                    )
                                })
                            }
                        </select>
                        <span className="text-xs text-red-800">{values.errors}</span>
                    </div>

                    <div className='w-[200px] h-fit my-4'>
                        <label className="block text-gray-700 text-sm font-bold mb-2 " >
                            image
                        </label>
                        <input
                            type='file'
                            name='photo'
                            accept='image/*'
                            required
                            onChange={(e) =>
                                setFieldValue('photo', e.currentTarget.files[0])
                            }
                        />
                        <span className="text-xs text-red-800">{values.errors}</span>
                        
                    </div>
                    <div className='w-[70%] h-fit my-4'>
                        <label className="block text-gray-700 text-sm font-bold mb-2 " >
                            Description
                        </label>
                        <textarea value={values.description} name="description" className="w-full p-2 rounded-md" rows={5} placeholder="description" onBlur={handleBlur} onChange={handleChange} required />
                        <span className="text-xs text-red-800">{values.errors}</span>
                    </div>
                    <div className='w-[200px] h-fit my-4'>
                        <button type='submit' className='bg-gray-500 text-white px-4 py-1 rounded-md w-[200px] h-[40px]'>Add</button>
                    </div>
                </div>
            </form>

            <ProductlistItem data={productData} deleteProduct={deleteProduct} />
        </div>
    )
}

export default Products