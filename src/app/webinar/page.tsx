import React from "react";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";


const page = () => {
  return (
    <div>
      <Header page="Webinar" />
      <div className="w-full mt-20">
        <img
          src="images/webinar/Webinar-Mobile.svg"
          alt="Webinar"
          className={`w-full sm:hidden`}
        />
        <img
          src="images/webinar/Webinar.svg"
          alt="Webinar"
          className={`w-full hidden sm:block`}
        />
        <Footer />
      </div>
    </div>
  );
};

export default page;
