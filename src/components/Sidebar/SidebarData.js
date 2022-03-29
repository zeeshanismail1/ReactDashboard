import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {HiOutlineUser} from 'react-icons/hi'
import {FaUsers} from 'react-icons/fa'
import {SiMicrodotblog} from 'react-icons/si'

export const SidebarData = [
    {
        title: 'Users',
        path: '/',
        icon: <HiOutlineUser />,
    },
    {
        title: 'Subscribers',
        path: '/subscribers',
        icon: <FaUsers/>,
    },
    {
        title: 'Email',
        path: '/email',
        icon: <MdOutlineEmail />,
    },
    {
        title: 'Blogs',
        path: '/blogs',
        icon: <SiMicrodotblog />,
    },
]
