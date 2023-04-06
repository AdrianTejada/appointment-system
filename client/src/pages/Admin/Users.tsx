import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../../redux/features/alertSlice'
// import { RootState } from '../../redux/store'
import styled from '@emotion/styled'

import { 
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Paper,
    Button
 } from '@mui/material'

type UserData = {
    name: string,
    email: string,
}

const Cont = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`

const Users = () => {
    const [users , setUsers] = useState<UserData[] | []>([])
    const dispatch = useDispatch()

    const getUsers = async () => {
        try {
            const res = await axios.get(
                'http://localhost:8080/api/v1/admin/getAllUsers',
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')?.replace(/['"]+/g, "")}`
                    }
                }
            )    
            if (res.data.success) {
                setUsers(res.data.data)
            }
            else {
                console.log(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if (users.length === 0) {
            dispatch(showLoading());
            getUsers();
            dispatch(hideLoading());
        }
    },[])

    return (
        <Layout>
            <Cont>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Email
                                </TableCell>
                                <TableCell>
                                    Created at
                                </TableCell>
                                <TableCell align='right'>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        {users.map((user)=>(
                            <TableRow>
                                <TableCell>
                                    {user.name}
                                </TableCell>
                                <TableCell>
                                    {user.email}
                                </TableCell>
                                <TableCell>
                                </TableCell>
                                <TableCell align='right'>
                                    <Button>
                                        Block
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </Table>
                </TableContainer>
            </Cont>
        </Layout>
    )
}

export default Users