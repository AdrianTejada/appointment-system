import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Layout from '../../components/Layout';
import styled from '@emotion/styled';

const Cont = styled.div`
    width:100%;
    height: 100%;
    padding: 20px;
`



const Home = () => {
    const [doctors, setDoctors] = useState([])

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
                home
            </Cont>
        </Layout>
    )
}

export default Home;