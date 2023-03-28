import React from 'react'
import { Cont, Content, SideBar } from './styles';
import { MenuData } from '../../data/data';

import { MenuList, MenuItem, ListItemIcon } from '@mui/material';
import {BsFillHouseFill} from 'react-icons/bs'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <Cont>
        <SideBar>
          <MenuList>
            {MenuData.map((item)=><MenuItem>
              <ListItemIcon>
                <BsFillHouseFill color='#fff'/>
              </ListItemIcon>
              {item.name}
            </MenuItem>)}
          </MenuList>
        </SideBar>
        <Content>
            {children}
        </Content>
    </Cont>
  )
}

export default Layout