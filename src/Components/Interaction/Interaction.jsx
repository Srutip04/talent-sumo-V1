import React from "react";
import styles from "./Interaction.module.css";
import QuesAns from '../Modal/QuesAns'
import Details from "./Details";

import { Link } from 'react-router-dom'

const Interaction = () => {
  return (
    <>
      <h3 className="text-center my-5">INTERACTION</h3>
      <div className={`${styles.container} container mt-4 mb-5`}>
        <div className={`${styles.header} d-flex justify-content-center`}>
          <div className={`${styles.heading} bg-warning p-2`}>Test ID</div>
          <div className={`${styles.heading} bg-warning p-2`}>Job/Course Title</div>
          <div className={`${styles.heading} bg-warning p-2`}>Track</div>
          <div className={`${styles.heading} bg-warning p-2`}>Candidate Form</div>
        </div>
        <div className={`${styles.header} d-flex justify-content-center`}>
          <div className={`${styles.heading} border border-warning p-2`} data-bs-toggle="modal" data-bs-target="#exampleModal4">5678</div>
          <div className={`${styles.heading} border border-warning p-2`}>Abc</div>
          <div className={`${styles.heading} border border-warning p-2`}>Learn HR</div>
          <div className={`${styles.heading} text-primary border border-warning p-2`}>
            <Link to="/form" target="_blank">
              Link
            </Link>
          </div>
        </div>
      </div>
      <QuesAns />
      <Details />
    </>
  );
};

export default Interaction;
