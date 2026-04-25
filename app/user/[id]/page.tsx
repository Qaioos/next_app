import { getData } from "@/app/FetchData/DataUsers";
import Image from "next/image";

// React Icons
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Location from "@/app/Components/Location/Location";

interface Props {
    params: Promise<{ id: string }>;
}
interface User {
    picture: {
        large: string |StaticImport |undefined;
    };
    name: {
        first: string;
        last: string;
    };
    location: {
        city: string;
        coordinates: {
            latitude: string;
            longitude: string;
        };
    };
    email: string;
    phone: string;
    login: {
        username: string;
    };
}
const page = async ({ params }: Props) => {
    const { id } = await params;

    const data = (await getData()) as User[] | undefined;

    const userIndex: number = Number(id);

    console.log(data);

    return (
        <div className="p-4 m-2 bg-gray-200">
            <article className="flex flex-col gap-5">
                <div>
                    <div className="card bg-base-100 w-96 shadow-sm border-b-2 ">
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

                <div className="location card bg-base-100 w-96 shadow-sm border-b-2">
                    <div className="card-body items-center p-2">
                        <h2 className="card-title">Location</h2>
                        <p>{data?.[userIndex]?.location?.city}</p>
                    </div>
                    <div className="w-full h-40 overflow-hidden  ">
                    <Location coordinatesData={data?.[userIndex]?.location?.coordinates} />
                    </div>
                </div>
            </article>
            <main></main>
        </div>
    );
};

export default page;
