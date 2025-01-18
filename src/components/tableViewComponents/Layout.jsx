import React from "react";
import TableComponent from "./TableComponent";
import TableNavbar from "./TableNavbar";
import TableSidebar from "./TableSidebar";

const Layout = () => {
  return (
    <section className="">
      {/* <div className="">
          <TableSidebar />
        </div> */}
      <div className="">
        <TableNavbar />
        <div className="overflow-x-auto xs:w-full w-[300px]">
          <TableComponent />
        </div>

        <button className="px-[20px] py-[10px] dark:text-blue-600">
          + Add Row
        </button>
      </div>
    </section>
  );
};

export default Layout;
