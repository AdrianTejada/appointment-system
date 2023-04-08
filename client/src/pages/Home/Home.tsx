import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Layout from '../../components/Layout';
import styled from '@emotion/styled';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cont = styled.div`
    width:100%;
    height: 100%;
    padding: 20px;
`

const Home = () => {
    const [doctors, setDoctors] = useState([] as any [])
    const navigate = useNavigate()
    

    const getAllDoctors = async () => {
        try {
            const res = await axios.get(
                'http://localhost:8080/api/v1/user/getAllDoctors',
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')?.replace(/['"]+/g, "")}`
                    }
                }    
            )
            if (res.data.success) {
                setDoctors(res.data.data)
            }
            else (
                console.log(res.data)
            )
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if (doctors.length === 0) {
            getAllDoctors();
        }
    })


    return (
        <Layout>
            <Cont onClick={()=>console.log(doctors)}>
                {doctors && doctors.map((doctor)=><Card 
                        key={doctor._id}
                        sx={{maxWidth: '300px', padding: '20px'}}
                        onClick={()=>navigate(`/doctor/book-appointment/${doctor._id}`)}
                    >
                        <h4>Dr. {doctor.firstName} {doctor.lastName}</h4>
                        <p>Specialization: {doctor.specialization}</p>
                        <p>Experience {doctor.experience}</p>
                        <p>FPC {doctor.feesPerConsultation}</p>
                        <p>{doctor.timings[0]} - {doctor.timings[1]}</p>
                </Card>)}
            </Cont>
        </Layout>
    )
}

export default Home;