import React from 'react'
import {MdOutlineDashboard,MdOutlineIndeterminateCheckBox,MdOutlineEmail,MdOutlineChatBubbleOutline} from 'react-icons/md'
import {HiOutlineUser} from 'react-icons/hi'
import {BsLayoutThreeColumns} from 'react-icons/bs'

export const SidebarData = [
    {
        title: 'Users',
        path: '/contact',
        icon: <HiOutlineUser />,
    },
    {
        title: 'Tasks',
        path: '/task',
        icon: <MdOutlineIndeterminateCheckBox/>,
    },
    {
        title: 'Email',
        path: '/email',
        icon: <MdOutlineEmail />,
    },
    {
        title: 'Dashboard',
        path: '/',
        icon: <MdOutlineDashboard />,
    },
    {
        title: 'Chat',
        path: '/chat',
        icon: <MdOutlineChatBubbleOutline/>,
    },
    {
        title: 'Deals',
        path: '/deal',
        icon: <BsLayoutThreeColumns />,
    },
]
