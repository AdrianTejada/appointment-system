import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Card } from '@mui/material'
import { DatePicker, TimePicker } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import dayjs from 'dayjs'

const Cont = styled.div`
    width:100%;
    height: 100%;
    padding: 20px;
`

const BookingPage = () => {
    const params = useParams()
    const [doctor, setDoctor] = useState({}as any)
    const [date, setDate] = useState<any>();
    const [time, setTime] =  useState<any>();
    const [isAvailable, setisAvailable] = useState();
    const {user} = useSelector((state: RootState)=> state.user)

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
                // console.log(res.data)
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
        setDate(dayjs(value).format("DD-MM-YY"))
    }

    const handleTimingsChange = (value: any) => {
        setTime(dayjs(value).format('HH:mm'));
    }

    const handleBooking = async () => {
        try {
               const res = await axios.post('http://localhost:8080/api/v1/user/bookAppointment',
                    {
                        doctorId : params.doctorId,
                        userId: user._id,
                        doctorInfo: doctor,
                        date,
                        time,
                        userInfo: user
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')?.replace(/['"]+/g, "")}`
                        }
                    }
               )
               if (res.data.success) {
                console.log(res.data)
               } else {
                console.log(res.data)
               }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Layout>
            <Cont>
                {doctor && (
                    <Card sx={{padding: '20px', maxWidth: '400px'}}>
                        <h4>Dr. {doctor.firstName} {doctor.lastName}</h4>
                        <p>Fee: {doctor.feesPerConsultation}</p>
                        <p>{doctor.timings[0]} - {doctor.timings[1]}</p>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <DatePicker format="DD-MM-YY" onChange={(value)=>handleDateChange(value)}/>
                            <TimePicker format='HH:mm' onChange={(value)=>handleTimingsChange(value)}/>
                            <Button onClick={()=>console.log(date)}>
                                Check Availability
                            </Button>
                            <Button onClick={()=>handleBooking()}>
                                Book
                            </Button>
                        </div>
                    </Card>
                )}
            </Cont>
        </Layout>
    )
}

export default BookingPage