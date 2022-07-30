import React from "react";

const TopCandidates = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-center mt-5 mb-3">
          TOP CANDIDATES OF THE MONTH REPORT
        </h3>
        <div className="row mt-5">
          <div className="col-md-6 text-center">
            <div><h5>Track : <span className="text-warning">Hiring</span></h5></div>
            <div><h5>Month : <span className="text-warning">June 2022</span></h5></div>
            <div><h5>Position:</h5></div>
          </div>
          <div className="col-md-6 text-center">
            <div><h5>Company : <span className="text-warning">Name</span></h5></div>
            <div><h5>Position Code : <span className="text-warning">5665</span></h5></div>
          </div>
        </div>
        <p align="justify" className="my-5">
          For video interviews, our AI algorithms rate each answer of the
          candidate to distribute them into four groups or cohorts, for each
          of the parameters we are tracking.
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
          These cohorts provide a reasonable level of estimate in terms of
          what separates top interview performers from the rest. Our approach
          is not to provided micro ratings of each parameter but a high-level
          comparison that provides a competitive analysis of where the
          candidates could understand their relative rankings.
          <br />
          <br />
          <span style={{ fontWeight: "700" }}> Resume Ratings:</span> The
          resume is compared against the job description and/or the standard
          job description to arrive at a matching score that shows that how
          fit is the candidate for the given job given his background. We
          recommend a matching score of minimum 6/10 in order to move the
          candidate forward in the process.
          <br />
          <br />
          <span style={{ fontWeight: "700" }}> Interview Ratings: </span> The
          various skill parameter scores are aggregated to generate overall
          model recommendation about the relative positioning of the
          candidate. The ratings provided by the model are "NEVER" "MAY BE",
          "SHORTLISTED", "MUST BE". The ratings are self explanatory and
          provide a quick snapshot of the overall fit and potential of the
          candidate
        </p>
      </div>
      <hr />
      <hr />
      <p>
        This report prepared by our AI models list the top three candidates
        that match this job. This is a proprietary bend of background,
        cultural fit and and interview performance. The top 3 candidates
        are:
        <ol type="a">
          <li>
            <h6>Can A</h6>
          </li>
          <li>
            <h6>Can B</h6>
          </li>
          <li>
            <h6>Can C</h6>
          </li>
        </ol>
        Below is the list of all candidates that attempted the interaction
        and their scores:
      </p>
    </>
  );
};

export default TopCandidates;
