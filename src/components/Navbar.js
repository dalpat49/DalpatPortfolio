import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="mb-5 pt-3" >
        <div className="w-6/6 h-14 bg-slate-500 md:w-5/6 md:h-16 lg:w-5/6 rounded-md mx-auto  ">
          <div className="flex flex-row p-2.5 hover:drop-shadow-2xl ">
            <div
             
              className="w-10 h-10 text-blue-600 rounded-lg bg-white text-4xl p-0.5 mx-auto cursor-pointer transition ease-in-out delay-100 hover:-translate-y-0.5 hover:scale-110 duration-300 hover:text-blue-900  hover:outline-none hover:border-blue-500 hover:ring-2 hover:ring-blue-500 "
            >
              <a href="#Home">
                <span>
                  <ion-icon name="home"></ion-icon>
                </span>
              </a>
            </div>

            <div className="w-10 h-10 text-red-600 rounded-lg bg-white text-4xl p-0.5 mx-auto cursor-pointer transition ease-in-out delay-100 hover:-translate-y-0.5 hover:scale-110 duration-300 hover:outline-none hover:border-red-500 hover:ring-2 hover:ring-red-500 ">
              <a href="#Skills" className="hover:text-red-900 ">
             
                <span>
                  <ion-icon name="hardware-chip"></ion-icon>
                </span>
              </a>
            </div>
            <div className="w-10 h-10 text-orange-600 rounded-lg bg-white text-4xl p-0.5 mx-auto cursor-pointer transition ease-in-out delay-100 hover:-translate-y-0.5 hover:scale-110 duration-300 hover:outline-none hover:border-orange-500 hover:ring-2 hover:ring-orange-500 ">
              <a href="#Projects" className=" hover:text-orange-900">
                <span>
                  <ion-icon name="code-slash"></ion-icon>
                </span>
              </a>
            </div>
            <div className="w-10 h-10 text-indigo-600 rounded-lg bg-white text-4xl p-0.5 mx-auto cursor-pointer transition ease-in-out delay-100 hover:-translate-y-0.5 hover:scale-110 duration-300  focus:ring-4   hover:outline-none hover:border-indigo-500 hover:ring-2 hover:ring-indigo-500">
              <a href="#Contact" className=" hover:text-indigo-900 ">
                <span>
                  <ion-icon name="call"></ion-icon>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
 
    </>
  );
}
