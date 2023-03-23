import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button} from '@mui/material'
import { Credentials } from './types';
import { FormCont } from '../Register/styles';

const Login = () => {
    const [credentials, setCredentials] = useState({name:"", email:"", password: ""} as Credentials)

    return (
            <FormCont
                onSubmit={()=>console.log(credentials)}
            >
            <h1>
                Login
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
            <p>Don't have an account? Register <Link to='/register'>here.</Link></p>
        </FormCont>

    )
}

export default Login;
