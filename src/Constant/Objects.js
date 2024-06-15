import { SlHome } from "react-icons/sl";
import { IoBagOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { LuBuilding } from "react-icons/lu";
import { RiPagesLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { FaWpforms } from "react-icons/fa6";
import { CiViewTable } from "react-icons/ci";
import { MdAutoGraph } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { SiAuthentik } from "react-icons/si";
import { CiLink } from "react-icons/ci";
import { FaSalesforce } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaMobileAlt, FaLaptop, FaTabletAlt, FaCamera, FaHeadphones, FaTv, FaWatch, FaGamepad, FaKeyboard, FaMouse, FaPrint, FaLightbulb } from 'react-icons/fa';



export const navBardata = [

    {
        id:1,
        title:'Dashboards',
        button: true,
        subData: ['Analytics', 'Report'],
        logo : <SlHome />
    },
    {
        id:2,
        title:'Product',
        button: true,
        subData: ['Order History', 'Products', 'Shopping Cart', 'Billing Details', 'Customers', 'Add Product', 'Reviews'],
        logo : <IoBagOutline />
    },
    {
        id:3,
        title:'Widgets',
        button: true,
        subData: ['Analytics', 'Report'],
        logo : <IoDiamondOutline />
    },
    {
        id:4,
        title:'UI Elements',
        button: true,
        subData: ['Analytics', 'Report'],
        logo : <LuBuilding />
    },
    {
        id:5,
        title:'Pages',
        button: true,
        subData: ['Analytics', 'Report'],
        logo : <RiPagesLine />
    },
    {
        id:6,
        title:'Calender',
        button: false,
        subData: ['Analytics', 'Report'],
        logo : <SlCalender />
    },
    {
        id:7,
        title:'Forms',
        button: true,
        subData: ['Analytics', 'Report'],
        logo : <FaWpforms />
    },
    {
        id:8,
        title:'Tables',
        button: true,
        subData: ['Analytics', 'Report'],
        logo : <CiViewTable />
    },
    {
        id:9,
        title:'Graph & Maps',
        button: true,
        subData: ['Analytics', 'Report'],
        logo : <MdAutoGraph />
    },
    {
        id:10,
        title:'Layout',
        button: true,
        subData: ['Analytics', 'Report'],
        logo : <LuLayoutDashboard />
    },
    {
        id:11,
        title:'Authentication',
        button: true,
        subData: ['Analytics', 'Report'],
        logo : <SiAuthentik />
    },
    {
        id:12,
        title:'Link',
        button: false,
        subData: ['Analytics', 'Report'],
        logo : <CiLink />
    },
    

]



export const salesRevenueData = [
    {
    id:1,
    title:'Sales',
    people:'250k',
    color:'#F87957',
    icon:< FaSalesforce />,
    },
    {
        id:2,
        title:'Customers',
        people:'24M',
        color:'#3688FA',
        icon:<FaRegSmile />,
        },
        {
            id:1,
            title:'Products',
            people:'15k',
            color:'#FFAE1F',
            icon:< MdProductionQuantityLimits />,
            },
            {
                id:1,
                title:'Revenue',
                people:'180M',
                color:'#3BB45D',
                icon:<IoBagCheckOutline />,
                }
]


export const items = [
    { title: 'Mobile', icon: <SlHome />,color:'#3688FA' },
    { title: 'Laptop', icon: <FaLaptop />,color:'#3BB45D' },
    { title: 'Tablet', icon: <MdAutoGraph />,color:'#3688FA' },
    { title: 'Camera', icon: <CiViewTable /> ,color:'#3BB45D'},
    { title: 'Headphones', icon: <FaHeadphones />,color:'#FFAE1F' },
    { title: 'TV', icon: <FaTv />,color:'#3688FA' },
    { title: 'Smartwatch', icon: <SlHome />,color:'#F87957' },
    { title: 'Game Console', icon: <FaGamepad />,color:'#FFAE1F' },
    { title: 'Keyboard', icon: <FaLightbulb />,color:'#3BB45D' },
    { title: 'Mouse', icon: <SlHome />,color:'#3688FA' },
    { title: 'Printer', icon: <CiViewTable />,color:'#FFAE1F' },
    { title: 'Lightbulb', icon: <CiViewTable /> ,color:'#3688FA'},
];

