import Campaign from "@/components/campaignCard/campaign"
import Carousel from "@/components/carousel/carousel"
import FavoriteComponent from "@/components/favorite"
import IconCard from "@/components/iconCart"
import ProductsCarousel from "@/components/productsCarousel"
// import { resolve } from "styled-jsx/css"


// async function delay(ms){
//   return new Promise((resolve)=>setTimeout(resolve,ms))
// }

async function Page() {
  // await delay(90000)

  return (
    <>
      <Carousel />
      <ProductsCarousel />
      <Campaign />
      <div className='bg-stone-500 bg-opacity-40 my-20 max-sm:bg-transparent'>
        <div className='flex justify-between  container  py-5 rounded-lg max-sm:flex-wrap  max-sm:p-2'>
          <IconCard />
          <IconCard />
          <IconCard />
          <IconCard />
        </div>
      </div>
      <FavoriteComponent />
    </>
  )
}

export default Page