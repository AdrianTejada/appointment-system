import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Cont = styled.div`
    width:100%;
    height: 100%;
    padding: 20px;
`

const BookingPage = () => {
    const params = useParams()
    const [doctor, setDoctor] = useState({} as any)
    
    const getDoctorInfo = async () => {
        try {
            const res = await axios.post(
                'http://localhost:8080/api/v1/doctor/getDoctorById',
                {doctorId: params.doctorId},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')?.replace(/['"]+/g, "")}`
                    }
                }   
            )
            if (res.data.success) {
                console.log(res.data)
                setDoctor(res.data.data)
            } else {
                console.log(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if (!doctor.firstName) {
            getDoctorInfo();
        }
    })

    return (
        <Layout>
            <Cont>
                {doctor.firstName}
            </Cont>
        </Layout>
    )
}

export default BookingPage