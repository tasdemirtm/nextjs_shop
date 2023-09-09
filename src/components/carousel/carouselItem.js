import React from 'react'
import Image from 'next/image';
import LittleTitle from '../title/littleTitle';
import BigTitle from '../title/bigTitle';
import Text from '../title/text';


function CarouselItem() {
    return (
        <>
            <div className='container h-[85vh] max-sm:h-[45vh]'>
                <div className="relative z-10 w-[35%] max-sm:w-[100%] max-sm:px-5 h-full flex items-start justify-center flex-col">
                    <LittleTitle classStyle={`text-white`}>Essenstial Items</LittleTitle>
                    <BigTitle classStyle={`text-white my-5 max-sm:my-2`}>Get The Perfectly  Hydrated Skin</BigTitle>
                    <Text classStyle={`text-white`}>Made using clean, non-toxic ingredients, our products are designed for everyone.</Text>
                    <button className='bg-secondary px-5 py-3 mt-6 rounded-lg text-white hover:bg-opacity-80 transition-all'>Shop Now</button>
                </div>
            </div>
            <div className='absolute w-full h-full z-[9] top-0 left-0'>
                <Image src="/images/slider-01.jpg" alt='' fill sizes='100%' priority className='max-sm:!max-w-screen-2xl max-sm:!h-full align-middle' />
            </div>
        </>
    )
}

export default CarouselItem