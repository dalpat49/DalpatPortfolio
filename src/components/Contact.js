import React from 'react'

export default function Contact(props) {
  return (
    <div className="rounded-lg break-all  p-1 shadow-2xl  bg-slate-400 text-black border hover:border-slate-400 ">
   <a href={props.Clink} > <img src={props.footerimg} alt="" className={props.imgclass} />
    <p className="text-lg font-bold mt-2 ">{props.title}</p></a>
    <p className="text-lg  mt-1">{props.text}</p>
  </div>
  )
}


