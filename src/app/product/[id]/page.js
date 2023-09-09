"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import { FreeMode, Thumbs, Mousewheel, Pagination } from "swiper/modules";
import Banner from "@/components/banner";
import Image from "next/image";
import MiddleTitle from "@/components/title/middleTitle";
import { addProduct } from "../../../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "@/app/loading";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function ProductDetail() {

  useEffect(() => {
    if (true) {
      getPorduct();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const dispatch = useDispatch();

  const params = useParams();

  const [product, setproduct] = useState(null);
  const quantity = useSelector((state) => state.cart.quantity)


  async function getPorduct() {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL + "/product/" + params.id}`
      );

      if (res.status === 200) {
        setproduct(res.data.product);
      }
    } catch (error) {
      toast.error(error);
    }
  }

  function handleProdcut(product) {
    dispatch(addProduct({
      _id: product._id,
      productName: product.productName,
      img: product.img,
      price: product.price,
      quantity: 1
    }))
    toast.success(`${product.productName} Add Bag `)
  }

  return (
    <div>
      {product === null ? (
        <Loading />
      ) : (
        <>
          <Banner patch={product.categories} />
          <div className="container">
            <div className="flex max-sm:flex-col max-sm:px-3 gap-20 my-16">
              <div className="w-fit h-[590px] max-sm:w-[100%] max-sm:h-[435px] flex">
                <Swiper
                  direction={"vertical"}
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  modules={[FreeMode, Thumbs]}
                >
                  <SwiperSlide className="relative !w-[80px] !h-[80px]">
                    <Image
                      src={`${'/images/' + product.img}`}
                      alt={""}
                      sizes="100%"
                      fill
                    />
                  </SwiperSlide>

                </Swiper>
                <Swiper
                  direction={"vertical"}
                  loop={true}
                  spaceBetween={10}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Thumbs, Mousewheel, Pagination]}
                  mousewheel={true}
                  pagination={{ clickable: true }}
                  className="w-full h-full !pl-5"
                >
                  <SwiperSlide className="relative !w-[500px] !h-[500px] max-sm:!h-[500px]">
                    <Image src={`${'/images/' + product.img}`} alt={""} sizes="100%" fill />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="flex flex-col justify-between w-[40%] max-sm:w-[100%]">
                <div className=" flex items-center gap-5">
                  <span className="line-through">
                    $ {product.price + product.price * 0.2}
                  </span>{" "}
                  <span className="font-bold">$ {product.price}</span>{" "}
                  <span className="bg-secondary py-1 px-3 rounded-md text-white">
                    20%
                  </span>
                </div>
                <MiddleTitle classStyle={"text-[28px] "}>
                  {product.productName}
                </MiddleTitle>
                <div className="flex items-center">
                  <span className="pr-3 font-bold text-gray-700">4.5</span>
                  <div className="flex flex-row justify-start gap-2">
                    <BsStarFill color="gray" size={12} />
                    <BsStarFill color="gray" size={12} />
                    <BsStarHalf color="gray" size={12} />
                    <BsStar color="gray" size={12} />
                  </div>
                </div>
                <p className="my-5">{product.description}</p>
                <p className="my-5">
                  Size: <span className="font-bold px-1">{product.size}</span>
                </p>
                <div className=" flex items-center gap-3">
                  {/* <form className="flex items-center bg-white px-2 py-1 rounded-sm w-fit">
                    <AiOutlineMinus className='hover:text-red-600' onClick={() => dispatch(quantityDecrement(1))} />
                    <input type="number" className='w-[40px] text-center' value={quantity} disabled />
                    <AiOutlinePlus className='hover:text-red-600' onClick={() => dispatch(quantityIncrement(1))} />
                  </form> */}
                  <p>
                    <span className="px-1 font-bold">Price:</span> $ {product.price}
                  </p>
                </div>
                <button
                  onClick={() => handleProdcut(product)}
                  className="my-5 bg-secondary px-5 py-2 rounded-sm text-white hover:bg-opacity-90 transition-all"
                >
                  Add To Bag
                </button>

                <div className="flex flex-col gap-2 border-t border-gray-400 pt-3">
                  <p className="text-[14px]">
                    <span className="px-1 font-bold">Sku:</span> SF09281
                  </p>
                  <p className="text-[14px]">
                    <span className="px-1 font-bold">Categories:</span>
                    {product.categories}
                  </p>
                  <p className="text-[14px]">
                    <span className="px-1 font-bold">Brand:</span> {product.brand}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
