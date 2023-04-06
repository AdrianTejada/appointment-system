import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../../redux/features/alertSlice'
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

 const Cont = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`

type DoctorData = {
    firstName: string,
    lastName: string,
    phone: string,
    status: string,
}

const Doctors = () => {
    const [doctors , setDoctors] = useState<DoctorData[] | []>([])
    const dispatch = useDispatch()

    const getUsers = async () => {
        try {
            const res = await axios.get(
                'http://localhost:8080/api/v1/admin/getAllDoctors',
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')?.replace(/['"]+/g, "")}`
                    }
                }
            )    
            if (res.data.success) {
                setDoctors(res.data.data)
            }
            else {
                console.log(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if (doctors.length === 0) {
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
                                    Status
                                </TableCell>
                                <TableCell>
                                    Phone
                                </TableCell>
                                <TableCell align='right'>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        {doctors.map((doctor)=>(
                            <TableRow>
                                <TableCell>
                                    {doctor.firstName} {doctor.lastName}
                                </TableCell>
                                <TableCell>
                                    {doctor.status}
                                </TableCell>
                                <TableCell>
                                    {doctor.phone}
                                </TableCell>
                                <TableCell align='right'>
                                    <Button sx={{margin: 0, padding: 0}}>
                                        {doctor.status === 'pending' ? 'Approve' : 'Block'}
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

export default Doctors