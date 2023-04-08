import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Card } from '@mui/material'
import { DatePicker, TimePicker } from 'antd'
import moment from 'moment'


const Cont = styled.div`
    width:100%;
    height: 100%;
    padding: 20px;
`

const BookingPage = () => {
    const params = useParams()
    const [doctor, setDoctor] = useState({}as any)
    const [date, setDate] = useState<any>();
    const [timings, setTimings] =  useState<any>();
    const [isAvailable, setisAvailable] = useState();
    
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

    const handleDateChange = (value: any) => {
        setDate(moment(value).format("DD-MM-YY"))
    }

    const handleTimingsChange = (value: any) => {
        const time_one = value[0];
        const time_two = value[1];

        console.log(time_one, time_two)

        setTimings([moment(time_one).format('h:mm'), moment(time_two).format('h:mm')])
        // setTimings(value)
    }


    return (
        <Layout>
            <Cont>
                {doctor && (
                    <Card sx={{padding: '20px', maxWidth: '400px'}}>
                        <h4>Dr. {doctor.firstName} {doctor.lastName}</h4>
                        <p>Fee: {doctor.feesPerConsultation}</p>
                        {/* <p>{doctor.timings[0]} - {doctor.timings[1]}</p> */}
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <DatePicker format="DD-MM-YY" onChange={(value)=>handleDateChange(value)}/>
                            <TimePicker.RangePicker format='h:mm' onChange={(value)=>handleTimingsChange(value)}/>
                            <Button onClick={()=>console.log(timings)}>
                                Check Availability
                            </Button>
                        </div>
                    </Card>
                )}
            </Cont>
        </Layout>
    )
}

export default BookingPage