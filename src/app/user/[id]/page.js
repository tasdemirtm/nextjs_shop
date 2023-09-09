"use client"
import Loading from '@/app/loading';
import UserComp from '@/components/userComp';
import axios from 'axios';
import { getSession, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PiPasswordLight } from 'react-icons/pi';
import { VscAccount } from 'react-icons/vsc';

function UserPanel({ params }) {

  const [userData, setUserData] = useState(null)

  const { data: session } = useSession();
  const router = useRouter()


  async function getUser() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`)
    setUserData(res.data.users)
  }


  useEffect(() => {
    if (!session) { router.push("/auth/login") }
    else {
      getUser()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  const handleSignOut = () => {
    if (confirm("Are you sure you want to sign out?")) {
      signOut({ redirect: false });
      router.push("/auth/login");
    }
  };

  // const [accordion, setAccordion] = useState(0)
  const [activeComp, setActiveComp] = useState(0)

  return (
    <div>
      {
        userData === null ? <Loading></Loading> :
          <div className='flex container my-10 bg-slate-200 p-4 rounded-md  justify-between'>
            <div className='w-[20%] flex flex-col items-center justify-center border-r border-gray-400 pr-4'>
              <ul className='w-full my-2'>
                <li onClick={() => setActiveComp(0)} className={`${activeComp === 0 && "bg-third text-white"} flex justify-between items-center my-2  px-3 py-1  cursor-pointer hover:bg-opacity-80 transition-all hover:text-orange-700`} >User <VscAccount /></li>
                <li onClick={() => setActiveComp(1)} className={`${activeComp === 1 && "bg-third text-white"} flex justify-between items-center my-2  px-3 py-1  cursor-pointer hover:bg-opacity-80 transition-all hover:text-orange-700`} >Password <PiPasswordLight /></li>
                <li onClick={handleSignOut} className="flex justify-between items-center my-2  px-3 py-1  cursor-pointer hover:bg-opacity-80 transition-all hover:text-orange-700">Exit <PiPasswordLight /></li>
              </ul>
              {/* <div className='flex flex-col gap-3 w-full'>
                <div className='w-full'>
                  <div onClick={() => setAccordion(accordion === 0 ? null : 0)} className='transition-all duration-300 border-b border-black text-black w-full text-center  py-1 px-4 mb-1  flex justify-between items-center'>
                    Account <VscAccount size={25} />
                  </div>
                  <div className={`${accordion === 0 ? "!w-full !h-fit !py-2  !flex transition-all duration-300" : ""} overflow-hidden px-4 h-0 py-0  transition-all duration-300 bg-white rounded-md   flex-col gap-2`}>
                    <div onClick={() => setActiveComp(0)} className='flex items-center justify-between hover:text-orange-700 transition-all text-black'>
                      Password <PiPasswordLight size={25} />
                    </div>
                    <div onClick={() => setActiveComp(0)} className='flex items-center justify-between hover:text-orange-700 transition-all text-black'>
                      Title <PiPasswordLight size={25} />
                    </div>
                  </div>
                </div>
                <div className='w-full'>
                  <div onClick={() => setAccordion(accordion === 1 ? null : 1)} className='transition-all duration-300 border-b border-black text-black w-full text-center  py-1 px-4 mb-1  flex justify-between items-center'>
                    Account <VscAccount size={25} />
                  </div>
                  <div className={`${accordion === 1 ? "!w-full !h-fit !py-2  !flex transition-all duration-300" : ""} overflow-hidden px-4 h-0 py-0  transition-all duration-300 bg-white rounded-md   flex-col gap-2`}>
                    <div onClick={() => setActiveComp(1)} className='flex items-center justify-between hover:text-orange-700 transition-all text-black'>
                      Password <PiPasswordLight size={25} />
                    </div>
                    <div onClick={() => setActiveComp(1)} className='flex items-center justify-between hover:text-orange-700 transition-all text-black'>
                      Title <PiPasswordLight size={25} />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className='w-[75%]'>
              <UserComp userData={userData} activeComp={activeComp} />
            </div>
          </div>
      }
    </div>
  )
}


export default UserPanel