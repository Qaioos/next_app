

import { AiOutlineInsertRowAbove } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import PageHeadrs from "./Components/Shared/PageHeader/PageHeadrs";
import { MdSort } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import Swipers from "./Components/Swiper/Swiper";


 const  Home = async () =>{
  const res = await fetch("https://randomuser.me/api/?results=10");
  const data = await res.json();

    return (
        <>
            <PageHeadrs title="Team Directory" />
            <main>
                <div className="flex justify-between items-center m-2">
                    <div className="flex items-center  m-1 px-1 ">
                        <IoFilter />
                        <p className="mr-3">Filter</p>
                        <MdSort />
                        <p className="mx-1">Sort by: Name</p>
                    </div>

                    <div className="flex">
                        <AiOutlineProduct className="mx-1 w-6.5 h-6.5 text-blue-700" />
                        <AiOutlineInsertRowAbove className="mx-1 w-6.5 h-6.5" />
                    </div>
                </div>
                <hr />

                <Swipers Users={data.results}/>

                <hr />
                <div className="flex align-middle justify-between items-center flex-row p-1 ">
                    <p className="text-center my-15">
                        Showing 10 of 10 results
                    </p>
                    <div className="flex">
                        <button disabled className="btn  opacity-50 disabled:cursor-not-allowed  w-1/2 mr-2">
                            Previous
                        </button> 
                        <button className="btn  w-1/2 mr">
                            Next
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Home