import React from "react";
import { BsCircle } from "react-icons/bs";
const ListedInfo = () => {
  return (
    <>
      <div className="container m-auto flex justify-center items-center  flex-col h-[100%]">
        <div className="py-10 px-10 rounded-sm bg-white w-[60%] flex justify-center items-center  ">
          <div className="w-[60%]">
            <div className="mb-6">
              <label
                htmlFor="listedType"
                className="block mb-2  text-sm font-bold text-gray-900 dark:text-black"
              >
                Listing Type
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                placeholder="Sale,rent,lease"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
              >
                Listing Price
              </label>
              <input
                type="number"
                id="ptitle"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                placeholder="Nikku Apartment"
                required
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
              >
                Listing Price
              </label>
              <input
                type="number"
                id="ptype"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                placeholder="House , Apartment , Land"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
              >
                Estimated Rental Income
              </label>
              <input
                type="number"
                id="ptitle"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                placeholder="Nikku Apartment"
                required
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
              >
                Listing Price
              </label>
              <input
                type="number"
                id="ptype"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                placeholder="House , Apartment , Land"
                required
              />
            </div>
          </div>
            <button
              type="submit"
              className="text-white rounded-md font-bold w-full mt-10 button  focus:ring-4 focus:outline-none focus:ring-blue-300  text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListedInfo;
