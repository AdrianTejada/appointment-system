import React from 'react'
import { Cont, Content, Text } from './styles';

import { MenuList, MenuItem, ListItemIcon, Paper } from '@mui/material';
import {BsFillHouseFill} from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom';

import { MenuData } from '../../data/data';
import excludeVariablesFromRoot from '@mui/material/styles/excludeVariablesFromRoot';

type LayoutProps = {
    children: React.ReactNode
}


const Layout = ({children}: LayoutProps) => {

  const location = useLocation()
  
  return (
    <Cont>
        <Paper style={{backgroundColor: '#41AF89'}}>
          System
          <MenuList>
            {MenuData.map((item)=>{

              let color = {color : 'white'}
              let bg = {backgroundColor : 'inherit', height: '50px'}
              
              if (location.pathname === item.path) {
                color = {color: '#41AF89'}
                bg = {backgroundColor : '#fff', height: '50px'}
              }

              return<Link style={{textDecoration: 'none',}} to={item.path}>
              <MenuItem style={bg}>
                <ListItemIcon style={color}>
                  {item.icon}
                </ListItemIcon>
                <Text color={color.color}>
                  {item.name}
                </Text>
              </MenuItem>
            </Link>
            })}
          </MenuList>
        </Paper>
        <Content>
            {children}
        </Content>
    </Cont>
  )
}

export default Layout