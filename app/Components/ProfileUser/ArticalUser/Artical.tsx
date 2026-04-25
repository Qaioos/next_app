import React from 'react'
import Location from '../../Location/Location'
import Image from 'next/image'
import { User } from "@/app/Types/Types";
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlinePhone } from 'react-icons/md';
import { TbWorldWww } from 'react-icons/tb';

const Artical = ({ data, userIndex }: { data: User[] | undefined; userIndex: number }) => {
  return (
 <article className="flex flex-col  gap-5">
                <div  className="flex flex-col gap-5  w-full ">

                    <div className="card  bg-base-100 w-full md:w-96 shadow-sm border-b-2 ">
                        <figure>
                            <Image
                                src={data?.[userIndex]?.picture.large ?? "/default-image.jpg"}
                                alt="Shoes"
                                width={100}
                                height={100}
                                className="w-1/3 mt-10"
                            />
                        </figure>
                        <div className="card-body items-center p-2">
                            <h2 className="card-title ">
                                {data?.[userIndex]?.name?.first}{" "}
                                {data?.[userIndex]?.name?.last}
                            </h2>
                            <h2>{data?.[userIndex]?.location?.city}</h2>
                            <hr className="w-full border-gray-300" />
                            <div className="card-actions p-1 flex-col w-full justify-start">
                                <p className="flex items-center gap-2">
                                    <AiOutlineMail className="text-blue-500" />
                                    {data?.[userIndex]?.email}
                                </p>
                                <p className="flex items-center gap-2">
                                    <MdOutlinePhone className="text-green-500" />
                                    {data?.[userIndex]?.phone}
                                </p>
                                <p className="flex items-center gap-2">
                                    <TbWorldWww className="text-purple-500" />
                                    {data?.[userIndex]?.login?.username}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="location card bg-base-100 w-60 md:w-96  shadow-sm border-b-2">
                    <div className="card-body items-center p-2">
                        <h2 className="card-title">Location</h2>
                        <p>{data?.[userIndex]?.location?.city}</p>
                    </div>
                    <div className="w-full h-40 overflow-hidden  ">
                    <Location coordinatesData={data?.[userIndex]?.location?.coordinates} />
                    </div>
                </div>
            </article>
  )
}

export default Artical
