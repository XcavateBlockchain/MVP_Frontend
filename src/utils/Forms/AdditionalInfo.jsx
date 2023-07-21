import React, { useState } from "react";

const AdditionalInfo = () => {
  const initialFormData = Object.freeze({
    development_number: 0,
    permission_number: 0,
    local_authority: "",
    deed_number:0,
    map_url: "",
  });
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    // ... submit to API or something
  };
  return (
    
    <>
      <div className="container m-auto flex justify-center items-center flex-col h-[100%]">
        
        <div className="py-10 px-10 rounded-sm bg-white w-[60%]">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="development_number"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
              >
                Property development number*
              </label>
              <input
                type="number"
                onChange={handleChange}
                id="development_number"
                name="development_number"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                placeholder="Nikku Apartment"
                required
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="permission_number"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
              >
                Planning permission number*
              </label>
              <input
                type="number"
                onChange={handleChange}
                id="permission_number"
                name="permission_number"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                placeholder="House , Apartment , Land"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="local_authority"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
              >
                Local Authority*
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="local_authority"
                name="local_authority"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                placeholder="Nikku Apartment"
                required
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="deed_number"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
              >
                Title deed number*
              </label>
              <input
                type="number"
                onChange={handleChange}
                id="deed_number"
                name="deed_number"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                placeholder="House , Apartment , Land"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="map_url"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
              >
                Google map link
              </label>
              <input
                type="url"
                onChange={handleChange}
                id="map_url"
                name="map_url"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                placeholder="Url Map to"
                required
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white button rounded-md w-full mt-10 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold  text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800"
          >
            Send For Verification
          </button>
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
