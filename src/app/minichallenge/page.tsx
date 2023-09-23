import React from "react";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";


const page = () => {
  return (
    <div>
      <Header page="Mini Challenge" />
      <div className="w-full mt-20">
        <img
          src="images/minichallenge/MiniChallenge-Mobile.svg"
          alt="Mini Challenge"
          className={`w-full sm:hidden`}
        />
        <img
          src="images/minichallenge/MiniChallenge.svg"
          alt="Mini Challenge"
          className={`w-full hidden sm:block`}
        />
        <Footer />
      </div>
    </div>
  );
};

export default page;
