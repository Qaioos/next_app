
import { IoIosSearch } from "react-icons/io";
import SearchBar from "./SearchOfUsers";

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
                
                <SearchBar />
            </div>
        </header>
    );
};

export default PageHeadrs;
