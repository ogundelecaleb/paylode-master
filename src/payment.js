import React from "react";
import Footer from "./component/footer";
import Header from "./component/header";
import { Carousel } from "react-responsive-carousel";
import { BsRecord2Fill } from "react-icons/bs";

const Payment = () => {
  return (
    <div>
      <Header />

      <section
        id="pricing"
        className="gap-y-8 py-[48px] bg-slate-100 px-[16px] md:px-[50px] lg:px-[60px] flex flex-col md:flex-row items-center gap-5 w-full "
      >
        <div className="md:w-[50%]">
          <h2 className="text-[1.5rem] lg:text-[2.5rem] font-extrabold text-gray-600 tracking-wide ">
            Embrace the Future of Payments with an Innovative Payment System
          </h2>
        </div>
        <div className="md:w-[50%]">
          <img src="/darkskinguy.jpg" alt="" className="rounded-br-[50%]" />
        </div>
      </section>
      {/* <section className="bg-gray-50 py-9  gap-7 md:gap-0 flex flex-col md:flex-row items-center relative px-[16px] md:px-[50px] lg:px-[60px]  ">
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
      </section> */}

      <section className="bg-gray-100  px-[16px] md:px-[50px] lg:px-[60px]">
        <div className=" py-9 flex flex-col md:flex-row items-center relative ">
        <div className="w-full md:w-[50%]">
            <h2 className="text-[1.7rem] lg:text-[2.5rem] font-extrabold text-gray-600 tracking-wide ">
              Payment Gateway
            </h2>
            <p className="text-gray-500 mb-3">
              Accept payments and receive funds seamlessly from anyone, anywhere
              in the world. Whether you're running a small business or a large
              enterprise, our payment platform is designed to meet your needs
              and help you grow your business.
              <br />
              <br />
              We are a marketplace that connects merchants with payment
              providers to allow consumers to pay wherever and whenever they
              want. We don't just enable payments, we build solutions that help
              merchants thrive.
            </p>
            <div>
              <div className="flex items-center gap-2">
                <BsRecord2Fill />
                <h3 className="font-bold text-[16px] text-gray-600">
                  Card Payment
                </h3>
              </div>
              <p className="text-gray-500 mb-2 text-justify pl-6">
                Card payment supports Visa, Master Card and Verve Cards
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <BsRecord2Fill />
                <h3 className="font-bold text-[16px] text-gray-600">
                  Bank Transfer
                </h3>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <BsRecord2Fill />
                <h3 className="font-bold text-[16px]  text-gray-600">
                  USSD Payment
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <img src="/image1.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-[50%]">
            <h2 className="text-[1.7rem] lg:text-[2.5rem] font-extrabold text-gray-600 tracking-wide ">
              Robust Security Measures
            </h2>
            <p className="text-gray-500 mb-3">

              With advanced encryption technology and multiple layers of
              protection, our Payment Gateway shields your sensitive data from
              unauthorized access, safeguarding your financial transactions.
              Rest easy knowing that your personal and financial information is
              in safe hands.
            </p>
          </div>
          <div className="w-full md:w-[50%]">
            <img src="/shield.png" alt="" className="h-[400px] mx-auto " />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center py-9">
          <div className="w-full md:w-[50%]">
            <h2 className="text-[1.7rem] lg:text-[2.5rem] font-extrabold text-gray-600 tracking-wide ">
              User-Friendly Integration
            </h2>
            <p className="text-gray-500 mb-3">

              Integrating our Payment Gateway into your existing platform is a
              breeze. With a developer-friendly API and a dedicated support
              team, you can effortlessly incorporate our gateway into your
              website or mobile app. Get up and running in no time!
            </p>
            <div>
              <div className="flex items-center gap-2">
                <BsRecord2Fill />
                <h3 className="font-bold text-[16px] text-gray-600">
                Code samples & Example
                </h3>
              </div>
              
            </div>
            <div>
              <div className="flex items-center gap-2">
                <BsRecord2Fill />
                <h3 className="font-bold text-[16px] text-gray-600">
                Metadata Support
                </h3>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <BsRecord2Fill />
                <h3 className="font-bold text-[16px]  text-gray-600">
                Versioned API Changes
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <img src="/code-snippet.png" alt="" className="h-[400px] mx-auto rounded-md " />
          </div>
        </div>
      </section>
      <section className="bg-[#1e5997] gap-6 py-9 flex flex-col  md:flex-row-reverse gap-[36px]  items-center relative px-[16px] md:px-[50px] lg:px-[60px] ">
        <div className="relative md:w-[50%] w-full">
          <h2 className="text-[1.6rem] md:text-[2.0rem] lg:text-[2.2rem] text-[#ffffff]  font-bold mb-[48px]">
            Enjoy swift and seamless transactions with well improved POS system
          </h2>
        </div>
        <div className="relative md:w-[50%] w-full">
          {" "}
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            verticalSwipe="natural"
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

export default Payment;
