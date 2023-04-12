import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import styled from '@emotion/styled'
import moment from 'moment'

import { 
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Paper,
    Button
 } from '@mui/material'

const Cont = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`

const Appointments = () => {

    const [appointments, setAppointments] = useState([] as any[])

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
        getAppointments();
    }, [])

    return (
        <Layout>
            <Cont onClick={()=>console.log(appointments)}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Doctor
                                </TableCell>
                                <TableCell>
                                    Date
                                </TableCell>
                                <TableCell>
                                    Time
                                </TableCell>
                                <TableCell>
                                    Status
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        {appointments.map((appointment)=>(
                            <TableRow>
                                <TableCell>
                                    {appointment.doctorInfo.firstName} {appointment.doctorInfo.lastName}
                                </TableCell>
                                <TableCell>
                                    {moment(appointment.date).format('MMM DD YYYY')}
                                </TableCell>
                                <TableCell>
                                    {moment(appointment.time).format('HH:mm')}
                                </TableCell>
                                <TableCell>
                                    {appointment.status}
                                </TableCell>
                            </TableRow>
                        ))}
                    </Table>
                </TableContainer>
            </Cont>
        </Layout>
    )
}

export default Appointments