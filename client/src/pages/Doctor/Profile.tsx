import React, { useEffect, useState } from 'react'
import Layout from './../../components/Layout/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import axios from 'axios';
import { TextField, Button} from '@mui/material';

import { infoTypes } from '../ApplyDoctor/types';
import { Row, FormCont, Section } from '../ApplyDoctor/styles';

import { TimePicker } from 'antd';

const Profile = () => {
    const {user} = useSelector((state: RootState) => state.user)
    const [doctor, setDoctor] = useState<any>(null)


    const getDoctorInfo = async () => {
        try {
            const res = await axios.post(
                'http://localhost:8080/api/v1/doctor/getDoctorInfo',
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
                setDoctor(res.data.data)
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

    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const res = await axios.post(
                'http://localhost:8080/api/v1/doctor/updateDoctorInfo',
                {doctor},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')?.replace(/['"]+/g, "")}`
                    }
                }
            )
            if (res.data.success) {
                setDoctor(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Layout>
            <FormCont onSubmit={(event)=>handleUpdate(event)}>
            <Section>
                <h1>Apply Doctor</h1>
                <Row>
                    <TextField
                        variant="filled"
                        label="First Name"
                        type="text"
                        name="first_name"
                        required
                        value={doctor?.firstName}
                        onChange={(firstName)=>setDoctor({...doctor, firstName: firstName.target.value})}
                    />
                    <TextField
                        variant="filled"
                        label="Last Name"
                        type="text"
                        name="last_name"
                        required
                        value={doctor?.lastName}
                        onChange={(lastName)=>setDoctor({...doctor, lastName: lastName.target.value})}
                    />
                    <TextField
                        variant="filled"
                        label="Phone Number"
                        type="text"
                        name="phone"
                        required
                        value={doctor?.phone}
                        onChange={(phone)=>setDoctor({...doctor, phone: phone.target.value})}
                    />
                </Row>
                <Row>
                    <TextField
                        variant="filled"
                        label="Email"
                        type="text"
                        name="email"
                        required
                        value={doctor?.email}
                        onChange={(email)=>setDoctor({...doctor, email: email.target.value})}
                    />
                    <TextField
                        variant="filled"
                        label="Website"
                        type="text"
                        name="website"
                        value={doctor?.website}
                        onChange={(website)=>setDoctor({...doctor, website: website.target.value})}
                    />
                    <TextField
                        variant="filled"
                        label="Address"
                        type="text"
                        name="address"
                        required
                        value={doctor?.address}
                        onChange={(address)=>setDoctor({...doctor, address: address.target.value})}
                    />
                </Row>
            </Section>
            <Section>
                <h1>Professional Details</h1>
                <Row>
                    <TextField
                        variant="filled"
                        label="Specialization"
                        type="text"
                        name="specialization"
                        required    
                        value={doctor?.specialization}
                        onChange={(specialization)=>setDoctor({...doctor, specialization: specialization.target.value})}
                    />
                    <TextField
                        variant="filled"
                        label="Experience"
                        type="text"
                        name="experience"
                        required
                        value={doctor?.experience}
                        onChange={(experience)=>setDoctor({...doctor, experience: experience.target.value})}
                    />
                    <TextField
                        variant="filled"
                        label="Fee"
                        type="text"
                        name="fee"
                        required
                        value={doctor?.feesPerConsultation}
                        onChange={(feesPerConsultation)=>setDoctor({...doctor, feesPerConsultation: feesPerConsultation.target.value})}
                    />
            </Row>
            <TimePicker.RangePicker
                format='HH:mm'
                // value={doctor?.timings}
                onChange={(timings)=>setDoctor({...doctor, timings})}
            />
            </Section>
            <Button             
                variant="contained"
                disableElevation
                disableFocusRipple
                disableRipple
                type="submit"
            >
                Update
            </Button>
        </FormCont>
        </Layout>
    )
}

export default Profile