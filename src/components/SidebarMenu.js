import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarMenu = [
    {
        title: 'Project',
        path: '/project',
        icon: <AiIcons.AiFillProject/>,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/setting',
        icon: <AiIcons.AiFillSetting/>,
        cName: 'nav-text'
    },
]