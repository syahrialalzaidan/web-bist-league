import React from "react";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";


export default function page() {
  return (
    <div>
      <Header page="Bootcamp" />
      <div className="w-full mt-20">
        <img
          src="images/bootcamp/BusinessCaseBootcamp-Mobile.svg"
          alt="Business Case Bootcamp"
          className={`w-full sm:hidden`}
        />
        <img
          src="images/bootcamp/BusinessCaseBootcamp.svg"
          alt="Business Case Bootcamp"
          className={`w-full hidden sm:block`}
        />
        <Footer />
      </div>
    </div>
  );
}
