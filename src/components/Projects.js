import React from "react";
import Majorprojects from "./Majorprojects";

export default function Projects(props) {
  return (
    <div className="container  text-center lg:pt-12  pt-12" id="Projects">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-code-slash w-16 h-20 mx-auto     "
          viewBox="0 0 16 16"
        >
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
        </svg>
        <h3 className="mb-2 pb-1   text-3xl text-white font-serif tracking-tight leading-none md:text-3xl lg:text-4xl lg:pt-2 dark:text-white sm:pt-1">
          Projects that have I created!
        </h3>
        <p className="mb-2 m-2 text-lg font-sans font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48 dark:text-gray-400">
          Created a few projects based on front-End and backend.
</p>
      </div>
      <div>
      <div className=" lg:w-5/6 lg:p-8  md:w-6/6   w-6/6 mx-auto  bg-slate-500 rounded-lg mb-4    drop-shadow-xl  ">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-4 lg:gap-6 text-center  rounded-lg p-4 ">
            <Majorprojects tittle="Portfolio website" pdescription="This is my Portfolio website which was developed with normal html,Css and basic javascript." githublink="https://github.com/dalpat49/my-profile.github.in" />
            <Majorprojects tittle="Message form" pdescription="This is a message form which was developed in full stack with database connectivity." githublink="https://github.com/dalpat49/massageform"/>
            <Majorprojects  tittle="Digital clock" pdescription="This is a digital clock which was developed  with normal html,Css and basic javascript."  githublink="https://github.com/dalpat49/digitalclock"/>
            <Majorprojects tittle="Cafe Management" pdescription="This is a cafe website with which was developed in full stack with database connectivity."githublink="https://github.com/dalpat49/marvelcafe" />

        </div>
        </div>
      </div>
    </div>
  );
}
