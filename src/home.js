import React from "react";
import Footer from "./component/footer";
import Header from "./component/header";
import { motion as m } from "framer-motion";
import { useForm } from "react-hook-form";
import { Typewriter } from "react-simple-typewriter";
import { Carousel } from "react-responsive-carousel";
const Home = () => {
  // const { register, handleSubmit } = useForm<Inputs>();
  const { register, handleSubmit } = useForm();

  // const onSubmit: SubmitHandler<Inputs> = (formData) => {
  //   window.location.href = `mailto:ogundelecaleb14@gmail?subject=${formData.subject}&body=Hi, My Name is ${formData.name}. ${formData.message} (${formData.email})`}

  const onSubmit = (formData) => {
    window.location.href = `mailto:ogundelecaleb14@gmail?subject=${formData.subject}&body=Hi, My Name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div>
      <Header />
      <div className="">
        <div>
          <section
            id="#"
            className="gap-y-8 py-[48px] bg-slate-100 px-[30px] md:px-[80px] lg:px-[130px] flex flex-col md:flex-row items-center gap-5 w-full "
          >
            <div>
              <m.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                className=" pt-5"
              >
                <h2 className="text-[29px] lg:text-[46px] font-bold text-gray-500 tracking-wide  ">
                  ADVANCED PAYMENT GATEWAY SOLUTION FOR{" "}
                  <span className="text-[#90c841]">AFRICA</span>{" "}
                </h2>

                <p className="text-[#124072]  tracking-wider mt-3 ">
                  Payments, Collection and Fintech...
                </p>
                <m.div
                  initial={{ x: -500, opacity: 0, scale: 0.5 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 2.0,
                  }}
                  className=" mt-4 flex items-center space-x-3"
                >
                  <button className="px-3 py-2 bg-[#124072] hover:bg-[#175392] font-bold rounded-lg text-gray-200">
                    <a href="#contact">Get Started</a>
                  </button>
                  <button className="px-3 py-2 font-bold bg-[#124072] hover:bg-[#175392] rounded-lg text-gray-200">
                    <a href="#contact">Contact Us</a>
                  </button>
                </m.div>
              </m.div>
            </div>
            <div className="object-contain w-full flex justify-center">
              <img
                src="/seamlesss.png"
                alt=""
                className="h-[360px] lg:h-[420px] lg:w-[580px] "
              />
            </div>
          </section>
          {/* partners company */}
          <section className="text-gray-400 py-7 bg-slate-50  tracking-[] text-center px-[30px] md:px-[80px] lg:px-[130px]">
            <h4 className="text-[#124072] md:text-[20px] tracking-widest font-bold mb-10">
              Trusted Partners
            </h4>

            <div className="marquee">
              <div className="flex flex-row  justify-center gap-5 track">
                <img
                  src="/palmpay-logo.png"
                  alt="palmpay logo"
                  className="h-10"
                />
                <img
                  src="/macroel-logo.png"
                  alt="macroel logo"
                  className="h-10"
                />
                <img
                  src="/cloud-interactive-logo.png"
                  alt="cloud interactive logo"
                  className="h-10"
                />
                <img
                  src="/joslogo.jpeg"
                  alt="jos disco logo"
                  className="h-10"
                />
                <img src="/nibsslogo.png" alt="niboss logo" className="h-10" />
                <img src="/easypay.png" alt="easypay logo" className="h-10" />
              </div>
            </div>
          </section>
          {/* services */}

          <section
            id="product"
            className="bg-slate-100 relative opacity-90 py-10 px-3 md:px-[80px] lg:px-[130px] "
          >
            <div className=" ">
              <p className="text-[18px] md:text-[32px] text-[#90c841] font-bold mb-5 md:mb-[56px] ">
                Improved solution to solve{" "}
                <span style={{ color: "#124072", fontWeight: "bold" }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={["Payments", "Collection", "Fintech"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </p>

              <div className="flex flex-col md:flex-row gap-[10%]">
                <div className="md:w-[50%] w-full flex justify-center">
                  <img
                    src="/electImage.png"
                    alt="electricity"
                    className="h-[240px] w-full md:h-[360px]  mx-auto   object-cover"
                  />
                </div>
                <div className="relative md:w-[50%] w-full">
                  {/* <div className="w-full absolute top-[10%] bg-[#90d62f] left-0 h-[80%] skew-y-12 -z-20"></div> */}
                  <h2 className="text-[18px] md:text-[32px] text-[#124072] font-bold mb-2 ">
                    Enjoy a comprehensive suite of integrated bill vending
                    solution
                  </h2>

                  <p className="text-[16px] lg:text-[20px] text-[#124072] text-justify mb-8 px-1">
                    Our platform is designed to make bill payments a breeze, so
                    you can spend less time worrying about bills and more time
                    enjoying life. Plus, with our secure and reliable payment
                    system, you can rest assured that your transactions are
                    always safe and secure.
                  </p>
                  {/* </div> */}
                  <h3 className="text-[20px] lg:text-[24px] text-[#124072] font-bold mb-2 ">
                    Features
                  </h3>
                  <ul>
                    <li className="text-[16px] lg:text-[20px] mb-2 flex items-center tracking-widest text-[#124072] ">
                      <svg
                        className="mr-2"
                        width="30"
                        height="30"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20" cy="20" r="20" fill="#124072" />
                        <g clip-path="url(#clip0_9_35)">
                          <path
                            d="M28.3333 19.2334V20C28.3323 21.797 27.7504 23.5456 26.6744 24.9849C25.5985 26.4242 24.0861 27.4771 22.3628 27.9866C20.6395 28.4961 18.7977 28.4349 17.112 27.8122C15.4264 27.1894 13.9872 26.0384 13.0091 24.5309C12.031 23.0234 11.5665 21.2401 11.6847 19.447C11.803 17.6538 12.4977 15.947 13.6652 14.5809C14.8328 13.2149 16.4106 12.2628 18.1635 11.8668C19.9163 11.4708 21.7502 11.652 23.3917 12.3834"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M28.3333 13.3333L20 21.675L17.5 19.175"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9_35">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(10 10)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Airtime/Data Bills
                    </li>
                    <li className="text-[16px] lg:text-[20px] mb-2 flex items-center tracking-widest text-[#124072] ">
                      {" "}
                      <svg
                        className="mr-2"
                        width="30"
                        height="30"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20" cy="20" r="20" fill="#124072" />
                        <g clip-path="url(#clip0_9_35)">
                          <path
                            d="M28.3333 19.2334V20C28.3323 21.797 27.7504 23.5456 26.6744 24.9849C25.5985 26.4242 24.0861 27.4771 22.3628 27.9866C20.6395 28.4961 18.7977 28.4349 17.112 27.8122C15.4264 27.1894 13.9872 26.0384 13.0091 24.5309C12.031 23.0234 11.5665 21.2401 11.6847 19.447C11.803 17.6538 12.4977 15.947 13.6652 14.5809C14.8328 13.2149 16.4106 12.2628 18.1635 11.8668C19.9163 11.4708 21.7502 11.652 23.3917 12.3834"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M28.3333 13.3333L20 21.675L17.5 19.175"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9_35">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(10 10)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Electricity
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col relative md:flex-row-reverse gap-[10%] mt-[49px] items-center">
                <div className="absolute flex justify-center w-full top-[30%] bottom-auto -z-20">
                  {" "}
                  {/* <img src="/map.png" alt="map" className="h-[280px]" /> */}
                </div>

                {
                  <div className="w-[50%]">
                    <Carousel
                      autoPlay
                      infiniteLoop
                      showStatus={false}
                      showIndicators={false}
                      showThumbs={false}
                      interval={5000}
                    >
                      <div>
                        <img src="/CARD.png" alt="" />
                      </div>
                      <div>
                        <img src="/BANK.png" alt="" />
                      </div>
                      <div>
                        <img src="Transfer.png" alt="" className="h-full" />
                      </div>
                      <div>
                        <img src="USSD.png" alt="" className="h-full" />
                      </div>
                    </Carousel>
                  </div>
                }
                <div className="relative md:w-[50%] w-full">
                  <h2 className="text-[18px] md:text-[32px] text-[#124072] font-bold mb-2 ">
                    User-friendly and intuitive payment system for seamless
                    transactions
                  </h2>

                  <p className="text-[16px] lg:text-[20px] text-[#124072] text-justify mb-8 px-1">
                    With our secure and reliable payment processing system, you
                    can accept payments and receive funds seamlessly from
                    anyone, anywhere in the world. Whether you're running a
                    small business or a large enterprise, our payment platform
                    is designed to meet your needs and help you grow your
                    business.
                    <br />
                    <br />
                    We are a marketplace that connects merchants with payment
                    providers to allow consumers to pay wherever and whenever
                    they want. We don't just enable payments, we build solutions
                    that help merchants thrive.
                  </p>

                  {/* </div> */}
                  <h3 className="text-[20px] lg:text-[24px] text-[#124072] font-bold mb-2 ">
                    Features
                  </h3>
                  <ul>
                    <li className="text-[16px] lg:text-[20px] mb-2 flex items-center tracking-widest text-[#124072] ">
                      <svg
                        className="mr-2"
                        width="30"
                        height="30"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20" cy="20" r="20" fill="#124072" />
                        <g clip-path="url(#clip0_9_35)">
                          <path
                            d="M28.3333 19.2334V20C28.3323 21.797 27.7504 23.5456 26.6744 24.9849C25.5985 26.4242 24.0861 27.4771 22.3628 27.9866C20.6395 28.4961 18.7977 28.4349 17.112 27.8122C15.4264 27.1894 13.9872 26.0384 13.0091 24.5309C12.031 23.0234 11.5665 21.2401 11.6847 19.447C11.803 17.6538 12.4977 15.947 13.6652 14.5809C14.8328 13.2149 16.4106 12.2628 18.1635 11.8668C19.9163 11.4708 21.7502 11.652 23.3917 12.3834"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M28.3333 13.3333L20 21.675L17.5 19.175"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9_35">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(10 10)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Mobile and Internet Transfer
                    </li>
                    <li className="text-[16px] lg:text-[20px] mb-2 flex items-center tracking-widest text-[#124072] ">
                      <svg
                        className="mr-2"
                        width="30"
                        height="30"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20" cy="20" r="20" fill="#124072" />
                        <g clip-path="url(#clip0_9_35)">
                          <path
                            d="M28.3333 19.2334V20C28.3323 21.797 27.7504 23.5456 26.6744 24.9849C25.5985 26.4242 24.0861 27.4771 22.3628 27.9866C20.6395 28.4961 18.7977 28.4349 17.112 27.8122C15.4264 27.1894 13.9872 26.0384 13.0091 24.5309C12.031 23.0234 11.5665 21.2401 11.6847 19.447C11.803 17.6538 12.4977 15.947 13.6652 14.5809C14.8328 13.2149 16.4106 12.2628 18.1635 11.8668C19.9163 11.4708 21.7502 11.652 23.3917 12.3834"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M28.3333 13.3333L20 21.675L17.5 19.175"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9_35">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(10 10)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      USSD Code
                    </li>
                    <li className="text-[16px] lg:text-[20px] mb-2 flex items-center tracking-widest text-[#124072] ">
                      <svg
                        className="mr-2"
                        width="30"
                        height="30"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20" cy="20" r="20" fill="#124072" />
                        <g clip-path="url(#clip0_9_35)">
                          <path
                            d="M28.3333 19.2334V20C28.3323 21.797 27.7504 23.5456 26.6744 24.9849C25.5985 26.4242 24.0861 27.4771 22.3628 27.9866C20.6395 28.4961 18.7977 28.4349 17.112 27.8122C15.4264 27.1894 13.9872 26.0384 13.0091 24.5309C12.031 23.0234 11.5665 21.2401 11.6847 19.447C11.803 17.6538 12.4977 15.947 13.6652 14.5809C14.8328 13.2149 16.4106 12.2628 18.1635 11.8668C19.9163 11.4708 21.7502 11.652 23.3917 12.3834"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M28.3333 13.3333L20 21.675L17.5 19.175"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9_35">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(10 10)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Debit and Credit Card
                    </li>
                    <li className="text-[16px] lg:text-[20px] mb-2 flex items-center tracking-widest text-[#124072] ">
                      <svg
                        className="mr-2"
                        width="30"
                        height="30"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20" cy="20" r="20" fill="#124072" />
                        <g clip-path="url(#clip0_9_35)">
                          <path
                            d="M28.3333 19.2334V20C28.3323 21.797 27.7504 23.5456 26.6744 24.9849C25.5985 26.4242 24.0861 27.4771 22.3628 27.9866C20.6395 28.4961 18.7977 28.4349 17.112 27.8122C15.4264 27.1894 13.9872 26.0384 13.0091 24.5309C12.031 23.0234 11.5665 21.2401 11.6847 19.447C11.803 17.6538 12.4977 15.947 13.6652 14.5809C14.8328 13.2149 16.4106 12.2628 18.1635 11.8668C19.9163 11.4708 21.7502 11.652 23.3917 12.3834"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M28.3333 13.3333L20 21.675L17.5 19.175"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9_35">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(10 10)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      QR Code
                    </li>
                    <li className="text-[16px] lg:text-[20px] mb-2 flex items-center tracking-widest text-[#124072] ">
                      {" "}
                      <svg
                        className="mr-2"
                        width="30"
                        height="30"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20" cy="20" r="20" fill="#124072" />
                        <g clip-path="url(#clip0_9_35)">
                          <path
                            d="M28.3333 19.2334V20C28.3323 21.797 27.7504 23.5456 26.6744 24.9849C25.5985 26.4242 24.0861 27.4771 22.3628 27.9866C20.6395 28.4961 18.7977 28.4349 17.112 27.8122C15.4264 27.1894 13.9872 26.0384 13.0091 24.5309C12.031 23.0234 11.5665 21.2401 11.6847 19.447C11.803 17.6538 12.4977 15.947 13.6652 14.5809C14.8328 13.2149 16.4106 12.2628 18.1635 11.8668C19.9163 11.4708 21.7502 11.652 23.3917 12.3834"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M28.3333 13.3333L20 21.675L17.5 19.175"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9_35">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(10 10)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      POS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#124072] py-9 flex flex-row-reverse px-[30px] items-center relative md:px-[80px] lg:px-[130px] ">
            <div className="relative md:w-[50%] w-full">
              <h2 className="text-[28px] text-[#ffffff] text-justify font-bold mb-[48px]">
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
                  <img src="/pos-empulse.png.png" alt="" />
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

          {/* Features */}
          <section className="bg-slate-100 py-9 px-[30px] relative md:px-[80px] lg:px-[130px] ">
            <h2 className="text-[28px] text-[#124072de] text-center font-bold mb-[48px]">
              WHY YOU SHOULD USE PAYLODE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 ">
              <div className="shadow rounded-lg bg-slate-100 text-center py-4 px-3">
                <img
                  src="/home.png"
                  alt=""
                  className="h-[64px]  mx-auto mb-5"
                />
                <h2 className="text-[24px] text-[#124072de] font-bold">
                  Accessible Dashboard
                </h2>
                <p className="text-gray-500">
                  Paylode makes transaction easy by creating a user-friendly
                  transaction dashboard for every day business track and to
                  optimize user data
                </p>
              </div>
              <div className="shadow rounded-lg bg-slate-100 text-center py-4 px-3">
                <img
                  src="/cashless-payment.png"
                  alt=""
                  className="h-[64px] mx-auto mb-5"
                />
                <h2 className="text-[24px] text-[#124072de] font-bold">
                  Easy Payment
                </h2>
                <p className="text-gray-500">
                  We allow your customers make payment easily at anytime and
                  anywhere in the world through our seamless channels.
                </p>
              </div>
              <div className="shadow rounded-lg bg-slate-100 text-center py-4 px-3">
                <img
                  src="/secure-payment.png"
                  alt=""
                  className="h-[64px] mx-auto mb-5"
                />
                <h2 className="text-[24px] text-[#124072de] font-bold">
                  Secured Payment
                </h2>
                <p className="text-gray-500">
                  Our online payment system uses advanced security measures
                  including multi-factor authentication to ensure the safety of
                  user account.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-slate-100 py-9 px-[30px] h-[80vh] relative md:px-[80px] lg:px-[130px] ">
            <div className="w-full flex justify-center">
              <div
                id="contact"
                className="bg-[#90c841] w-[70%] absolute rounded-lg -bottom-[20%] py-9 px-[30px] md:px-[70px] lg:px-[100px]  "
              >
                <div>
                  <h2 className="text-[28px] text-[#124072de] font-bold mb-4 text-center">
                    SEND A MAIL
                  </h2>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    action=""
                    className="flex flex-col space-y-2  "
                  >
                    <div className="flex gap-2   flex-col md:flex-row md:space-x-2 md:justify-between">
                      <input
                        {...register("name")}
                        placeholder="Name"
                        type="text"
                        className="contactInput w-full"
                        required
                      />
                      <input
                        {...register("email")}
                        placeholder="Email"
                        type="email"
                        className="contactInput w-full"
                        required
                      />
                    </div>
                    <input
                      {...register("subject")}
                      placeholder="Subject"
                      type="text"
                      className="contactInput"
                      required
                    />
                    <textarea
                      {...register("message")}
                      placeholder="Message"
                      className="contactInput"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-[#124072] md:w-[60%] self-center py-5 px-10 md:px-4 rounded-md text-gray-50 font-bold text-lg"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* FAQs */}
          <section></section>

          {/* contact us */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;