type MenuDateObject = {
    name: string
    path: string
    icon: string
}

type MenuDataType = MenuDateObject[];

import {BsFillHouseFill, BsListUl, BsFillHospitalFill, BsFillPersonFill, BsFillPeopleFill} from 'react-icons/bs'
import { FiLogOut } from "react-icons/fi";
import { IoMedical } from "react-icons/io5";



const size = 21

export const userMenu = [
    {
        name: 'Home',
        path: '/',
        icon: <BsFillHouseFill  size={size}/>
    },
    {
        name: 'Appointments',
        path: '/appointments',
        icon: <BsListUl  size={size}/>
    },
    {
        name: 'Apply Doctor',
        path: '/apply-doctor',
        icon: <BsFillHospitalFill  size={size}/>
    },
    {
        name: 'Profile',
        path: '/profile',
        icon: <BsFillPersonFill size={size}/>
    },
    {
        name: 'Logout',
        path: '/logout',
        icon: <FiLogOut size={size}/>
    }
]

export const AdminMenu = [
    {
        name: 'Home',
        path: '/',
        icon: <BsFillHouseFill  size={size}/>
    },
    {
        name: 'Doctors',
        path: '/doctors',
        icon: <IoMedical  size={size}/>
    },
    {
        name: 'Users',
        path: '/profile-doctor',
        icon: <BsFillPeopleFill  size={size}/>
    },
    {
        name: 'Profile',
        path: '/profile',
        icon: <BsFillPersonFill  size={size}/>
    },
    {
        name: 'Logout',
        path: '/logout',
        icon: <FiLogOut size={size}/>
    }
]