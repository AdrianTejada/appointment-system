import styled from '@emotion/styled';
import { TabPanelProps, NotificationProps, NotificationType } from './types';
import { Card } from '@mui/material';

export const Cont = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const ButtonCont = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`
  
export function TabPanel(props: TabPanelProps) {
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



export const NotificatonList = <Item extends NotificationType>({data}: NotificationProps<Item>) => {
  return (<>
    {data.map((item) => <Card key={item.message} raised={false}>
        {item.message}
    </Card>)}
  </>)
}