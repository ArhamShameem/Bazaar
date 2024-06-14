import React from "react";
import { logoLight } from "../assests/index";
import { payment } from "../assests/index";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont flex flex-row  gap-8">
      <div className="mx-20">
        <img className="w-[100px]" src={logoLight} alt="lightLogo" />
        <p className="text-xs text-white font-bodyFont my-4">©ReactBD</p>
        <img className="w-[400px] " src={payment} alt="payment" />
        <div className="flex flex-row gap-5 my-5">
          <AiFillGithub />
          <AiFillYoutube />
          <AiFillTwitterCircle />
          <AiFillInstagram />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-titleFont text-bold text-white text-2xl">
          locate us
        </p>
        <p>
          Karol bagh,South Delhi,India
          <br />
          Mob:+91 9457697288
          <br />
          Phone:+91 9457697288
          <br />
          email-arhamshameem001@gmail.com
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-titleFont text-bold text-white text-2xl ">profile</p>
        <div className="flex"><MdAccountCircle/><p>Account</p></div>
       <div className="flex"> <BsCartCheckFill/><p>Checkout</p></div>
       <div className="flex"> <FaHome/><p>Order Tracking</p></div>
        <div className="flex"><HiLocationMarker/><p>help&support</p></div>
      </div>
      <div className="mx-20">
        <p className="font-titleFont text-bold text-white text-2xl">Consumer Policy</p>
        <p>Cancellation and Returns</p>
        <p>Terms of Use</p>
        <p>Security</p>
        <p>Privacy</p>
        <p>Sitemap</p>
      </div>
    </div>
  );
};

export default Footer;
