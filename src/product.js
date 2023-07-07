import React from "react";
import Footer from "./component/footer";
import Header from "./component/header";
import { Carousel } from "react-responsive-carousel";

const Product = () => {
  return (
    <div>
      <Header />

      <section
        id="pricing"
        className="gap-y-8 py-[48px] bg-slate-100 px-[30px] md:px-[80px] lg:px-[130px] flex flex-col md:flex-row items-center gap-5 w-full "
        >
        <div className="md:w-[50%]">
          <h2 className="text-[1.9rem] lg:text-[3rem] font-extrabold text-gray-600 tracking-wide ">
            Transactions And Bills Sorting Made Easy
          </h2>
        </div>
        <div className="md:w-[50%]">
          <img src="/billDashboard.png" alt="" />
        </div>
      </section>
      <section className="bg-gray-50 py-9 px-[30px] gap-7 md:gap-0 flex flex-col md:flex-row items-center relative md:px-[80px] lg:px-[130px]  ">
        <div className="md:w-[50%] text-justify md:pr-[40px] md:border-r md:border-r-gray-600 ">
          {" "}
          <p className="text-gray-500">
            {" "}
            We use the latest technologies to ensure that our products are
            always up to date and of the highest quality. We believe that
            technology plays a crucial role in the development and delivery of
            exceptional products, and we're constantly seeking new ways to
            leverage the latest tools and techniques to improve our offerings.
          </p>
        </div>

        <div className="md:w-[50%] md:pl-[40px] text-justify ">
          <p className="text-gray-500">
            From cutting-edge software to advanced hardware, we're always on the
            lookout for the latest innovations that can help us deliver products
            that exceed your expectations. And with our team of expert engineers
            and designers, you can be sure that every product we deliver is
            crafted with the utmost care and attention to detail.
          </p>
        </div>
      </section>
      <section className="bg-gray-50 gap-[10%] py-9 px-[30px] flex flex-col md:flex-row relative md:px-[80px] lg:px-[130px]  ">
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
          <ul className="text-gray-500 space-y-2 list-disc  mb-3">
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
          <ul className="text-gray-500 space-y-2 list-disc ">
            <li>GLO</li>
            <li>Airtel</li>
            <li>Etisalat</li>
            <li>MTN</li>
          </ul>
          <button className="px-3 my-9 py-2 bg-[#124072] hover:bg-[#175392]  rounded-md text-gray-200">
            <a href="https://billvendingclient.paylodeservices.com/login">
              Get Started
            </a>
          </button>
          <img src="/dashboard.png" alt="" className="border-lg shadow" />
        </div>
      </section>
      <section className="bg-gray-100 py-9 px-[30px] flex flex-col md:flex-row items-center relative md:px-[80px] lg:px-[130px]  ">
        <div>
          {" "}
          <h2 className="text-[1.7rem] lg:text-[2.5rem] font-extrabold text-gray-600 tracking-wide ">
            Payment Gateway
          </h2>
          <p className="text-gray-500 mb-3 text-justify">
            With our secure and reliable payment processing system, you can
            accept payments and receive funds seamlessly from anyone, anywhere
            in the world. Whether you're running a small business or a large
            enterprise, our payment platform is designed to meet your needs and
            help you grow your business.
            <br />
            <br />
            We are a marketplace that connects merchants with payment providers
            to allow consumers to pay wherever and whenever they want. We don't
            just enable payments, we build solutions that help merchants thrive.
          </p>
          <div>
            <div className="flex items-center">
              <img src="/tick.svg" alt="tick" className="mr-3 h-[15px]" />
              <h3 className="font-bold text-[20px] mb-3 text-gray-600">
                Card Payment
              </h3>
            </div>
            <p className="text-gray-500 mb-3 text-justify">
              Card payment supports Visa, Master Card and Verve Cards
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <img src="/tick.svg" alt="tick" className="mr-3 h-[15px]" />
              <h3 className="font-bold text-[20px] mb-3 text-gray-600">
                Bank Transfer
              </h3>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <img src="/tick.svg" alt="tick" className="mr-3 h-[15px]" />
              <h3 className="font-bold text-[20px] mb-3 text-gray-600">
                USSD Payment
              </h3>
            </div>
          </div>
        </div>
        <div>
          <img src="/image1.png" alt />
        </div>
      </section>
      <section className="bg-[#1e5997] gap-6 py-9 flex flex-row-reverse px-[30px] items-center relative md:px-[80px] lg:px-[130px] ">
            <div className="relative md:w-[50%] w-full">
              <h2 className="text-[1.5rem] md:text-[2.0rem] lg:text-[2.2rem] text-[#ffffff] text-justify font-bold mb-[48px]">
                Enjoy swift and seamless transactions with well improved POS
                system
              </h2>
            </div>
            <div className="relative md:w-[50%] w-full">
              {" "}
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
              
                verticalSwipe = "natural"
                showThumbs={false}
                interval={4000}
              >
                <div>
                  <img src="/pos-empulse.png" alt="" />
                </div>
                <div>
                  <img src="/pos-linux.png" alt="" />
                </div>
                <div>
                  <img src="pos1.png" alt="" className="h-full" />
                </div>
                <div>
                  <img src="pos2.png" alt="" className="h-full" />
                </div>
              </Carousel>
            </div>
          </section>
      
      <Footer />
    </div>
  );
};

export default Product;
