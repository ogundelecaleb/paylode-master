import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";

const Billvending = () => {
  return (
    <div className="relative">
      {" "}
      <Header className="top-0 sticky z-10" />
      <div>
      <section id="pricing" className="relative">
        {" "}
        <div className="gap-y-8 py-[48px] bg-slate-100 px-[16px] md:px-[50px] lg:px-[60px] flex flex-col md:flex-row items-center gap-5 w-full ">
          <div className="md:w-[50%]">
            <h2 className="text-[1.9rem] lg:text-[3rem] font-extrabold text-gray-600 tracking-wide ">
              Transactions And Bills Sorting Made Easy
            </h2>
          </div>
          <div className="md:w-[50%]">
            <img src="/billDashboard.png" alt="" />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 gap-[10%] py-9  flex flex-col md:flex-row relative px-[16px] md:px-[50px] lg:px-[60px] ">
        <div className="md:w-[50%] text-justify ">
          <h2 className="text-[1.7rem] lg:text-[2.5rem] font-extrabold text-gray-600 tracking-wide ">
            Bill Vending
          </h2>
          <p className="text-gray-500 mb-8 md:mb-5">
            {" "}
            Our BillVending platform is designed to make bill payments seamless
            and easy, so you can spend less time worrying about bills such as
            Electricity and Airtime and have more time enjoying life. Plus, with
            our secure and reliable payment system, you can rest assured that
            your transactions are always safe and secure.
          </p>
          <div className="flex items-center">
            <img src="/tick.svg" alt="tick" className="mr-3 h-[15px]" />
            <h3 className="font-bold text-[20px] mb-3 text-gray-600">
              Electricity Bill
            </h3>
          </div>

          <p className="text-gray-500 mb-3">
            We serve you best way to pay your electricity bill instantly and
            electricity supply from any of the Nigerian Electricity Disco of
            your choice, below are the electricity disco available:
          </p>
          <ul className="text-gray-500 space-y-2 list-disc  mb-3 pl-4">
            <li>Abuja Electricity Distribution Plc (AEDC) </li>
            <li>Benin Electricity Distribution Company</li>
            <li>Eko Electricity Distribution Plc (EKEDC) </li>
            <li>Enugu Electricity Distribution Plc (EEDC) </li>
            <li>Ibadan Electricity Distribution Plc (IBEDC) </li>
            <li>Ikeja Electricity Distribution Company (IKEDC) </li>
            <li>Jos Electricity Distribution Plc (JEDC)....</li>
            {/* <li>Kano Electricity Distribution Plc (KEDC) </li>
            <li>Port Harcourt Electricity Distribution Plc (PHEDC)</li>
            <li>Yola Electricity Distribution Company Plc (YEDC) </li> */}
          </ul>
        </div>
        <div className="md:w-[50%] ">
          <div className="flex items-center">
            <img src="/tick.svg" alt="tick" className="mr-3 h-[15px]" />
            <h3 className="font-bold text-[20px] mb-3 text-gray-600">
              Airtime and Data Bill
            </h3>
          </div>
          <p className="text-gray-500 mb-3">
            Get airtime and data from any of the registered Nigerian
            telecommunications service providers though our seamless channels{" "}
          </p>
          <ul className="text-gray-500 space-y-2 list-disc pl-4 ">
            <li>GLO</li>
            <li>Airtel</li>
            <li>9Mobile</li>
            <li>MTN</li>
          </ul>
          <button className="px-3 my-9 py-2 bg-[#124072] hover:bg-[#175392]  rounded-md text-gray-200">
            <a
              href="https://billvendingclient.paylodeservices.com/login"
              target="blank"
            >
              Get Started
            </a>
          </button>
          <img src="/dashboard.png" alt="" className="border-lg shadow" />
        </div>
      </section>
      <Footer />
      </div>
    </div>
  );
};

export default Billvending;
