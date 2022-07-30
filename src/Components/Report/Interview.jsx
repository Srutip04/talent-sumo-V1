import React from "react";

const Interview = () => {
  return (
    <>
      <div className="container">
        <p align='justify' className="my-4">
          For video interviews, our AI algorithms rate each answer of the candidate to distribute them into four groups or cohorts, for each of the parameters we are tracking.
          <ol type="a">
            <li>
              <h6> Cohort A: Top 25% of the responses </h6>
            </li>
            <li>
              <h6> Cohort B: Top 50% of the responses </h6>
            </li>
            <li>
              <h6> Cohort C: Bottom 50% of the response </h6>
            </li>
            <li>
              <h6> Cohort D: Bottom 25% of the response. </h6>
            </li>
          </ol>
          These cohorts provide a reasonable level of estimate in terms of what separates top interview performers from the rest. Our approach is not to provided micro ratings of each parameter but a high-level comparison that provides a competitive analysis of where the candidates could understand their relative rankings.
        </p>
      </div>
      <hr />
      <hr />
      <p>
        Our models suggest an overall rate of “Shortlisted” for the candidate. We understand that for each job and culture the preferences can be different hence we also report a comprehensive rating of the candidate across multiple skill dimensions (these are elaborated in Page 2 of the report) as displayed in the table below. Some of the natural pointers on how the candidates might improve are also suggested in the pages that follow.
      </p>
    </>
  );
};

export default Interview;
