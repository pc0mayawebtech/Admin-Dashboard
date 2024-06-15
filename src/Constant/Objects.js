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
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoAccessibilitySharp } from "react-icons/io5";
import { FaPaypal } from "react-icons/fa";
import { LiaCcVisa } from "react-icons/lia";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";



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

export const orderData = [
    {
        Customer: "Alice Smith",
        url:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.psychologytoday.com%2Fintl%2Fblog%2Fliving-single%2F201608%2Fevery-stereotype-single-people-debunked-science&psig=AOvVaw1BfGIhrsAthQiPfk4gKpvY&ust=1718519215028000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiE6q3-3IYDFQAAAAAdAAAAABAE',
        Product: "Laptop",
        UserID: "alice123",
        OrderedPlaced: "2024-06-14",
        Amount: 1299.99,
        PaymentStatus: "Paid",
        OrderStatus: "Shipped",
       icon: <IoCheckmarkCircleOutline />,
        colourKey: "#00cc66"
    },
    {
        Customer: "Bob Johnson",
        url:'https://www.google.com/imgres?q=images%20single%20people&imgurl=https%3A%2F%2Fcdn2.psychologytoday.com%2Fassets%2Fstyles%2Fmanual_crop_1_91_1_1528x800%2Fpublic%2Ffield_blog_entry_images%2F2017-09%2Fshutterstock_533152165.jpg%3Fitok%3Dk2T_GUT6&imgrefurl=https%3A%2F%2Fwww.psychologytoday.com%2Fus%2Fblog%2Fliving-single%2F201708%2Fthe-emotional-life-single-people&docid=AwgkwGQDd-U1LM&tbnid=fOxwKc18yQgJsM&vet=12ahUKEwjYxLSL_dyGAxWySGwGHWZSAYkQM3oECBoQAA..i&w=1528&h=800&hcb=2&ved=2ahUKEwjYxLSL_dyGAxWySGwGHWZSAYkQM3oECBoQAA',
        Product: "Headphones",
        UserID: "bob456",
        OrderedPlaced: "2024-06-15",
        Amount: 99.99,
        PaymentStatus: "Pending",
        OrderStatus: "Processing",
        icon: <IoAccessibilitySharp />,
        colourKey: "#ff9933"
    },
    {
        Customer: "Eve Williams",
        url:'https://www.google.com/imgres?q=images%20single%20people&imgurl=https%3A%2F%2Fcdn2.psychologytoday.com%2Fassets%2Fstyles%2Fmanual_crop_1_91_1_1528x800%2Fpublic%2Ffield_blog_entry_images%2F2017-09%2Fshutterstock_533152165.jpg%3Fitok%3Dk2T_GUT6&imgrefurl=https%3A%2F%2Fwww.psychologytoday.com%2Fus%2Fblog%2Fliving-single%2F201708%2Fthe-emotional-life-single-people&docid=AwgkwGQDd-U1LM&tbnid=fOxwKc18yQgJsM&vet=12ahUKEwjYxLSL_dyGAxWySGwGHWZSAYkQM3oECBoQAA..i&w=1528&h=800&hcb=2&ved=2ahUKEwjYxLSL_dyGAxWySGwGHWZSAYkQM3oECBoQAA',
        Product: "Smartwatch",
        UserID: "eve789",
        OrderedPlaced: "2024-06-14",
        Amount: 199.99,
        PaymentStatus: "Failed",
        icon: <IoCloseCircleOutline />,
        OrderStatus: "Failed",
        colourKey: "#3366ff"
    }
];







export const paymentDetails = [
    {
        title: "Visa Card",
        icon:<LiaCcVisa />,
        color:'#F87957',
        details: {
            laptopOrdered: "MacBook Pro",
            id: "visa123",
            amount: 2399.99
        }
    },
    {
        title: "PayPal",
        icon:<FaPaypal />,
        color:'#FFAE1F',
        details: {
            laptopOrdered: "Dell XPS 13",
            id: "paypal456",
            amount: 1499.99
        }
    },
    {
        title: "MasterCard",
        icon:<FaCcMastercard />,
        color:'#00CC66',
        details: {
            laptopOrdered: "HP Spectre x360",
            id: "master789",
            amount: 1799.99
        }

    },
    {
        title: "American Express",
        icon:<SiAmericanexpress />,
        color:'#F87957',
        details: {
            laptopOrdered: "Lenovo ThinkPad ",
            id: "amex012",
            amount: 1999.99
        }
    },
    {
        title: "Visa Card",
        icon:<LiaCcVisa />,
        color:'#F87957',
        details: {
            laptopOrdered: "MacBook Pro",
            id: "visa123",
            amount: 2399.99
        }
    },
    {
        title: "PayPal",
        icon:<FaPaypal />,
        color:'#00CC66',
        details: {
            laptopOrdered: "Dell XPS 13",
            id: "paypal456",
            amount: 1499.99
        }
    },
    {
        title: "MasterCard",
        icon:<FaCcMastercard />,
        color:'#3688FA',
        details: {
            laptopOrdered: "HP Spectre x360",
            id: "master789",
            amount: 1799.99
        }

    },
    {
        title: "American Express",
        icon:<SiAmericanexpress />,
        color:'#F87957',
        details: {
            laptopOrdered: "Lenovo ThinkPad ",
            id: "amex012",
            amount: 1999.99
        }
    }
];