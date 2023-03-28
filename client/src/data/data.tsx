type MenuDateObject = {
    name: string
    path: string
    icon: string
}

type MenuDataType = MenuDateObject[];

import {BsFillHouseFill} from 'react-icons/bs'



export const MenuData = [
    {
        name: 'Home',
        path: '/',
        icon: BsFillHouseFill
    },
    {
        name: 'Appointments',
        path: '/appointments',
        icon: BsFillHouseFill
    },
    {
        name: 'Apply Doctor',
        path: '/apply-doctor',
        icon: BsFillHouseFill
    },
    {
        name: 'Profile',
        path: '/profile',
        icon: BsFillHouseFill
    }
]