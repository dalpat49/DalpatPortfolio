import React from "react";
import Footer from "./Contact";
import images from "./Images";

export default function MainContact(props) {
  return (
    <>
      <div className="container  text-center pt-12 " id="Contact">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-telephone-outbound-fill w-16 h-20 mx-auto"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <h3 className="mb-2  text-3xl mt-2 text-white font-serif tracking-tight leading-none md:text-3xl lg:text-4xl lg:pt-2 dark:text-white sm:pt-1">
     Get in touch!
        </h3>
        <p className="mb-6 m-2 text-md font-sans font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48 dark:text-gray-400">
   Let's have a talk and make some new connections together!
        </p>
      </div>
      <div >
        <div className="lg:w-5/6 mx-auto md:w-6/6 lg:h-60 lg:p-8  bg-slate-500 rounded-lg mb-4  md:p-5   drop-shadow-xl  ">
          <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-4 lg:gap-4 text-center  rounded-lg p-1 ">
            <Footer
              title="singhdalpat8182@gmail.com"
              footerimg={images.email}
              Clink="mailto:singhdalpat8182@gmail.com "
              text="Mail me"
              imgclass="w-20 h-20  mx-auto pt-4 lg:pt-1 mb-4 rounded-md "
            />
            <Footer
              title="+916367667129"
              footerimg={images.call}
              Clink="https://wa.me/916367667129 "
              text="Call me"
              imgclass="w-24 h-24  mx-auto pt-3  rounded-md "
            />
          </div>
        </div>
      </div>
    </>
  );
}
