"use client"

import React, { useEffect, useState } from 'react'
import { VscAccount } from "react-icons/vsc"
import { PiPasswordLight } from "react-icons/pi"
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from '@/app/loading'
import AdminComp from '@/components/admin'

function AdminProfile() {

    const [adminData, setAdminData] = useState(false)
    const [activeComp, setActiveComp] = useState(0)

    const router = useRouter()

    async function admimChack() {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin`)
            if (res.status === 200) {
                setAdminData(res.data.status)
            }
            else {
                router.push("/admin/login")
            }
        } catch (error) {
            router.push("/admin/login")
        }

    }


    useEffect(() => {

        admimChack()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [adminData])



    const accountClose = async () => {
        try {
            if (confirm("Are you sure you want to close your Admin Account?")) {
                const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`)
                if (res.status === 200) {
                    router.push("/admin/login")
                    toast.success("Admin Account Closed!");
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            {
                adminData === false ? <Loading></Loading> :
                    <div className='flex container my-10 bg-slate-200 p-4 rounded-md  justify-between'>
                        <div className='w-[20%] flex flex-col items-center justify-start border-r border-gray-400 pr-4'>
                            <ul className='w-full my-2'>
                                <li onClick={() => setActiveComp(0)} className={`${activeComp === 0 && "bg-third text-white"} flex justify-between items-center my-2  px-3 py-1  cursor-pointer hover:bg-opacity-80 transition-all hover:text-orange-700`} >Order <VscAccount /></li>
                                <li onClick={() => setActiveComp(1)} className={`${activeComp === 1 && "bg-third text-white"} flex justify-between items-center my-2  px-3 py-1  cursor-pointer hover:bg-opacity-80 transition-all hover:text-orange-700`} >categories <PiPasswordLight /></li>
                                <li onClick={() => setActiveComp(2)} className={`${activeComp === 2 && "bg-third text-white"} flex justify-between items-center my-2  px-3 py-1  cursor-pointer hover:bg-opacity-80 transition-all hover:text-orange-700`} >Products <PiPasswordLight /></li>
                                <li onClick={accountClose} className="flex justify-between items-center my-2  px-3 py-1  cursor-pointer hover:bg-opacity-80 transition-all hover:text-orange-700">Exit <PiPasswordLight /></li>
                            </ul>
                        </div>
                        <div className='w-[75%]'>
                            <AdminComp activeComp={activeComp} />
                        </div>
                    </div>
            }

        </>
    )
}


export default AdminProfile