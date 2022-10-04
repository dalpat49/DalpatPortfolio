import React from "react";
import { AiFillHeart } from "react-icons/ai";


export default function App() {

  function mystyle(){
    
      let heart= document.getElementById("heart");
      heart.classList.add("fill-red-600")
      heart.classList.toggle("fill-white")
   
    }

  return (
    <div className=" w-14 h-14 lg:w-20 lg:h-20 bg-slate-900 rounded-full absolute   ">
    <div className="p-2.5">
      <AiFillHeart  id="heart" className=" text-6xl   border-outline transition    relative animate-bounce  p-1 duration-300 " onClick={mystyle} />
      </div>
      
    </div>
  );
}

