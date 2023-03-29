import React, {useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import axios from 'axios'
import { setUser } from '../../redux/features/userSlice'
import { showLoading, hideLoading } from '../../redux/features/alertSlice'

type ProtectedRouteProps = {
    children: React.ReactNode
}



const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')

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
                    name: res.data.email,
                    email: res.data.email
                }
                dispatch(setUser(data))
            } else {
                console.log(res.data)
            }
            dispatch(hideLoading())
        } catch (error) {
            console.log(error)
            dispatch(hideLoading())
        }
    }

    useEffect(()=>{
        getUser()
    })


    if (typeof token === 'string') {
        return <>{children}</>
    } else {
        return <Navigate to="/login"/>
    }
}

export default ProtectedRoute