import React from "react";
import Techs from "./Techs";
import images from "./Images";

export default function Skills(props) {
  return (
    <>
      <div className="container  text-center pt-12 " id="Skills">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-cpu-fill w-10 h-10 mx-auto"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
          <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z" />
        </svg>
        <h3 className="mb-2 font-serif  text-3xl mt-2 text-white tracking-tight leading-none md:text-3xl lg:text-4xl lg:pt-2 sm:pt-1">
          Skills and Technologies!
        </h3>
        <p className="mb-6 m-2 text-md font-sans font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48 ">
          I have the knowledge of both Front-End and Backend development along
          with database operations.
        </p>
      </div>
      <div className="">
      <div className="lg:w-5/6 md:w-6/6  mx-auto  lg:h-auto   lg:p-8   bg-slate-500 rounded-lg mb-4  md:p-5   drop-shadow-xl  ">
        <div className="border-green  w-100  ">
          <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-5 gap-4 text-center  rounded-lg p-4  ">
            <Techs skillimg={images.htmlImage} title="html" />
            <Techs skillimg={images.cssImage} title="CSS" />
            <Techs skillimg={images.javascript} title="Javascript" />
            <Techs skillimg={images.jquery} title="Jquery" />
            <Techs skillimg={images.bootstrap} title="Bootstrap" />
            <Techs skillimg={images.nodejs} title="Node js" />
            <Techs skillimg={images.expressjs} title="Express Js" />
            <Techs skillimg={images.mongodb} title="MongoDB" />
            <Techs skillimg={images.react} title="React" />
            <Techs skillimg={images.github} title="Github" />
            <Techs skillimg={images.tailwind} title="Tailwind CSS" />
            <Techs skillimg={images.git} title="Git" />
          </div>
          </div>
        </div>

      </div>
    </>
  );
}
