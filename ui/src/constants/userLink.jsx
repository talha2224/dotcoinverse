import { GrTransaction } from "react-icons/gr";
import { BiMoneyWithdraw,BiSupport } from "react-icons/bi";
import { RiLockPasswordFill, RiLuggageDepositFill } from "react-icons/ri";
import { IoIosCash } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { ImCoinYen } from "react-icons/im";
import { SiRoadmapdotsh } from "react-icons/si";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { FaCoins } from "react-icons/fa";

const userLinks = [
    {
        id:1,
        title:"Transaction History",
        icon:<GrTransaction/>,
        link:"/user/history"
    },
    {
        id:2,
        title:"Withdraw History",
        icon:<BiMoneyWithdraw/>,
        link:"/user/history/withdraw"
    },
    {
        id:3,
        title:"Deposit History",
        icon:<RiLuggageDepositFill/>,
        link:"/user/history/deposit"    
    },
    {
        id:4,
        title:"Earning",
        icon:<IoIosCash/>,
        link:"/user/earning"
    },
    {
        id:6,
        title:"Bonus",
        icon:<PiHandCoinsDuotone/>,
        link:"/user/level/history"
    },
    {
        id:13,
        title:"Coin",
        icon:<FaCoins/>,
        link:"/user/coin"
    },
    {
        id:5,
        title:"About",
        icon:<FcAbout/>,
        link:"/user/about"
    },
    {
        id:7,
        title:"Coinverse Pdf",
        icon:<ImCoinYen/>,
        link:"/user/coinverse"
    },
    {
        id:8,
        title:"Roadmap",
        icon:<SiRoadmapdotsh/>,
        link:"/user/roadmap"
    },
    {
        id:10,
        title:"Change Password",
        icon:<RiLockPasswordFill/>,
        link:"/user/profile"
    },
    {
        id:11,
        title:"Profile",
        icon:<CgProfile/>,
        link:"/user/profile"
    },
    {
        id:12,
        title:"Logout",
        icon:<FiLogOut/>,
        link:"/",
    },

]

export default userLinks