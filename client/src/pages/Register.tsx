import React, {useState} from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { TextField, Button} from '@mui/material'


const FormCont = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;
    border: 1px solid lightgrey;
    padding: 40px;
    border-radius: 5px;
`;

type Credentials = {
    name: string
    email: string
    password: string
}

export const Register = () => {
    const [credentials, setCredentials] = useState({name:"", email:"", password: ""} as Credentials)

    return (
        <FormCont
            onSubmit={()=>console.log(credentials)}
        >
            <h1>
                Register Form
            </h1>
            <TextField
                variant='filled'
                label='Name'
                type='text'
                name='name'
                required
                value={credentials.name}
                onChange={(event)=>setCredentials({...credentials, name: event.target.value})}
            />
            <TextField 
                variant='filled'
                label='Email' 
                type='text' 
                name='email' 
                required
                value={credentials.email}
                onChange={(event)=>setCredentials({...credentials, email: event.target.value})}
            />
            <TextField 
                variant='filled' 
                label='Password' 
                type='text' 
                name='password' 
                required
                value={credentials.password}
                onChange={(event)=>setCredentials({...credentials, password: event.target.value})}
            />
            <Button 
                variant='contained' 
                disableElevation 
                disableFocusRipple 
                disableRipple
                type='submit'
            >
                Register
            </Button>
            <p>Already a user? Login <Link to='/login'>here.</Link></p>
        </FormCont>
    )
}