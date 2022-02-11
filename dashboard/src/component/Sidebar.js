import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from 'react-icons/ri' ;





export const Sidebar =[

  {
    title: 'Home',
    path: '/' ,
    icon:<AiIcons.AiFillHome />,
    iconClosed:<RiIcons.RiArrowDownSFill />,
    iconOpened : <RiIcons.RiArrowUpSFill />,
    cName: 'nav-text',
    subNav: [
      {
        title: 'Users',
        path: '/home/users' ,
        icon:<IoIcons.IoIosPaper />,
      },
      {
        title: 'Client',
        path: '/home/client' ,
        icon:<IoIcons.IoIosPaper />,
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports' ,
    icon:<IoIcons.IoIosPaper />,
    iconClosed:<RiIcons.RiArrowDownSFill />,
    iconOpened : <RiIcons.RiArrowUpSFill />,
    cName: 'nav-text',
    subNav: [
      {
        title: 'Report 1',
        path: '/reports/report1' ,
        icon:<IoIcons.IoIosPaper />,
      },
      {
        title: 'Report 2',
        path: '/reports/report2' ,
        icon:<IoIcons.IoIosPaper />,
      }
    ]
  },
  {
    title: 'Products',
    path: '/products' ,
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team' ,
    icon:<IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages' ,
    icon:<FaIcons.FaEnvelopeOpenText/>,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support' ,
    icon:<IoIcons.IoMdHelpCircle/>,
    cName: 'nav-text'
  },
]
 


