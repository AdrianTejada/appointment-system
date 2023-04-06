import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import { Tabs, Tab, Button} from '@mui/material';
import { Cont, TabPanel, ButtonCont, NotificatonList } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Notifications = () => {
    const [value, setValue] = useState(0);
    const {user} = useSelector((state: RootState) => state.user)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
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
                        <Button onClick={()=>console.log(user)}>
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