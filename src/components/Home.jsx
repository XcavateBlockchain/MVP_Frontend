import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/ilustration.png";
import AssetCard from "./cards/AssetCard";
import { data } from "../utils/assets";
import * as Kilt from '@kiltprotocol/sdk-js';

const Home = () => {
  return (
    <>
      <div className="flex justify-center flex-col  items-center h-auto">
        <div className="w-2/3 p-4 text-center mt-[3rem] flex justify-center items-center flex-col rounded-lg sm:p-8 ">
          <img src={illustration} className=" illustration" alt="Ilustration" />
          <h5 className="font-graphik-bold mb-[10px] text-5xl heading">
            Welcome TO THE LARGEST GLOBAL WEB3 REAL ESTATE INVESTOR COMMUNITY
          </h5>
          <p className=" font-dmsans-regular text-2xl text-body">
            Buy, sell and trade real world rental real estate through NFTs in a trustless fully dentralized way.
          </p>
          <button type="button" className="py-2.5  px-10 mr-2 mb-2 text-sm font-medium text-black border-2 border-form opacity-[0.8] rounded mt-6">
            <Link to="/market-place" className=" font-graphik-semibold text-lg text-body opacity-[0.8]">Explore</Link>
          </button>
        </div>
        <div className="grid grid-cols-3 w-full xl:w-2/3 gap-4 mb-20 ">
          <AssetCard item={data[0]} isHome={true} company={"https://xcavate.io/assets/chase-new-homes-logo.png"} />
          <AssetCard item={data[2]} isHome={true} company={"https://xcavate.io/assets/USA_Developments_logo.png"} />
          <AssetCard item={data[3]} isHome={true} company={"https://xcavate.io/assets/chase-new-homes-logo.png"} />
        </div>
      </div>
    </>
  );
};

export default Home;
