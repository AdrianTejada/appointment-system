type MenuDateObject = {
    name: string
    path: string
    icon: string
}

type MenuDataType = MenuDateObject[];

import {BsFillHouseFill, BsListUl, BsFillHospitalFill, BsFillPersonFill} from 'react-icons/bs'


const size = 21

export const MenuData = [
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
    }
]