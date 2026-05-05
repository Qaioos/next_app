import { AiOutlineInsertRowAbove } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import PageHeadrs from "./Components/Shared/PageHeader/PageHeadrs";
import { MdSort } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import Swipers from "./Components/Swiper/Swiper";
import { Suspense } from "react";
import { getData } from "./FetchData/DataUsers";
import SwiperSkeleton from "./Components/Loading/SwiperSkeleton";
import Opacity from "./Components/Shared/motion/Opacity";
 const  Home = async () =>{

    const data = await getData();

    return (
        <>

            <Opacity>
            <PageHeadrs title="Team Directory" />
            <main>
                <div className="flex justify-between items-center m-2">
                    <div className="flex items-center  m-1 px-1 ">
                        <IoFilter />
                        <p className="mx-2">Filter</p>
                        <MdSort />
                        <p className="mx-2">Sort by:
                            <select className="bg-transparent border-none focus:outline-none">
                            <option value="Name">Name</option>
                            <option value="city">city</option>
                            </select>
                            </p>
                    </div>

                    <div className="flex">
                        <AiOutlineProduct className="mx-1 w-6.5 h-6.5 text-blue-700" />
                        <AiOutlineInsertRowAbove className="mx-1 w-6.5 h-6.5" />
                    </div>
                </div>
                
                <Suspense fallback={<SwiperSkeleton />}>
                    <Swipers Users={data} />
                </Suspense>
                <div className="flex bg-gray-100  shadow   justify-around  items-center flex-row p-1 ">
                    <p className="text-center my-5">
                        Showing 10 of 10 results
                    </p>
                    <div className="flex justify-around">
                        <button disabled className="btn  opacity-50 disabled:cursor-not-allowed  mr-2">
                            Previous
                        </button> 
                        <button className="btn">
                            Next
                        </button>
                    </div>
                </div>
            </main>
            <hr />
        </Opacity>
        </>
    );
}
export default Home