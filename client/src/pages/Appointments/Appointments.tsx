import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'

import styled from '@emotion/styled'

const Cont = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`

const Appointments = () => {

    const [appointments, setAppointments] = useState([])

    const getAppointments = async () => {
        try {
            const result = await axios.get(
                'http://localhost:8080/api/v1/user/appointments',
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')?.replace(/['"]+/g, "")}`
                    }
                }
            )
            if (result.data.success) {
                setAppointments(result.data.data)
            } else {
                console.log(result.data)
            }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
        if (appointments.length === 0) {
            getAppointments();
        }
    })

    return (
        <Layout>
            <Cont onClick={()=>console.log(appointments)}>
                Appointments
            </Cont>
        </Layout>
    )
}

export default Appointments