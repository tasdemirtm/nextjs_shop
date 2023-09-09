import React from 'react'
import "./styles.css";
import Card from '../card';
import MiddleTitle from '../title/middleTitle';
import LittleTitle from '../title/littleTitle';
import CampaignCard from '../campaignCard/campaignCard';


function FavoriteComponent() {
    return (
        <div className='container my-20'>
            <div className='mb-16'>
                <MiddleTitle classStyle={"text-secondary text-center"}>Customer Favorite Beauty Essentials</MiddleTitle>
                <LittleTitle classStyle={"text-secondary text-center"}>Get the skin you want to feel</LittleTitle>
            </div>
            <div className="favoritegrid">
                <div className="item0 max-sm:hidden"><CampaignCard classStyle={"!h-[790px]"} src="/images/banner-white-33.jpg"/></div>
                <div className="item1 max-sm:mb-5 max-sm:px-5"><Card classStyle={"!h-[380px] max-sm:!h-[440px]"} /></div>
                <div className="item2 max-sm:mb-5 max-sm:px-5"><Card classStyle={"!h-[380px] max-sm:!h-[440px]"} /></div>
                <div className="item3 max-sm:mb-5 max-sm:px-5"><Card classStyle={"!h-[380px] max-sm:!h-[440px]"} /></div>
                <div className="item4 max-sm:mb-5 max-sm:px-5"><Card classStyle={"!h-[380px] max-sm:!h-[440px]"} /></div>
                <div className="item5 max-sm:mb-5 max-sm:px-5"><Card classStyle={"!h-[380px] max-sm:!h-[440px]"} /></div>
                <div className="item6 max-sm:mb-5 max-sm:px-5"><Card classStyle={"!h-[380px] max-sm:!h-[440px]"} /></div>
            </div>
        </div>
    )
}

export default FavoriteComponent