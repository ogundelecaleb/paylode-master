import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Developer = () => {
  const navigate = useNavigate;

  return (
    <div>
      <Header />
      <div className="gap-y-8 py-[48px] bg-slate-100 px-[16px] md:px-[50px] lg:px-[60px] flex flex-col md:flex-row  gap-5 w-full ">
        <div className="max-w-[250px] w-[367px]  left-0 border-r border-r-faint flex flex-col ">
          <Link to="/developer/">
            <button className="py-5 px-5 mt-5 cursor-pointer  hover:bg-gray-400">
              <p className="text-[14px] font-bold text-dark ">Overview </p>
            </button>
          </Link>

          <Link to="/developer/checkout">
            <button className="py-5 px-5 cursor-pointer hover:bg-gray-400">
              <p className="text-[14px] font-bold text-dark ">
                Inline Payment{" "}
              </p>
            </button>
          </Link>
        </div>

        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Developer;
