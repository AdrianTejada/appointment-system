import React from 'react'
import { Navigate } from 'react-router-dom'

type ProtectedRouteProps = {
    children: React.ReactNode
}


const ProtectedRoute = ({children}: ProtectedRouteProps): any => {
    const token = localStorage.getItem('token')
    if (typeof token === 'string') {
        return children
    } else {
        return <Navigate to="/login"/>
    }
}

export default ProtectedRoute