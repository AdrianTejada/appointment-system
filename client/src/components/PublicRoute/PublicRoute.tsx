import React from 'react'
import { Navigate } from 'react-router-dom'

type PublicRouteProps = {
    children: React.ReactNode
}

const PublicRoute = ({children}: PublicRouteProps): any => {
    if (localStorage.getItem('token')) {
        return <Navigate to='/' />
    } else {
        return children
    }
}

export default PublicRoute