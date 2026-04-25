import React from "react";
import { IoIosSearch } from "react-icons/io";

const PageHeadrs = ({ title }: { title: string }) => {
    return (
        <header className=" p-4 flex flex-wrap justify-between items-center shadow">
            <div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-gray-600">
                    Browse our global talent pool, find subject matter experts,
                    and connect with
                </p>
                <p className="text-gray-600">
                    colleagues across all departments.
                </p>
            </div>
            <div className="search  w-1/3 relative ">
                <input
                    className="w-[208px] md:w-[400px]   p-2 pl-7 border border-gray-300 rounded-md"
                    type="text"
                    placeholder="Search team members..."
                />
                <IoIosSearch className="text-gray-500 absolute top-3 left-2  " />
            </div>
        </header>
    );
};

export default PageHeadrs;
