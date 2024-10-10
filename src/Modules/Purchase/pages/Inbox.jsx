import React from "react";
import { PiPrinter } from "react-icons/pi";
import Header from "./Header";

function Inbox() {
  function handleSubmit() {
    alert("submitted");
  }
  return (
    <div>
      <Header />
      <div className="flex-grow p-6 bg-white">
        <div className="container mx-auto bg-gray-300 p-6 rounded-lg shadow-md">
          <div className="">
            <div className="flex flex-row justify-center">
              <div className="justify-center">
                <h1 className="text-xl font-semibold">ADD NEW PRODUCT</h1>
              </div>
              <div className="justify-end">
                <PiPrinter className="text-2xl" />
              </div>
            </div>
            <div className="">
              <form className="flex flex-row" onSubmit={handleSubmit}>
                {/* <label className="flex flex-row" htmlFor="">Product Name</label> */}
                <input
                  type="text"
                  placeholder="Enter product name"
                  className="w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}

export default Inbox;
