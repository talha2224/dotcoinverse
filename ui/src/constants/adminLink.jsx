import { FaCoins, FaUser } from "react-icons/fa";
import { BiMoneyWithdraw,BiSupport } from "react-icons/bi";
import { RiLockPasswordFill, RiLuggageDepositFill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { ImCoinYen } from "react-icons/im";
import { SiRoadmapdotsh } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

const userLinks = [
    {
        id:2,
        title:"Withdraw Request",
        icon:<BiMoneyWithdraw/>,
        link:"/admin/history/withdraw"
    },
    {
        id:3,
        title:"Deposit Request",
        icon:<RiLuggageDepositFill/>,
        link:"/admin/history/deposit"    
    },
    {
        id:4,
        title:"User",
        icon:<FaUser/>,
        link:"/admin/user"
    },
    {
        id:11,
        title:"Coins",
        icon:<FaCoins />,
        link:'/admin/coin'
    },
    {
        id:5,
        title:"About",
        icon:<FcAbout/>,
        link:"/admin/about"
    },
    {
        id:7,
        title:"Coinverse Pdf",
        icon:<ImCoinYen/>,
        link:"/admin/coinverse"
    },
    {
        id:8,
        title:"Roadmap",
        icon:<SiRoadmapdotsh/>,
        link:"/admin/roadmap"
    },
    {
        id:10,
        title:"Change Password",
        icon:<RiLockPasswordFill/>,
        link:"/admin/profile"
    },
    {
        id:11,
        title:"Profile",
        icon:<CgProfile/>,
        link:"/admin/profile"
    },
    {
        id:12,
        title:"Logout",
        icon:<FiLogOut/>,
        link:"/",
    },

]

export default userLinks