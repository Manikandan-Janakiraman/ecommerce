import product from '../assets/product.png'
import banner from '../assets/banner.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Banner = () => {
    return (    
        <>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
                loop={true}
            >

                <SwiperSlide>
                    <div
                        className="min-h-190 bg-cover bg-center grid grid-cols-1 md:grid-cols-2 px-6 md:px-20 py-10"
                        style={{ backgroundImage: `url(${banner})` }}
                    >

                        <div className="flex flex-col justify-center gap-4 text-center md:text-left order-1 md:order-2">
                            <h1 className="text-3xl md:text-5xl font-bold text-red-600">
                                Pure Devotion, <br />
                                <span className="text-black">Crafted Traditions</span>
                            </h1>

                            <p className="text-sm md:text-base text-black">
                                Bring home divine energy with our carefully crafted pooja products, <br />
                                made authentic materials, timeless traditions.
                            </p>
                        </div>


                        <div className="flex items-center justify-center mt-6 md:mt-0">
                            <img
                                src={product}
                                alt="product"
                                className="w-[220px] sm:w-[300px] md:w-[500px] rounded-2xl"
                            />
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div
                        className="min-h-190 bg-cover bg-center grid grid-cols-1 md:grid-cols-2 px-6 md:px-20 py-10"
                        style={{ backgroundImage: `url(${banner})` }}
                    >


                        <div className="flex flex-col justify-center gap-4 text-center md:text-right order-2 md:order-1">
                            <h1 className="text-3xl md:text-5xl font-bold text-red-600">
                                Sacred Products for <br />
                                <span className="text-black">Sacred Moments</span>
                            </h1>

                            <p className="text-sm md:text-base">
                                Bring home divine energy with our carefully crafted pooja products, <br />
                                made with authentic materials and timeless traditions
                            </p>
                        </div>

                        <div className="flex items-center justify-center order-2 md:order-1">
                            <img
                                src={product}
                                alt="product"
                                className="w-[220px] sm:w-[300px] md:w-[500px] rounded-2xl"
                            />
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>
        </>
    )
}
export default Banner 
