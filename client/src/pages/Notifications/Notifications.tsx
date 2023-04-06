import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import { Tabs, Tab} from '@mui/material';
import styled from '@emotion/styled';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
const Cont = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
  
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <>
            {children}
          </>
        )}
      </div>
    );
}

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
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
            </Cont>
        </Layout>
    )
}

export default Notifications