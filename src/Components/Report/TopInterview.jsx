import React from "react";
import styles from "./TopInterview.module.css";

const TopInterview = () => {
  return (
    <>
      <div>
        <h3 className="text-center mt-5 mb-3">Total Interview Report</h3>
        <div className="container">
          <div className={styles.table}>
            <div className={`${styles.row} row`}>
              <div className={`${styles.col} col-2`}>Questions</div>
              <div className={`${styles.col} col-2`}>Likeability</div>
              <div className={`${styles.col} col-2`}>Charm</div>
              <div className={`${styles.col} col-2`}>Confidence</div>
              <div className={`${styles.col} col-2`}>Energy</div>
              <div className={`${styles.col} col-2`}>Fluency</div>
            </div>
            <div className={`${styles.row} row`}>
              <div className={`${styles.col1} col-2`}>Q1</div>
              <div className={`${styles.col1} col-2`}>A</div>
              <div className={`${styles.col1} col-2`}>A</div>
              <div className={`${styles.col1} col-2`}>A</div>
              <div className={`${styles.col1} col-2`}>A</div>
              <div className={`${styles.col1} col-2`}>A</div>
            </div>
            <div className={`${styles.row} row`}>
              <div className={`${styles.col1} col-2`}>Q2</div>
              <div className={`${styles.col1} col-2`}>B</div>
              <div className={`${styles.col1} col-2`}>B</div>
              <div className={`${styles.col1} col-2`}>A</div>
              <div className={`${styles.col1} col-2`}>B</div>
              <div className={`${styles.col1} col-2`}>A</div>
            </div>
            <div className={`${styles.row} row`}>
              <div className={`${styles.col1} col-2`}>Q3</div>
              <div className={`${styles.col1} col-2`}>A</div>
              <div className={`${styles.col1} col-2`}>B</div>
              <div className={`${styles.col1} col-2`}>B</div>
              <div className={`${styles.col1} col-2`}>A</div>
              <div className={`${styles.col1} col-2`}>A</div>
            </div>
            <div className={`${styles.row} row`}>
              <div className={`${styles.col1} col-2`}>Q4</div>
              <div className={`${styles.col1} col-2`}>B</div>
              <div className={`${styles.col1} col-2`}>B</div>
              <div className={`${styles.col1} col-2`}>A</div>
              <div className={`${styles.col1} col-2`}>B</div>
              <div className={`${styles.col1} col-2`}>B</div>
            </div>
          </div>
        </div>
        <div className="mt-5 container">
          <p align='justify'>
            In the rest of the pages of this report their other non-evaluative
            parameters that are reported for informational purposes only.
          </p>
          <p align='justify'>
            The Appendix section of the report contains the transcript of the
            answers that are provided by the candidate. Also please note that the
            candidate did/did not provide their resume during the interaction. The
            resume was scored and categorized as <span className="text-warning">“7/10”</span> for the posted job
            requirement.
          </p>
          <p align='justify'>Best Regards,</p>
          <p align='justify'>Team <span className="fw-bold">Talent <span className="bg-warning p-2">Sumo</span></span></p>
        </div>
      </div>
    </>
  );
};

export default TopInterview;
