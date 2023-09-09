"use client"
import Loading from '@/app/loading'
import Banner from '@/components/banner'
import Card from '@/components/card'
import MiddleTitle from '@/components/title/middleTitle'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function Category() {

  const params = useParams();


  const [products, setproducts] = useState(null);
  const [categoriesData, setCategoriesData] = useState(null)

  useEffect(() => {
    getCategories()
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  async function getProducts() {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL + "/category/" + params.name}`
      );

      if (res.status === 200) {
        setproducts(res.data.products);

      }
    } catch (error) {
      toast.error(error);
    }
  }

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


  return (
    <>
      {
        products === null ? <Loading /> :
          <div>
            <Banner patch={params.name} />

            <div className='container my-16'>
              <MiddleTitle classStyle={"text-center"}>{params.name}</MiddleTitle>
              <div className='flex justify-between items-center mb-5'>
                <span>We found <span className='font-bold'>{products.length}</span> products available for you</span>
                <select className='py-2 px-5 rounded-sm bg-secondary text-white overflow-hidden'>
                  <option selected="selected">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="date">Sort by latest</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
              </div>
              <div className='flex'>
                <div className='filter w-[20%]  mx-5 rounded-md p-5'>
                  <div className='filter-box mb-5'>
                    <h4 className='font-bold'>Category</h4>
                    <ul>
                      {
                        categoriesData !== null ?
                          <>
                            {
                              categoriesData.map(x => {
                                return (
                                  <li key={x._id} className='text-[14px] my-2 font-semibold hover:underline transition-all'>{x.categoryName}</li>
                                )
                              })
                            }
                          </> : <></>
                      }

                    </ul>
                  </div>
                  {/* <div className='filter-box mb-5'>
                    <h4 className='font-bold'>Hightlight</h4>
                    <ul>
                      <li className='text-[14px] my-2 font-semibold lowercase hover:underline transition-all'>Best Seller</li>
                      <li className='text-[14px] my-2 font-semibold lowercase hover:underline transition-all'>New Arrivals</li>
                      <li className='text-[14px] my-2 font-semibold lowercase hover:underline transition-all'>Sale</li>
                      <li className='text-[14px] my-2 font-semibold lowercase hover:underline transition-all'>Hot Items</li>
                    </ul>
                  </div> */}
                </div>
                <div className='product-list columns-4 w-[80%]'>
                  {
                    products.map(x => {
                      return (
                        <div className='mb-5' key={x._id}>
                          <Card data={x} />
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            </div>
          </div >
      }

    </>
  )
}

export default Category