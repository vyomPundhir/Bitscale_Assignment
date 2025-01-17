import React from "react";
import { tableNavbarData } from "../../constants/tableViewConstants";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../atoms/theme/store";
import enrich from "../../assets/generalAssets/enrich.svg"
import enrichLight from "../../assets/generalAssets/enrichLight.svg"
import share from "../../assets/generalAssets/share.svg"
import shareLight from "../../assets/generalAssets/shareLight.svg"
import remove from "../../assets/generalAssets/delete.svg"
import download from "../../assets/generalAssets/download.svg"
import downloadLight from "../../assets/generalAssets/downloadLight.svg"

const TableNavbar = () => {
    const theme = useAtomValue(themeAtom)
  return (
    <section className="px-[20px] w-full py-[20px] flex flex-row justify-between items-center gap-[]">
      <div className="flex flex-row justify-center items-center gap-[20px] ">
        <input type="search" name="search" id="" placeholder="Search" className="px-[10px] py-[5px] rounded-md bg-[white] border-[1px] border-[black] w-[250px] dark:bg-[#151515] dark:border-[#838383]"/>

        {tableNavbarData.map((data) => (
          <div key={data.id} className="flex flex-row justify-center items-center gap-[7px]">
            <img src={theme==="light"? data.imageLight: data.imageDark} alt="" className="w-[20px]" />
            <span className="">{data.title}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center gap-[20px]">
        <div className="bg-[black] dark:bg-[white] py-[5px] px-[10px] rounded-md flex flex-row justify-center items-center text-white dark:text-black ">
          <img src={theme==="dark"? enrichLight : enrich} alt="" className="w-[20px]" />
          <span className="">Enrich</span>
        </div>
        <img src={theme==="light"? shareLight : share} alt="" className="w-[20px]" />
        <img src={theme==="light"? downloadLight : download} alt="" className="w-[20px]" />
        <img src={remove} alt="" className="w-[20px]" />
      </div>
    </section>
  );
};

export default TableNavbar;
