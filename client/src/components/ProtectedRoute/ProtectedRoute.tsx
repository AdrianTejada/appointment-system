import React, {useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import axios from 'axios'
import { setUser } from '../../redux/features/userSlice'
import { showLoading, hideLoading } from '../../redux/features/alertSlice'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store'

type ProtectedRouteProps = {
    children: React.ReactNode
}



const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const {user} = useSelector((state: RootState) => state.user)

    const getUser = async() => {
        dispatch(showLoading())
        try {
            const res = await axios.post('http://localhost:8080/api/v1/user/getUserData', {} , {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')?.replace(/['"]+/g, "")}`
                }
            })
            if (res.data.success) {
                const data = {
                    name: res.data.name,
                    email: res.data.email
                }
                dispatch(setUser(data))
            } else {
                console.log(res.data)
            }
        } catch (error) {
            console.log(error)
        }
        dispatch(hideLoading())
    }

    useEffect(()=>{
        if (user.name.length === 0) {
            getUser()
        }
    })


    if (typeof token === 'string') {
        return <>{children}</>
    } else {
        return <Navigate to="/login"/>
    }
}

export default ProtectedRoute