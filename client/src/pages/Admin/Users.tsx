import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../../redux/features/alertSlice'
// import { RootState } from '../../redux/store'

const Users = () => {
    const [users , setUsers] = useState([])
    const dispatch = useDispatch()

    const getUsers = async () => {
        // dispatch(showLoading())
        try {
            const res = await axios.get(
                'http://localhost:8080/api/v1/admin/getAllUsers',
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')?.replace(/['"]+/g, "")}`
                    }
                }
            )    
            if (res.data.success) {
                setUsers(res.data.data)
            }
            else {
                console.log(res.data)
            }
            // dispatch(hideLoading())
        } catch (error) {
            console.log(error)
            // dispatch(hideLoading())
        }
    }

    useEffect(()=>{
        if (users.length=== 0) {
            getUsers();
        }
    })

    return (
        <Layout>
            <div  onClick={()=>console.log(users)}>
                Users
            </div>
        </Layout>
    )
}

export default Users