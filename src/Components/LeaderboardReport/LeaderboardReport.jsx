import React from "react";
import Logo from "./Logo";
import TopCandidates from "./TopCandidates";
import TotalInterview from "./TotalInterview";
import Rating from "./Rating";

const LeaderboardReport = () => {
  return (
    <>
      <div className="container my-5">
        <div className="card border-warning">
          <div className="card-body">
            <Logo />
            <hr />
            <TopCandidates />
            <hr />
            <TotalInterview />
            <hr />
            <Rating />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderboardReport;
