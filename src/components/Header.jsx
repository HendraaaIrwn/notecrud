"use client";
import React from "react";
import Image from "next/image";
import Avatar from "../assets/avatar.jpg";
import FacebookLogo from "../assets/facebook.png";
import { Find } from "./Find";

export const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-6">
        <div className=" flex gap-4 justify-center items-center">
          <Image className="rounded-full" src={FacebookLogo} width={50} height={50} />

          <div className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
            Facebook
          </div>
        </div>

        <Find />

        <div className=" flex gap-4 items-center">
          <div className=" flex gap-4 justify-center items-center h-fit py-2 px-4 bg-blue-500 rounded-xl ">
            <div className="link text-base font-semibold">Login</div>
            <div className=" text-white">|</div>
            <div className="link text-base font-semibold">Sign Up</div>
          </div>
          <Image className="rounded-full" src={Avatar} width={50} height={50} />
        </div>
      </div>
    </div>
  );
};
