import React from 'react'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Icon from '@mui/material/Icon'

const DrawerMenu = ({ drawer, setDrawer }) => {
  const drawerOpen = Boolean(drawer)

  const menuList = [
    {
      title: 'My Store',
      link: '/',
      icon: 'key',
    },
    {
      title: 'Setting',
      link: '/setting',
      icon: 'settings',
    },
  ]

  const menuRender = menuList.map((item) => {
    return (
      <a href={item.link} key={item.title}>
        <ListItem>
          <ListItemButton onClick={() => setDrawer(false)}>
            <ListItemIcon>
              <Icon className='text-primary'>{item.icon}</Icon>
            </ListItemIcon>

            <ListItemText className='text-primary'>{item.title}</ListItemText>
          </ListItemButton>
        </ListItem>
      </a>
    )
  })
  return (
    <div>
      {' '}
      <Drawer open={drawerOpen} variant='temporary'>
        <Box width={300}>
          <List>
            <ListItem>
              <ListItemButton onClick={() => setDrawer(false)}>
                <ListItemIcon>
                  <MenuIcon />
                </ListItemIcon>
                <ListItemText>MY PASSWORD</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider light />
          <List>{menuRender}</List>
        </Box>
      </Drawer>
    </div>
  )
}

export default DrawerMenu
