"use client";

import {Navigation, Keyboard, Mousewheel, Pagination } from "swiper/modules";
import {Swiper} from "swiper/react";
import { SwiperSlide } from "swiper/react";

const UserSkeleton = () => {
    return (
        <div>
            <Swiper
                spaceBetween={200}
                slidesPerView={1}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper "
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {Array.from({ length: 5 }).map((_, index) => (
                    <SwiperSlide className="p-5 " key={index}>
                        <div className="card bg-base-100 w-96 shadow-sm animate-pulse">
                            <figure>
                                <div className="bg-gray-300 rounded-full w-24 h-24 mx-auto mb-4"></div>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title bg-gray-300 h-6 w-32 mb-2"></h2>
                                <h2 className="card-title bg-gray-300 h-6 w-32 mb-2"></h2>
                                <h2 className="bg-gray-300 h-4 w-24"></h2>
                                <div className="card-actions justify-end mt-4">
                                    <button className="btn btn-primary w-full opacity-50 cursor-not-allowed" disabled>
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default UserSkeleton;
