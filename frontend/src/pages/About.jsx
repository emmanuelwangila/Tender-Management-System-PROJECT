import React from "react";

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto bg-gray-200 m-5 rounded-md  ">
      <h1 className=" font-bold text-2xl  mb-4 text-blue-500 flex justify-center ">
        Tender Hub
      </h1>
      <h2 className="font-bold font-sans text-blue-500  flex justify-center">
        {" "}
        About Tender Hub
      </h2>
      <div className="text-gray-500 p-2 m-2 flex justify-center">
        <p>
          TenderHub Management System is a software platform , designed to
          streamline and enhance the process of managing and participating, in
          procurement tenders or requests for proposals (RFPs). This system is
          typically used by businesses, government organizations, and other
          entities to facilitate the entire tendering process, from the creation
          and publication of tenders to the evaluation and awarding of
          contracts.
        </p>
      </div>
      <div>
        {/* <img src={assets/hire.png } alt='tender-image' width={40} height={50}/>  */}
      </div>
    </div>
  );
}
