import React, { useEffect, useState } from 'react'
import Layout from './../../components/Layout/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import axios from 'axios';


const Profile = () => {
    const {user} = useSelector((state: RootState) => state.user)
    const [doctor, setDoctor] = useState(null)

    const getDoctorInfo = async () => {
        try {
            const res = await axios.post(
                'http://localhost:8080/api/v1/admin/getDoctorInfo',
                {
                    doctorId: user.isDoctor ? user._id : null
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')?.replace(/['"]+/g, "")}`
                    }
                } 
            )
            if (res.data.success) {
                console.log(res.data)
                setDoctor(res.data)
            }
            else {
                console.log(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if (doctor === null) {
            getDoctorInfo();
        }
    })

    return (
        <Layout>
            Profile
        </Layout>
    )
}

export default Profile