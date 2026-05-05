"use client";

import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

import { userArry } from "../../../FetchData/DataUsers";
import Link from "next/link";
export default function SearchBar() {
    const [query, setQuery] = useState<string | undefined>("");
    const [suggestions, setSuggestions] = useState<(string | undefined)[]>([]);

    const teamMembers = userArry;

    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 0) {
            // Filter team members based on the search query 
            const filtered : (string | undefined)[] = teamMembers.filter((member) =>
                member?.toLowerCase().includes(value.toLowerCase()),
            );
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            
            <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                    <IoIosSearch className="text-gray-500 absolute top-3 left-2  " />
                </span>
                <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search team members..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>


            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {suggestions.map((name, index) => (
                        <Link key={index} href={`/user/${userArry.indexOf(name)}`} >
                        <li
                            onClick={() => {
                                setQuery(name);
                                setSuggestions([]);
                            }}
                            className="px-4  py-2 cursor-pointer hover:bg-blue-50 text-gray-700 border-b last:border-b-0"
                        >
                            {name}
                        </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
}
