import React,{useState} from "react";
import PropertyInfo from "../../utils/Forms/PropertyInfo";
import { MdVerified } from "react-icons/md";
import AdditionalInfo from "../../utils/Forms/AdditionalInfo";
import ListedInfo from "../../utils/Forms/ListedInfo";
const PropertyListing = () => {
    const [page,setPage]= useState(1);
    const onChangingPage = (num) =>{
        setPage(num);
        console.log(num);
    }
  return (
    <>
      <div className="container mt-20  m-auto flex justify-center items-center flex-col h-[100%]">
        <label
          htmlFor="dev"
          className="mb-4 text-sm mt-10 font-bold flex text-gray-900 dark:text-black"
        >
          Bob santhos <span className="text-gray-500 mx-2">#7832893232dhc</span>{" "}
          <MdVerified color="blue" className="mx-1" size={18} />
        </label>
        <div className="py-4 px-10 rounded-sm border border-black bg-white w-[60%] mb-2 flex justify-between">
          <div className="flex items-center  ">
            <input
              id="bordered-radio-1"
              type="radio" 
              checked={page===1}
       
              name="info"
              onClick={(e)=>onChangingPage(1)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 ml-2 cursor-pointer text-md font-bold text-gray-900 dark:text-black"
            >
              {" "}
              Property Information
            </label>
          </div>
          <div className="flex items-center ">
            <input
              
              id="bordered-radio-2"
              type="radio"
              checked={page===2}
              name="info"
              onClick={(e)=>onChangingPage(2)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-radio-2"
              className="w-full py-4 ml-2 text-md cursor-pointer font-bold text-gray-900 dark:text-black"
            >
              Pricing and listing Details
            </label>
          </div>
          <div className="flex items-center ">
            <input
              checked={page===3}
              id="bordered-radio-3"
              type="radio"
       
              name="info"
              onClick={(e)=>onChangingPage(3)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-radio-3"
              className="w-full py-4 ml-2 text-md cursor-pointer font-bold text-gray-900 dark:text-black"
            >
              Additional Information
            </label>
          </div>

        </div>
          {page==1 && <PropertyInfo/>}
          {page==2 && <ListedInfo/>}
          {page==3 && <AdditionalInfo/>}
      </div>
    </>
  );
};

export default PropertyListing;
