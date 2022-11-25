import React from 'react'
//import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
//import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'My Account',
        path: '/myaccount',
        icon: <BsIcons.BsFillPersonFill/>,
        cName: 'nav-text'
    },
    {
        title: 'Bank Accounts',
        path: '/bankaccounts',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Notifications',
        path: '/notifications',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    }

]
