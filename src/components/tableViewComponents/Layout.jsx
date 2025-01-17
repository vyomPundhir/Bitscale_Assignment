import React from "react";
import TableComponent from "./TableComponent";
import TableNavbar from "./TableNavbar";
import TableSidebar from './TableSidebar'

const Layout = () => {
  return (
      <section className="">
        <div className="">
          {/* <TableSidebar /> */}
        </div>
        <div className="">
          <TableNavbar/>
          <TableComponent/>
          <button className="px-[20px] py-[10px]">+ Add Row</button>
        </div>
      </section>
  );
};

export default Layout;
