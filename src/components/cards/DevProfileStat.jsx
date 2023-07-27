const DevProfileStat = ({ statValue, statTitle, backgroundImage }) => {
  return (
    <div className=' relative w-[330px] h-[187px] border'>
      <div
        className=' w-[175px] h-[175px] absolute bottom-[-10px] right-[-10px]'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <p className=' font-graphik-bold absolute top-6 left-6'>{statTitle}</p>
      <p className=' font-graphik-regular text-2xl absolute top-[94px] left-[124px]'>{statValue}</p>
    </div>
  )
}

export default DevProfileStat
