import React from 'react'
import { BiBell } from 'react-icons/bi'
import { IoIosSearch } from 'react-icons/io'
import { MdOutlineSettings } from 'react-icons/md'
import { RxAvatar } from 'react-icons/rx'

const NavAction = () => {
  return (
            <div className="flex items-center space-x-4 flex-wrap cursor-pointer">
                <div className="flex items-center space-x-4 relative">
                    <input type="text" placeholder="Search..." className="bg-gray-100 pl-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <IoIosSearch className="text-gray-500 absolute "  />
                </div>
                    <BiBell className="h-6 w-6 text-gray-500 pointer-coarse" />
                    <MdOutlineSettings className="h-6 w-6 text-gray-500" />
                    <RxAvatar className="h-6 w-6 text-gray-500" />

            </div>
  )
}

export default NavAction
