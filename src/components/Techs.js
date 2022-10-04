import React from "react";

export default function Techs(props) {
  return (
    <>
      
          <div className="rounded-lg break-words p-1 shadow-2xl  bg-slate-400 text-black cursor-pointer  border hover:outline-none hover:border-slate-500 hover:ring-1  hover:ring-slate-300">
            <img src={props.skillimg} alt="" className="w-20 h-20 mx-auto rounded-md " />
            <p className="text-lg font-bold">{props.title}</p>
          </div>
      
          
      
    </>
  );
}
