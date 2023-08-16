import React from "react";
import {FiFacebook} from "react-icons/fi";
import {TbBrandTelegram} from "react-icons/tb";
import {AiOutlineTwitter,AiOutlineWhatsApp} from "react-icons/ai";


export function SocialIcons(){
    return(
      <div className="columns social-icons">
        <FiFacebook id="icon"/>
        <AiOutlineTwitter  id="icon"/>
        <AiOutlineWhatsApp id="icon"/>
        <TbBrandTelegram id="icon"/>
      </div>
    )
};