"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";


interface User {
    picture: {
        large: string;
    };
    name: {
        first: string;
        last: string;
    };
    location:{
        city:string;
    }
}

const Swipers = ({Users}:{Users: User[]  | undefined}) => {
    console.log(Users)
    return (
        
        <div>
            <div className="w-full bg-gray-100 p-5">
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
                    {Users.map((user, index) => (
                        <SwiperSlide className="p-5 " key={index}>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <Image
                                    src={user.picture.large}
                                    alt="Shoes"
                                    width={200}
                                    height={300}    
                                    className=" rounded-full"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{user.name?.first} {user.name?.last}</h2>
                                <h2>{user.location?.city}</h2>
                                <p>
                                    {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque!`}
                                </p>
                                <div className="card-actions justify-end">
                                    <Link href={`/user/${index}`} className="w-full">
                                    <button className="btn btn-primary w-full">
                                        View Profile
                                    </button>
                                     </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Swipers;
