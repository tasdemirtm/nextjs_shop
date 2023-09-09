import Image from 'next/image'
import React from 'react'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { addProduct ,deleteProduct,reset} from "../../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Offcanvas({ data }) {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart.products)
    // const quantity = useSelector((state) => state.cart.quantity)

    return (
        <>
            <div className={`offcanvas w-[400px] max-sm:w-[100%] ${data.offcanvasStatus === true ? "active" : ""}`}>
                <div className='flex justify-between items-center border-b-2 border-gray-200 mb-2 p-2'>
                    <span>Shopping Bag</span>
                    <AiOutlineClose onClick={() => data.setoffcanvasStatus(false)} className='hover:text-red-400' size={20} />
                </div>
                <div className='offcanvas-body'>
                    <table className='inline-block w-full'>
                        <tbody className='inline-block w-full'>
                            {
                                cart.map(product => {

                                    return (
                                        <tr key={product._id} className='bg-gray-200 flex items-center py-2 w-full'>
                                            <td className="px-2"> <AiOutlineClose size={15} onClick={()=>dispatch(reset(product))} /> </td>
                                            <td className="flex items-center w-[70%] ">
                                                <Image src={`${'/images/' + product.img}`} alt={product.productName} className='rounded-md' width={65} height={65} />
                                                <div className='px-2'>
                                                    <span className='text-[14px] font-bold'>${product.price} </span>
                                                    <p className='text-[14px]'>{product.productName}</p>
                                                </div>
                                            </td>
                                            <td className='w-fit px-2'>
                                                <form className="flex items-center bg-white px-2 py-1 rounded-sm w-fit">
                                                    <AiOutlineMinus className='hover:text-red-600' onClick={() => dispatch(deleteProduct(product))} />
                                                    <input type="number" className='w-[40px] text-center' value={product.quantity} disabled />
                                                    <AiOutlinePlus className='hover:text-red-600' onClick={() => dispatch(addProduct(product))} />
                                                </form>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
                <div className='offcanvas-bottum flex flex-col px-2'>
                    <div className='flex justify-between items-center'>
                        <span>
                            Total price:
                        </span>
                        <span className='font-bold'>
                            $106.00
                        </span>
                    </div>
                    <button className='p-2 bg-secondary rounded-sm text-white my-2 hover:bg-opacity-90'>Check Out</button>
                    <button className='p-2 bg-gray-500 rounded-sm text-white hover:bg-opacity-90'>View Shopping Cart</button>
                </div>
            </div>
            <div onClick={() => data.setoffcanvasStatus(false)} className={`offcanvas-over ${data.offcanvasStatus === true ? "active" : ""}`}></div>
        </>


    )
}

export default Offcanvas