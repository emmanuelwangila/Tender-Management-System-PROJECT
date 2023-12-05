import React from "react";

export default function About() {
  return (
    <div className=" px-4 w-full h-full  mx-auto bg-gray-200 m-2  rounded-md  ">
      <h1 className=" font-bold text-2xl uppercase  mb-4 text-blue-900 flex justify-center ">
        Tender Hub
      </h1>
      <h2 className="font-bold text-3xl font-sans text-blue-900  flex justify-center">
        {" "}
        About TenderHub: Your Complete Tender Management Solution
      </h2>
      <div className="text-gray-500 p-2 m-2 flex-col  ">
        <p className="text-teal-600 p-2 m-3 ">
          Welcome to TenderHub, where we simplify and streamline the tendering
          process for organizations, ensuring transparency, efficiency, and
          successful procurement.
        </p>
        <h2 className="text-gray-600 text-3xl font-bold ">Our Mission</h2>
        <p className="text-gray-500 m-2 p-3 ">
          {" "}
          At TenderHub, our mission is to revolutionize the way organizations
          manage tenders. We aim to provide a comprehensive, user-friendly, and
          secure platform that empowers both Tender Officers and vendors
          throughout the tender lifecycle.
        </p>
        <div>
          Key Features
          <ul>
            <li>
              1. Effortless Tender Creation: Seamlessly create and publish
              tenders with a user-friendly interface. Specify detailed
              requirements, deadlines, and submission guidelines.{" "}
            </li>
            <li>
              {" "}
              2. Transparent Bid Evaluation: Facilitate fair and transparent bid
              evaluation with customizable scoring criteria. Enhance
              collaboration among Tender Officers during the evaluation process.
            </li>
            <li>
              3. Vendor-Friendly Interface: Provide vendors with a
              straightforward registration process. Simplify bid submission with
              an intuitive and guided interface.{" "}
            </li>
            <li>
              4. Real-time Notifications: Keep stakeholders informed with
              real-time notifications and alerts. Ensure timely responses and
              adherence to deadlines.{" "}
            </li>
          </ul>
          <div>
            <h2 className="text-teal-700 flex justify-center font-bold m-2 p-3 text-2xl">
              Why Choose TenderHub?
            </h2>
            <p>
              User-Centric Design: Our platform is designed with users in mind,
              ensuring a positive experience for both Tender Officers and
              vendors. Scalability: TenderHub grows with your organization,
              accommodating an increasing number of tenders and users.
              Compliance: Stay compliant with legal and regulatory requirements,
              backed by a system that adheres to industry standards.
            </p>
          </div>
        </div>
      </div>
      <div>
        {/* <img src={assets/hire.png } alt='tender-image' width={40} height={50}/>  */}
      </div>
    </div>
  );
}
