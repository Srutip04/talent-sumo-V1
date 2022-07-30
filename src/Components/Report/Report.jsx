import React from "react";
import Logo from "./Logo";
import Interview from "./Interview";
import TopInterview from "./TopInterview";
import Rating from "./Rating";
import General from "./General";
import Appendix from "./Appendix";

const Report = () => {
  return (
    <>
      <div className="container my-5">
        <div className="card border-warning">
          <div className="card-body">
            <Logo />
            <hr />
            <Interview />
            <hr />
            <TopInterview />
            <hr />
            <Rating />
            <hr />
            <General />
            <hr />
            <Appendix />
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
