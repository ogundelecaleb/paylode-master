import React from "react";
import {GoLocation, GoMail} from "react-icons/go";
import {BsTelephone} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#124072] pt-[15%] lg:pt-[10%] pb-5 text-[14px] px-3 md:px-[80px] lg:px-[130px]">
      <div className="wrapper reveal">
        <div className="flex lg:flex-row flex-col w-full gap-3">
          <div className="flex-2 text-gray-100 pr-4">
            <img src="/payloadlogo.png" alt="" className="bg-white p-2 rounded-lg"/>
            <h4 className="py-3">Advanced payment solution for Africa</h4>
            <p>
             Accept payments, receives payments seamlessly from anyone, anywhere in the world.
            </p>
          </div>
          <div className="flex-grow flex lg:flex-row md:flex-row flex-col gap-4  justify-between text-white w-full">
            <div class="box-item">
              <h4>Quick Link</h4>
              <ul>
                <li className="py-2">
                  <p>Home</p>
                </li>
                <li className="py-2">
                  <p>Products</p>
                </li>
                {/* <li>
              <a href="#review">Why you should use Paylode</a>
            </li> */}
                <li className="py-2">
                  <p>FAQ</p>
                </li>
              </ul>
            </div>
            <div className="box-item">
              <h4 >Contact</h4>
              <ul className="contact">
                <li className="py-2 flex gap-1 items-center">
                  <BsTelephone/>
                  <p>+234 8083 8100 30</p>
                </li>
                <li className="py-2 flex gap-1 items-center">
                  {/* <i className="fas fa-location-dot"></i> */}
                  <GoLocation/> <p>51c, Remi Fani Kayode Avenue, GRA Ikeja, Lagos.</p>
                 
                </li>
                <li className="py-2 flex gap-1 items-center">
                  <GoMail/>
                  <p>sales@paylodeservices.com</p>
                </li>
              </ul>
            </div>
            <div className="box-item">
              <h4>Legal</h4>
              <ul>
                <li className="py-2">
                  <p>Terms of Use</p>
                </li>
                <li className="py-2">
                  <p>Privacy Policy</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copyright text-center mt-4 text-[9px] text-gray-200">© Paylode ltd 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
