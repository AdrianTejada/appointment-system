import React, {useState} from 'react'
import Layout from '../../components/Layout'
import { Button, TextField } from '@mui/material'

import styled from '@emotion/styled';
import { TimePicker } from 'antd';


const FormCont = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    padding: 20px;
`

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

const Section = styled.div`
    margin-bottom: 50px;
`

type infoTypes = {
    firstName: string
    lastName: string
    phone: string
    email: string
    website: string
    address: string
    specialization: string
    experience: string
    feesPerConsultation: string
    timings: any
}


const ApplyDoctor = () => {
    const [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        website: '',
        address: '',
        specialization: '',
        experience: '',
        feesPerConsultation: '',
        timings: [],
    } as infoTypes)

    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(info)
    };

    

  return (
    <Layout>
        <FormCont onSubmit={(event)=>handleSubmit(event)}>
            <Section>
                <h1>Apply Doctor</h1>
                <Row>
                    <TextField
                        variant="filled"
                        label="First Name"
                        type="text"
                        name="first_name"
                        required
                        onChange={(firstName)=>setInfo({...info, firstName: firstName.target.value})}
                        />
                    <TextField
                        variant="filled"
                        label="Last Name"
                        type="text"
                        name="last_name"
                        required
                        onChange={(lastName)=>setInfo({...info, lastName: lastName.target.value})}

                        />
                    <TextField
                        variant="filled"
                        label="Phone Number"
                        type="text"
                        name="phone"
                        required
                        onChange={(phone)=>setInfo({...info, phone: phone.target.value})}

                        />
                </Row>
                <Row>
                    <TextField
                        variant="filled"
                        label="Email"
                        type="text"
                        name="email"
                        required
                        onChange={(email)=>setInfo({...info, email: email.target.value})}
                    />
                    <TextField
                        variant="filled"
                        label="Website"
                        type="text"
                        name="website"
                        onChange={(website)=>setInfo({...info, website: website.target.value})} 
                    />
                    <TextField
                        variant="filled"
                        label="Address"
                        type="text"
                        name="address"
                        required
                        onChange={(address)=>setInfo({...info, address: address.target.value})}
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
                        onChange={(specialization)=>setInfo({...info, specialization: specialization.target.value})}

                    />
                    <TextField
                        variant="filled"
                        label="Experience"
                        type="text"
                        name="experience"
                        required
                        onChange={(experience)=>setInfo({...info, experience: experience.target.value})}

                    />
                    <TextField
                        variant="filled"
                        label="Fee"
                        type="text"
                        name="fee"
                        required
                        onChange={(feesPerConsultation)=>setInfo({...info, feesPerConsultation: feesPerConsultation.target.value})}
                    />
            </Row>
            <TimePicker.RangePicker
                format='HH:mm'
                onChange={(timings)=>setInfo({...info, timings})}
                // onChange={(timings)=>console.log(timings)}
            />
            </Section>
            <Button             
                variant="contained"
                disableElevation
                disableFocusRipple
                disableRipple
                type="submit"
            >
                Submit
            </Button>
        </FormCont>
    </Layout>
  )
}

export default ApplyDoctor