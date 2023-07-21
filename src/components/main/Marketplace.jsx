import React from "react";
import { data } from "../../utils/assets";
import AssetCard from "../cards/AssetCard";
const Marketplace = () => {
  return (
    <>
      {/* <div className="container banner h-[14rem] border w-[100%] relative p-4 mx-auto mb-5">
      <div className="w-[120px] h-[120px] left-10 p-1 absolute bottom-[-50px] rounded-full  profile-banner"/>
      </div> */}
      <div className="text-center w-full mt-40">
        <h2 className="text-3xl text-black">Explore The Marketplace</h2>
      </div>
      <div className="px-4  py-10 grid grid-cols-3 gap-2 container mx-auto">
       {data.map((item)=>{
         return <AssetCard item={item} key={item._id} />
       })}
      </div>
    </>
  );
};

export default Marketplace;
