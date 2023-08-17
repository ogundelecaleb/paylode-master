/* eslint-disable */

import React from "react";
import SampleCode from "../component/sampleCode";

const Paylodecheckout = () => {
  return (
    <div>
      <h2 className="font-bold text-xl text-gray-600 mb-4">Paylode Checkout</h2>
      <p className="text-[14px] text-gray-600 mb-3">
        Paylode Checkout is an inline smart payment form that works seamlessly
        across devices. It supports all the payment methods you get with the
        checkout standard integration
      </p>
      <h2 className="text-lg text-gray-600 mb-3">How it works</h2>
      <p className="text-[14px] text-gray-600 mb-3">
        Paylode checkout allows you to embed the payment form on your webpage
        using our{" "}
        <code className="px-2 py-1 bg-gray-200 rounded-md">
          Paylodecheckout()
        </code>{" "}
        JavaScript function. The function responds to your request in accrodance
        with the request configuration set. If you specify a redirect_url in
        your request, the function will redirect your users to the provided
        redirect URL when they complete the payment.
      </p>
      <h3 className="text-lg text-gray-600 mb-3">Parameter Descripton</h3>M
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Required
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      public key
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <code className="px-1 py-1 bg-gray-200 rounded-lg">string</code>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Otto</td>
                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  </tr>
                  <tr className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      currency
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <code className="px-1 py-1 bg-gray-100 rounded-lg">string</code>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                  </tr>
                  <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                      amount
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <code className="px-1 py-1 bg-gray-200 rounded-lg">string</code>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-lg text-gray-600 mb-3">Before you begin</h2>
      <p className="text-[14px] text-gray-600 mb-3">
        Ensure you have your public key. You can find this on the Paylode
        Merchant dashboard under Settings {">"} api keys. If you don’t have an
        account with us yet, you can create a test account now
      </p>
      <h2 className="text-lg text-gray-600 mb-3">
        Add the code snippet to your site
      </h2>
      <p className="text-[14px] text-gray-600 mb-3">
        Adding the checkout.js script to your page
        <br />
        Adding this will automatically inlcude all the features and payment
        methods the paylode checkout has.
      </p>
      <div className="overflow-x-auto flex flex-col ">
        <div
          className="w-100 flex justify-between text-xs items-center px-4"
          style={{
            background: "rgb(25, 33, 71)",
            height: "29px",
            color: "rgb(152, 162, 176)",
          }}
        >
          <div>checkout.html</div>
          <img
            src="/static/media/copyx.e55e65c1.svg"
            className="cursor-pointer"
          />
        </div>
        <pre
          className="language-markup inline-block overflow-x-auto"
          style={{
            background: "rgb(31, 38, 86)",
            color: "white",
            fontFamily: "Consolas",
            hyphens: "none",
            lineHeight: "1.5",
            tabSize: "4",
            textAlign: "left",
            whiteSpace: "pre",
            wordBreak: "normal",
            wordSpacing: "normal",
            overflowWrap: "normal",
          }}
        >
          <code
            className="language-markup inline-block overflow-x-auto"
            style={{
              background: "none",
              color: "white",
              fontFamily: "Consolas",
              hyphens: "none",
              lineHeight: "1.5",
              tabSize: "4",
              textAlign: "left",
              whiteSpace: "pre",
              wordBreak: "normal",
              wordSpacing: "normal",
              overflowWrap: "normal",
            }}
          >
            <span
              className="linenumber react-syntax-highlighter-line-number"
              style={{
                display: "inline-block",
                minWidth: "2.25em",
                paddingRight: "1em",
                textAlign: "right",
                userSelect: "none",
                color: "rgb(152, 162, 176)",
              }}
            >
              1
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &lt;
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              html
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &gt;
            </span>
            <span>
              <br />
            </span>
            <span
              className="linenumber react-syntax-highlighter-line-number"
              style={{
                display: "inline-block",
                minWidth: "2.25em",
                paddingRight: "1em",
                textAlign: "right",
                userSelect: "none",
                color: "rgb(152, 162, 176)",
              }}
            >
              2
            </span>

            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &lt;
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              head
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &gt;
            </span>
            <span>
              <br />
            </span>
            <span
              className="linenumber react-syntax-highlighter-line-number"
              style={{
                display: "inline-block",
                minWidth: "2.25em",
                paddingRight: "1em",
                textAlign: "right",
                userSelect: "none",
                color: "rgb(152, 162, 176)",
              }}
            >
              3
            </span>

            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &lt;
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              title
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &gt;
            </span>
            <span>Sample Paylode Checkout</span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &lt;/
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              title
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &gt;
            </span>
            <span>
              <br />
            </span>
            <span
              className="linenumber react-syntax-highlighter-line-number"
              style={{
                display: "inline-block",
                minWidth: "2.25em",
                paddingRight: "1em",
                textAlign: "right",
                userSelect: "none",
                color: "rgb(152, 162, 176)",
              }}
            >
              4
            </span>
            <span> </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &lt;
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              script
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              {" "}
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              src
            </span>
            <span
              className="token attr-equals"
              style={{ color: "rgb(103, 192, 222)" }}
            >
              =
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              "
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              src="https://master--paylode-checkout.netlify.app/checkout.js"
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              "
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &gt;
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &lt;/
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              script
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &gt;
            </span>
            <span>
              <br />
            </span>
            <span
              className="linenumber react-syntax-highlighter-line-number"
              style={{
                display: "inline-block",
                minWidth: "2.25em",
                paddingRight: "1em",
                textAlign: "right",
                userSelect: "none",
                color: "rgb(152, 162, 176)",
              }}
            >
              5
            </span>
            <span> </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &lt;/
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              head
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &gt;
            </span>
            <span>
              <br />
            </span>
            <span
              className="linenumber react-syntax-highlighter-line-number"
              style={{
                display: "inline-block",
                minWidth: "2.25em",
                paddingRight: "1em",
                textAlign: "right",
                userSelect: "none",
                color: "rgb(152, 162, 176)",
              }}
            >
              6
            </span>
            <span> </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &lt;
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              body
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &gt;
            </span>
            <span>
              <br />
            </span>
            <span
              className="linenumber react-syntax-highlighter-line-number"
              style={{
                display: "inline-block",
                minWidth: "2.25em",
                paddingRight: "1em",
                textAlign: "right",
                userSelect: "none",
                color: "rgb(152, 162, 176)",
              }}
            >
              7
            </span>
            <span> </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &lt;
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              button
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              {" "}
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              onlick
            </span>
            <span
              className="token attr-equals"
              style={{ color: "rgb(103, 192, 222)" }}
            >
              =
            </span>
            <span classNameName="token" style={{ color: "rgb(103, 192, 222)" }}>
              "
            </span>
            <span classNameName="token" style={{ color: "rgb(103, 192, 222)" }}>
              Paylodecheckout()
            </span>
            <span classNameName="token" style={{ color: "rgb(103, 192, 222)" }}>
              "
            </span>
            <span classNameName="token" style={{ color: "rgb(103, 192, 222)" }}>
              &gt;
            </span>
            <span>Pay Now</span>
            <span classNameName="token" style={{ color: "rgb(103, 192, 222)" }}>
              &lt;/
            </span>
            <span classNameName="token" style={{ color: "rgb(103, 192, 222)" }}>
              button
            </span>
            <span classNameName="token" style={{ color: "rgb(103, 192, 222)" }}>
              &gt;
            </span>
            <span>
              <br />
            </span>
            <span
              classNameName="linenumber react-syntax-highlighter-line-number"
              style={{
                display: "inline-block",
                minWidth: "2.25em",
                paddingRight: "1em",
                textAlign: "right",
                userSelect: "none",
                color: "rgb(152, 162, 176)",
              }}
            >
              8
            </span>
            <span> </span>
            <span classNameName="token" style={{ color: "rgb(103, 192, 222)" }}>
              &lt;/
            </span>
            <span classNameName="token" style={{ color: "rgb(103, 192, 222)" }}>
              body
            </span>
            <span classNameName="token" style={{ color: "rgb(103, 192, 222)" }}>
              &gt;
            </span>
            <span>
              <br />
            </span>
            <span
              className="linenumber react-syntax-highlighter-line-number"
              style={{
                display: "inline-block",
                minWidth: "2.25em",
                paddingRight: "1em",
                textAlign: "right",
                userSelect: "none",
                color: "rgb(152, 162, 176)",
              }}
            >
              9
            </span>
            <span></span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &lt;/
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              html
            </span>
            <span className="token" style={{ color: "rgb(103, 192, 222)" }}>
              &gt;
            </span>
          </code>
        </pre>
      </div>
      <h2>Adding the Seerbit.js script to your page</h2>
      <p>
        Adding this will automatically inlcude all the features and payment
        methods the seerbit checkout has. Including our advanced fraud detection
        tools whenever your customers attempts to make a payment
      </p>
     <div><SampleCode/></div>
    </div>
  );
};

export default Paylodecheckout;
