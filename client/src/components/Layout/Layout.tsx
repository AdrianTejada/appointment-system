import React from 'react'
import { Cont, Content, Text, Header, ChildrenCont, SideBar } from './styles';
import { MenuList, MenuItem, ListItemIcon } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { userMenu, AdminMenu } from './../../data/data';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/userSlice';

type LayoutProps = {
    children: React.ReactNode
}


const Layout = ({children}: LayoutProps) => {
  const location = useLocation()
  const {user} = useSelector((state: RootState)=> state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menu = user.isAdmin ? AdminMenu : userMenu

  const handleClick = (path: string) => {
    if (path === '/logout') {
      localStorage.removeItem('token')
      dispatch(setUser({name: '', isAdmin: false, isDoctor: false}))
      navigate('/login')
    } else {
      navigate(path)
    }
  }

  return (
    <Cont>
        <SideBar elevation={7}>
          System
          <MenuList>
            {menu.map((item)=>{
              let color = {color : 'white'}
              let bg = {backgroundColor : 'inherit', height: '50px'}
              if (location.pathname === item.path) {
                color = {color: '#41AF89'}
                bg = {backgroundColor : '#fff', height: '50px'}
              }
              return (
                  <MenuItem style={bg} onClick={()=>handleClick(item.path)} key={item.name}>
                    <ListItemIcon style={color}>
                      {item.icon}
                    </ListItemIcon>
                    <Text color={color.color}>
                      {item.name}
                    </Text>
                  </MenuItem>
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