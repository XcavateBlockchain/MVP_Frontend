import DevProfileStat from "./DevProfileStat";
import logoBackgroundImage from "../../assets/bg-logo.svg";

const DevProfileStatContianer = () => {
  const profileStatsData = [
    { statTitle: "NFT's sold", statValue: "0" },
    { statTitle: "Total NFT's minted", statValue: "£0" },
    { statTitle: "Properties listed", statValue: "0" },
    { statTitle: "Total property value", statValue: "0" },
  ];

  return (
    <section className=" flex justify-center gap-5 ">
      {profileStatsData.map((data, index) => (
        <DevProfileStat
          key={index}
          statTitle={data.statTitle}
          statValue={data.statValue}
          backgroundImage={logoBackgroundImage}
        />
      ))}
    </section>
  );
};

export default DevProfileStatContianer;
