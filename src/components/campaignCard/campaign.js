import React from 'react'
import CampaignCard from './campaignCard'

function Campaign() {
    return (
        <div className='container flex max-sm:flex-col max-sm:p-5 justify-between my-16 gap-16'>
            <CampaignCard src={"/images/banner-white-01.jpg"}/>
            <CampaignCard src={"/images/banner-white-02.jpg"}/>
        </div>
    )
}

export default Campaign