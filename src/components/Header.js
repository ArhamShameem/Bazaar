import React from "react";
import { logo } from "../assests/index";
import { cart} from "../assests/index";

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont">
      <div className="max-w-screen-xl h-full mx-auto  flex items-center justify-between">
        <div>
          <img className="h-10 " src={logo} alt="" />
        </div>
        <div className="flex gap-5">
          <ul className="flex item-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <div className="relative">
            <img className="h-9 w-10 " src={cart} alt=""/>
            <span className="absolute w-6 top-1 left-2  text-sm flex items-center justify-center font-semibold "> 
0
            </span>
          </div> 
          <img className="w-8 h-8 rounded-full" src="https://img2.gratispng.com/20180327/ssq/kisspng-computer-icons-user-profile-avatar-profile-5ab9e3b05772c0.6947928615221318883582.jpg" alt="UserLogo"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
