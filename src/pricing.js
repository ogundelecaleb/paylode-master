import React from "react";
import Footer from "./component/footer";
import Header from "./component/header";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const Pricing = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  const [faq6, setFaq6] = useState(false);
  const [faq7, setFaq7] = useState(false);
  const [faq8, setFaq8] = useState(false);

  const handleFaq1 = () => {
    setFaq1(!faq1);
  };
  const handleFaq2 = () => {
    setFaq2(!faq2);
  };
  const handleFaq3 = () => {
    setFaq3(!faq3);
  };
  const handleFaq4 = () => {
    setFaq4(!faq4);
  };
  const handleFaq5 = () => {
    setFaq5(!faq5);
  };
  const handleFaq6 = () => {
    setFaq6(!faq6);
  };
  const handleFaq7 = () => {
    setFaq7(!faq7);
  };
  const handleFaq8 = () => {
    setFaq8(!faq8);
  };

  return (
    <div>
      <Header />

      <section className="relative -z-10 bg-gray-200/80">
        <div className="w-full absolute top-[10%] bg-[#124072]/90 left-0 h-[400px] skew-y-12 -z-20"></div>
        <div
            className="gap-y-8 py-[48px]  px-[30px] md:px-[80px] lg:px-[130px]  items-center gap-5 w-full "
            >

          <h2 className="text-[1.7rem] lg:text-[2.5rem] font-extrabold text-center text-gray-800 tracking-wide">
            Fair Pricing
          </h2>
          <p className="text-gray-200 lg:px-[32px] text-center my-6">
            Our simple, transparent and fair pricing is the backbone of
            competitive advantages. Every day we strive to deliver a quality
            service that you can trust.
          </p>
          <div className="flex items-center justify-center mb-8 gap-3 ">
            <h2 className="text-2xl text-gray-100 font-bold ">
              Collection for Nigeria
            </h2>
            <img src="/ng.svg" alt="nigeria flag" />
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
              <div className="bg-[#124072] px-3 py-[16px] md:p-7 rounded-lg  ">
                <p className="text-gray-100">For Local Transaction </p>
                <h2 className="text-md mt-3 mb-3 pb-5 border-b border-b-white text-white">
                  <span className="md:text-[32px] text-[24px] text-white font-extrabold">
                    1.3%
                  </span>{" "}
                  Transaction Charge
                </h2>
                <ul className="text-white space-y-3">
                  <li className="flex items-center">
                    {" "}
                    <svg
                      className="mr-2"
                      width="50"
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
                    ₦75 transaction fee for transactions above ₦5,000
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2"
                      width="50"
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
                    No transaction fee for amounts below ₦5,000
                  </li>
                </ul>
              </div>

              <div className="bg-[#124072] px-3 py-[16px] md:p-7 rounded-lg ">
                <p className="text-gray-100">For International Transactions</p>
                <h2 className="text-md my-3 mt-3 pb-5 border-b border-b-white text-white">
                  <span className="md:text-[32px] text-[24px] text-white font-extrabold">
                    3.8%
                  </span>{" "}
                  Transaction Charge
                </h2>
                <ul className="text-white space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="mr-2"
                      width="50"
                      height="50"
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
                    Settlement in USD to a local domicilliary account in
                    our settlement bank
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2"
                      width="50"
                      height="50"
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
                    Accept payments and receive funds from anyone, anywhere in
                    the world.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-[48px] px-[30px]   relative md:px-[80px] lg:px-[130px]">
        <h2 className="text-[1.7rem] lg:text-[2.5rem] font-extrabold text-center text-gray-600 tracking-wide mb-3">
          Frequently Asked Questions
        </h2>
        <div className="py-7 border-t border-b ">
          <div onClick={handleFaq1} className="flex justify-between items-center mb-2 cursor-pointer">
            <p className="text-gray-500 font-bold text-lg">
              When do i get my settlement?
            </p>{" "}
            {faq1 ? (
              <button >
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq1}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq1 ? (
            <p className="py-4 px-5 bg-slate-100">
              All settlement will be received the next day for local payments.
              International payment varies depending on your region.
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="py-7  border-b ">
          <div onClick={handleFaq2} className="flex justify-between items-center mb-2 cursor-pointer">
            <p className="text-gray-500 font-bold text-lg">
              Who pay for the transaction charge?
            </p>{" "}
            {faq2 ? (
              <button>
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq2}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq2 ? (
            <p className="py-4 px-5 bg-slate-100">
              By default, your customers bear the transaction charges. You can
              change this on your dashboard anytime to your preference.
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="py-7  border-b ">
          <div onClick={handleFaq3} className="flex justify-between items-center mb-2 cursor-pointer">
            <p className="text-gray-500 font-bold text-lg">
              Can I get settled in USD
            </p>{" "}
            {faq3 ? (
              <button>
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq3}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq3 ? (
            <p className="py-4 px-5 bg-slate-100">
              Settlement in USD to a local domicilliary account in
              our settlement bank
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="py-7  border-b ">
          <div onClick={handleFaq4} className="flex justify-between items-center mb-2 cursor-pointer">
            <p className="text-gray-500 font-bold text-lg">
              How can I contact support for other questions?
            </p>{" "}
            {faq4 ? (
              <button>
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq4}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq4 ? (
            <p className="py-4 px-5 bg-slate-100">You can send an email to</p>
          ) : (
            ""
          )}
        </div>

        <div className="py-7  border-b ">
          <div onClick={handleFaq5} className="flex justify-between items-center mb-2 cursor-pointer">
            <p className="text-gray-500 font-bold text-lg">
              I signed up for Paylode and I'm yet to receive a
              verification/confirmation email
            </p>{" "}
            {faq5 ? (
              <button>
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq5}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq5 ? (
            <p className="py-4 px-5 bg-slate-100 text-justify">
              Double-check to confirm that the email you entered was accurate.
              Check your spam/promotion emails. Emails sent from Flutterwave are
              sent via info@paylode.net Please whitelist this address on your
              mailbox. <br /> <br /> If you still don't find the email, click
              the resend email link on your sign-up screen. <br /> <br /> After
              3 attempts and waiting for at least an hour, if you still don't
              receive a mail, please send a message to our support handles
              (Instagram & Facebook) or email us: sales@paylodeservices.com
              stating this issue. Learn more here
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="py-7  border-b ">
          <div onClick={handleFaq6} className="flex justify-between items-center mb-2 cursor-pointer">
            <p className="text-gray-500 font-bold text-lg">
              How much does it cost to create a Paylode account?
            </p>{" "}
            {faq6 ? (
              <button>
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq6}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq6 ? (
            <p className="py-4 px-5 bg-slate-100 text-justify">
              Nothing! You can create an account and set it up to receive
              payments on Paylode completely free. Flutterwave only charges
              fees per transaction on transfers and payments you receive. You
              can find more information on Paylode pricing <a href="http://paylodeservices.com/pricing" target="blank" className="text-[#124072] underline">here</a>
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="py-7  border-b ">
          <div onClick={handleFaq7} className="flex justify-between items-center mb-2 cursor-pointer">
            <p className="text-gray-500 font-bold text-lg">
              Can I get settled in USD
            </p>{" "}
            {faq7 ? (
              <button >
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq7}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq7 ? (
            <p className="py-4 px-5 bg-slate-100">
              Settlement in USD to a local domicilliary account in
              our settlement bank
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="py-7  border-b ">
          <div   onClick={handleFaq8} className="flex justify-between items-center mb-2 cursor-pointer">
            <p className="text-gray-500 font-bold text-lg">
              Can I get settled in USD
            </p>{" "}
            {faq8 ? (
              <button >
                <IoIosArrowUp />{" "}
              </button>
            ) : (
              <button onClick={handleFaq8}>
                <IoIosArrowDown />
              </button>
            )}
          </div>
          {faq8 ? (
            <p className="py-4 px-5 bg-slate-100">
              Settlement in USD to a local domicilliary account in
              our settlement bank
            </p>
          ) : (
            ""
          )}
        </div>

        <div></div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
