import React, {useEffect} from 'react'
import axios from 'axios';
import Layout from '../../components/Layout';

const Home = () => {
    const getUserData = async () => {
        try {
            const res = await axios.post('http://localhost:8080/api/v1/user/getUserData', {} , {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')?.replace(/['"]+/g, "")}`
                }
            })
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
        getUserData();
    })

    return (
        <Layout>
            home
        </Layout>
    )
}

export default Home;