import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
const PropertyInfo = () => {
  const [formaData, setFormData] = useState({
    p_title: "",
    p_number: "",
    p_street: "",
    p_city: "",
    p_code: "",
    p_desc: "",
  });
  const [formImages, setFormImages] = useState({
    floor_plan: {
      preview: "",
      data: "",
    },
    sale_agreement: {
      preview: "",
      data: "",
    },
    property_image_1: {
      preview: "",
      data: "",
    },
    property_image_2: {
      preview: "",
      data: "",
    },
    property_image_3: {
      preview: "",
      data: "",
    },
    property_image_4: {
      preview: "",
      data: "",
    },
  });

  const [inputFields, setInputFields] = useState([
    {
      feature: "",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        feature: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    let name = e.target.name;
    setFormImages({ ...formImages, [name]: img });
  };

  const onFormChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formaData, [name]: value });
    console.log(formaData);
  };

  const formSubmissionClick = () => {
    const data = {
      formaData,
      formImages,
      features: inputFields,
    };
    console.log(data);
  };
  return (
    <>
      <div className="container  m-auto flex justify-center items-center flex-col h-[100%]">
        <div className="py-10 px-20 rounded-md bg-white w-[60%]">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
              >
                Property Title
              </label>
              <input
                type="text"
                id="ptitle"
                name="p_title"
                onChange={(e) => onFormChange(e)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Nikku Apartment"
                required
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
              >
                Property Number
              </label>
              <input
                type="number"
                id="ptype"
                name="p_number"
                onChange={(e) => onFormChange(e)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="House , Apartment , Land"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="p_street"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
            >
              Property Address
            </label>
            <div className="grid md:grid-cols-3 md:gap-3">
              <input
                type="text"
                id="p_street"
                name="p_street"
                onChange={(e) => onFormChange(e)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Street"
                required
              />
              <input
                type="text"
                id="p_city"
                name="p_city"
                onChange={(e) => onFormChange(e)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="City"
                required
              />
              <input
                type="text"
                id="p_code"
                name="p_code"
                onChange={(e) => onFormChange(e)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Zip Code"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="p_desc"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
            >
              Property Description
            </label>
            <textarea
              id="p_desc"
              name="p_desc"
              rows="4"
              onChange={(e) => onFormChange(e)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="We would like to know more about you as a real estate developer..."
            ></textarea>
          </div>

          <div className="mb-6">
            <label
              htmlFor="feature"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
            >
              Property Feature
            </label>
            <div className="grid md:grid-cols-3 md:gap-3">
              {inputFields.map((data, index) => {
                const { fullName, emailAddress, salary } = data;
                return (
                  <div className="flex">
                    <input
                      type="text"
                      key={index}
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={fullName}
                      name="feature"
                      id="ptype"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="Fetatures"
                      required
                    />
                    {inputFields.length !== 1 ? (
                      <AiFillCloseCircle
                        className="mx-2 cursor-pointer"
                        size={30}
                        onClick={removeInputFields}
                      />
                    ) : (
                      ""
                    )}{" "}
                  </div>
                );
              })}
            </div>
            <span
              className="mt-1 text-sm text-blue-600 cursor-pointer"
              onClick={addInputField}
            >
              Add More
            </span>
          </div>

          <label
            htmlFor="id"
            className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
          >
            Document Upload
          </label>
          <div className="flex">
            <div className="flex justify-center flex-col">
              <label
                htmlFor="floor_plan"
                className="block mb-4 text-sm font-bold text-gray-900 dark:text-gray-500 "
              >
                Upload Floor Plan File
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="floor_plan"
                  className="flex flex-col items-center justify-center w-full h-34 px-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   dark:border-gray-600 dark:hover:border-gray-500"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    id="floor_plan"
                    className="hidden"
                    name="floor_plan"
                    onChange={(e) => handleFileChange(e)}
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-center flex-col mx-3">
              <label
                htmlFor="id"
                className="block mb-4 text-sm font-bold text-gray-900 dark:text-gray-500 "
              >
                Sales Agreements
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="sale_agreement"
                  className="flex flex-col items-center justify-center w-full h-34 px-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   dark:border-gray-600 dark:hover:border-gray-500"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id="sale_agreement"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e)}
                    type="file"
                    className="hidden"
                    name="sale_agreement"
                  />
                </label>
              </div>
            </div>
          </div>

          <label
            htmlFor="id"
            className="block mb-4 mt-3 text-sm font-bold text-gray-900 dark:text-gray-500 "
          >
            Upload property image maximum of 1 -4
          </label>
          <div className="grid md:grid-cols-4 md:gap-2">
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="property_image_4"
                  className="flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 px-5   dark:border-gray-600 dark:hover:border-gray-500 "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-center text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id="property_image_4"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e)}
                    type="file"
                    className="hidden"
                    name="property_image_4"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="property_image_1"
                  className="flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 px-5   dark:border-gray-600 dark:hover:border-gray-500 "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-center text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id="property_image_1"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e)}
                    type="file"
                    className="hidden"
                    name="property_image_1"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="property_image_2"
                  className="flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 px-5   dark:border-gray-600 dark:hover:border-gray-500 "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-center text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id="property_image_2"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e)}
                    type="file"
                    className="hidden"
                    name="property_image_2"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="property_image_3"
                  className="flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 px-5   dark:border-gray-600 dark:hover:border-gray-500 "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-center text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id="property_image_3"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e)}
                    type="file"
                    className="hidden"
                    name="property_image_3"
                  />
                </label>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={formSubmissionClick}
            className="text-white button rounded-md w-full mt-10 focus:ring-4 focus:outline-none font-bold text-sm px-5 py-2.5 text-center"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PropertyInfo;
