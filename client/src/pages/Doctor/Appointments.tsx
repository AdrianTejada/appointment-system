import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import styled from '@emotion/styled'

const Cont = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`

const DoctorAppointments = () => {
    const [appointments, setAppointments] = useState([] as any[])

    const handleGetAppointments = async () => {
        try {
            const res = await axios.get(
                'http://localhost:8080/api/v1/doctor/doctorAppointments',
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')?.replace(/['"]+/g, "")}`
                    }
                }
            )
            if (res.data.success) {
                setAppointments(res.data.data)
            } else {
                console.log(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        handleGetAppointments();
    },[])

    return (
        <Layout>
            <Cont onClick={()=>console.log(appointments)}>
                doc
            </Cont>
        </Layout>
    )
}

export default DoctorAppointments