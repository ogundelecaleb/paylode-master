import React, { useState } from "react";
import Header from "./component/header";
import Footer from "./component/footer";

import { FileUploader } from "react-drag-drop-files";

const Support = () => {
  const fileTypes = ["JPG", "PNG", "GIF"];

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div>
      <Header />
      <section className="gap-y-8 py-[48px] bg-slate-100 px-[16px] md:px-[50px] lg:px-[60px] flex flex-col md:flex-row items-center gap-5 w-full ">
        <div className="w-full md:w-[60%] lg:pr-[60px]">
          <h2 className="text-[1.9rem] lg:text-[3rem] font-extrabold text-gray-600 tracking-wide  ">
            24/7 Dedicated Customer Support
          </h2>
          <p className="text-[1.3rem] lg:text-[2rem]  text-gray-600 ">
            We value our customers, and our dedicated support team is available
            round the clock to assist you with any queries or concerns you may
            have.
          </p>
        </div>
        <div className="w-full md:w-[40%]">
          <img
            src="/customer-support.jpg"
            alt="customer support"
            className="rounded-lg "
          />
        </div>
      </section>

      <section className="gap-y-8 py-[48px] bg-slate-100 px-[16px] md:px-[50px] lg:px-[60px]  items-center gap-5 w-full ">
        <h2 className="text-[1.9rem] lg:text-[3rem] font-extrabold text-gray-600 tracking-wide  text-center ">
          How can we help?
        </h2>

        <p className="text-[16px] md:text-[20px] lg:text-[24px] max-w-[70%] text-center mx-auto">
          If you have a complaint or an enquiry, please feel free to inform us.
          We guarantee a response within 24 hours or even sooner.
        </p>

        <form
          // ref={form}
          // onSubmit={sendEmail}
          // onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col space-y-2 mt-[40px]  "
        >
          <label>
            Name<span className="text-red-500">*</span>
          </label>
          <input
            // {...register("name")}
            type="text"
            name="user_name"
            placeholder="Name"
            className="contactInput w-full md:w-[70%] "
            required
          />

          <label>
            Email<span className="text-red-500">*</span>
          </label>
          <input
            placeholder="Email"
            type="email"
            name="user_email"
            className="contactInput w-full md:w-[70%]"
            required
          />

          <div className="py-4">
            <p>What type of support are you looking for?</p>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="topping"
                name="General Enquiry"
                value="General Enquiry"
              />
              General Enquiry</div>
              <div className="flex items-cente gap-2">

              <input
                type="checkbox"
                id="topping"
                name="Tech"
                value="Tech"
              />{" "}
              Tech
              </div>
              <div className="flex items-cente gap-2">

              <input
                type="checkbox"
                id="topping"
                name="Operational Issue"
                value="Operational Issue"
              />{" "}
              Operational Issue
              </div>
              <div className="flex items-cente gap-2">

              <input
                type="checkbox"
                id="topping"
                name="Transaction Issue"
                value="Transaction Issue"
              />
              Transaction Issue
              </div></div>{" "}
          </div>

          <label>
            Transaction Reference<span className="text-red-500">(optional)</span>
          </label>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="contactInput w-full md:w-[70%] "
            required
          />


          <label>Description</label>
          <textarea
            placeholder="Message"
            name="message"
            className="contactInput w-full md:w-[70%]"
          ></textarea>
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            className="my-[15px]"
          />

          <p className="text-gray-600 text-sm md:text-md py-[25px]  w-full md:w-[70%]">
            Upon clicking submit below, I acknowledge that I have reviewed
            Paylode's{" "}
            <a
              href="https://paylodeservices.com/termsofuse"
              target="_blank"
               rel="noreferrer"
              className="underline text-[#124072de]"
            >
              Privacy Policy
            </a>{" "}
            and give my consent for Paylode to store and process the personal
            information I provided above. This permission is granted to
            facilitate the delivery of the requested content.
          </p>
          <button
            type="submit"
            className="bg-[#124072] md:w-[60%]  py-2 md:py-5 md:px-10  px-4 rounded-md text-gray-50 text-md"
          >
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Support;
