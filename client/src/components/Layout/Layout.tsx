import React from 'react'
import { Cont, Content, Text, Header, ChildrenCont, SideBar } from './styles';
import { MenuList, MenuItem, ListItemIcon } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { MenuData } from '../../data/data';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

type LayoutProps = {
    children: React.ReactNode
}


const Layout = ({children}: LayoutProps) => {
  const location = useLocation()
  const {user} = useSelector((state: RootState)=> state.user)

  return (
    <Cont>
        <SideBar elevation={7}>
          System
          <MenuList>
            {MenuData.map((item)=>{
              let color = {color : 'white'}
              let bg = {backgroundColor : 'inherit', height: '50px'}
              if (location.pathname === item.path) {
                color = {color: '#41AF89'}
                bg = {backgroundColor : '#fff', height: '50px'}
              }
              return (
                <Link style={{textDecoration: 'none'}} to={item.path}>
                  <MenuItem style={bg}>
                    <ListItemIcon style={color}>
                      {item.icon}
                    </ListItemIcon>
                    <Text color={color.color}>
                      {item.name}
                    </Text>
                  </MenuItem>
                </Link>
              ) 
            })}
          </MenuList>
        </SideBar>
        <Content>
          <Header elevation={7}>
            Hello, {user.name}
          </Header>
          <ChildrenCont>
            {children}
          </ChildrenCont>
        </Content>
    </Cont>
  )
}

export default Layout