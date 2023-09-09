import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import "./styles.css"
import LittleTitle from '../title/littleTitle';
import MiddleTitle from '../title/middleTitle';

function CampaignCard({src,classStyle}) {
    return (
        <div className={`${classStyle} campaigncard relative w-full h-[400px] max-sm:h-[250px] overflow-hidden hover-shine rounded-md shadow-lg shadow-slate-400/50`}>
            <Image src={src} fill sizes='100%' alt="" className='z-0' />
            <div className='absolute flex flex-col justify-center top-0 left-0 z-10 w-full h-full text-white max-sm:p-5 p-10'>
                <LittleTitle>NEW COLLECTION</LittleTitle>
                <MiddleTitle classStyle={"!leading-[45px] max-sm:!leading-[35px]  my-5"}>Intensive Glow C+ Serum</MiddleTitle>
                <Link href="" className='bg-white border-2 w-fit text-black px-5 py-3 rounded-md font-bold hover:bg-black hover:text-white transition-all'>Explore More</Link>
            </div>
        </div>
    );
}

export default CampaignCard