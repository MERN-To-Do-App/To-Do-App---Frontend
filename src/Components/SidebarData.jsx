import React from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
 const SidebarData = [
  {
    title: 'My Day',
    path: '/todo',
    icon: <LightModeOutlinedIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Important',
    path: '/important',
    icon: <StarBorderPurple500OutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Planned',
    path: '/planned',
    icon: <CalendarMonthOutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Assigned to me',
    path: '/tome',
    icon: <PersonOutlineOutlinedIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Task',
    path: '/task',
    icon: <HomeOutlinedIcon />,
    cName: 'nav-text'
  }
 ];

export default SidebarData