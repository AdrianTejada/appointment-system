import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import { Tabs, Tab, Button} from '@mui/material';
import { Cont, TabPanel, ButtonCont, NotificatonList } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { showLoading, hideLoading } from '../../redux/features/alertSlice';
import axios from 'axios';
import { setUser } from '../../redux/features/userSlice';

const Notifications = () => {
    const [value, setValue] = useState(0);
    const {user} = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleMarkRead = async () => {
        dispatch(showLoading())
        try {
            const res = await axios.post(
                'http://localhost:8080/api/v1/user/ReadNotifications',
                {userId: user._id},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')?.replace(/['"]+/g, "")}`
                    }
                }
            );
            dispatch(hideLoading())
            if (res.data.message) {
                console.log(res.data)
                dispatch(setUser(res.data.data))
            } else {
                console.log (res.data)
            }
        } catch (error) {
            console.log(error)
            dispatch(hideLoading())
        }
    };

    const handleDeleteRead = async () => {

    };

    return (
        <Layout>
            <Cont>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label='Unread'/>
                    <Tab label='Read'/>
                </Tabs>
                <TabPanel value={value} index={0}>
                    <ButtonCont>
                        <Button onClick={handleMarkRead}>
                            Mark as Read
                        </Button>
                    </ButtonCont>
                    <NotificatonList data={user.notifications}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ButtonCont>
                        <Button>
                            Delete Notifications
                        </Button>
                    </ButtonCont>
                    <NotificatonList data={user.seen_notifications}/>

                </TabPanel>
            </Cont>
        </Layout>
    )
}

export default Notifications