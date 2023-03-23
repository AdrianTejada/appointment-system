import React, {useState} from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { TextField, Button} from '@mui/material'
import { FormCont } from './styles';
import { Credentials } from './types';

const Register = () => {
    const [credentials, setCredentials] = useState({name:"", email:"", password: ""} as Credentials)

    return (
        <FormCont
            onSubmit={()=>console.log(credentials)}
        >
            <h1>
                Register
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

export default Register;