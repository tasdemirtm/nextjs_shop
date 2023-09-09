import React from 'react'
import { PiCreditCardThin } from 'react-icons/pi';
import Text from '../title/text';
import MiddleTitle from '../title/middleTitle';

function IconCard() {
    return (
        <div className="rounded-md flex flex-col items-center justify-center text-center w-[25%] max-sm:w-[49%] max-sm:p-3 max-sm:bg-green-200 max-sm:mb-3 ">
                <PiCreditCardThin color='black' size={65} />
            <div>
                <MiddleTitle classStyle={"my-2 !text-[20px] !leading-[30px] text-black"}>Free Shipping</MiddleTitle>
                <Text classStyle={"text-black"}>Free Shipping for orders over $130</Text>
            </div>
        </div>
    )
}

export default IconCard