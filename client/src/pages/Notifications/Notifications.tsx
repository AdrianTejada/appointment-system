import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import { Tabs, Tab, Button} from '@mui/material';
import { Cont, TabPanel, ButtonCont } from './styles';

const Notifications = () => {
    const [value, setValue] = useState(0);

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
                        <Button>
                            Mark as Read
                        </Button>
                    </ButtonCont>
                    Notifications
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ButtonCont>
                        <Button>
                            Delete Notifications
                        </Button>
                    </ButtonCont>
                    Notifications
                </TabPanel>
            </Cont>
        </Layout>
    )
}

export default Notifications