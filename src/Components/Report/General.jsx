import React from "react";
import styles from "./General.module.css";

import { AiFillDashboard } from "react-icons/ai";
import { ImPower } from "react-icons/im";
import { FaVolumeUp, FaCloud, FaRibbon } from "react-icons/fa";
import { BsEmojiSmileFill } from "react-icons/bs";

const General = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-center mt-5 mb-5">
          General Observed Variables (Not Directly rated)
        </h3>

        <div className="row row-cols-1 row-cols-md-3 g-5">
          <div className="col">
            <div className='card h-100 border-warning'>
              <span className="position-absolute top-0 start-50 translate-middle badge bg-warning">
                <AiFillDashboard className="me-1" />Pace
              </span>
              <div className="card-body">
                <h5 className="card-title">Words per minute: xx words/minute</h5>
                <h5 className="card-title">Ideal words per minute: xx words/minute</h5>
                <p align='justify' className="card-text"> <span className="fw-bold">Takeaway:</span>  Speaking too slowly or too quickly denotes nervousness on part of the candidate. Please note that this is the average pace across the entire interview. This will help you determine if you need to control the pace as you go through the interviews. (We have provided an ideal benchmark range for comparison purposes)</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card h-100 border-warning'>
              <span className="position-absolute top-0 start-50 translate-middle badge bg-warning">
                <ImPower className="me-1" />Power Words
              </span>
              <div className="card-body">
                <h5 className="card-title">Power word density: 2 per minute</h5>
                <h5 className="card-title">Ideal power word density: 5-6 per minute</h5>
                <p align='justify' className="card-text"> <span className="fw-bold">Takeaway:</span>  Certain words used in the interview indicate your confidence or the lack of it. The top interview advice to use quantified examples and using positive affirmative words are proven to work in the real-life scenarios. If you are an eligible candidate, you will also receive a bank of power words that when added to interviews make them sound powerful and authoritative. The current metric extracts the same from your speech.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card h-100 border-warning'>
              <span className="position-absolute top-0 start-50 translate-middle badge bg-warning">
                <FaVolumeUp className="me-1" />Volume & Pitch
              </span>
              <div className="card-body">
                <h5 className="card-title">Volume Scale (0-100): <span className="text-center">60 % ile</span></h5>
                <h5 className="card-title">Ideal Volume Scale: &gt; 75 % ile</h5>
                <h5 className="card-title">Pitch Score: <span className="text-warning"> 0-1 % ile</span></h5>
                <p align='justify' className="card-text"><span className="fw-bold">Takeaway:</span>  The volume, pitch and voice modulation make it easier for us to be understood by others easily. Scientific research has established the boundaries of the voice and pitch that are sounds likeable to the human ears. The values above indicate whether your volume and pitch are within the range or are outside of it.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card h-100 border-warning'>
              <span className="position-absolute top-0 start-50 translate-middle badge bg-warning">
                <FaCloud className='me-1' />Word Cloud
              </span>
              <div className="card-body">
                <p align='justify' className="card-text"><span className="fw-bold">Takeaway:</span> Please take a moment to reflect the words you used in the interview. This also reflects how the interview perceives you are is likely to remember about you, once the interview is over. Are these the power words that are related to the subject matter of the interview that presents you as strong candidate? Please take a moment to reflect and craft alternate answers if these are the not the words/ context you wish to convey.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card h-100 border-warning'>
              <span className="position-absolute top-0 start-50 translate-middle badge bg-warning">
                <BsEmojiSmileFill className='me-1' />Sentiment Analysis
              </span>
              <div className="card-body">
                <h5 className="card-title">Aggregate dominant Sentiment: Happy</h5>
                <p align='justify' className="card-text"><span className="fw-bold">Takeaway:</span> This shows how your emotions are understood by the people. While most candidates display positive emotions naturally in few cases it might be negative. Being a responsible AI organization, we do not recommend any adverse actions based on it - only something should be further investigated.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='card h-100 border-warning'>
              <span className="position-absolute top-0 start-50 translate-middle badge bg-warning">
                <FaRibbon className='me-1' />Gesture
              </span>
              <div className="card-body">
                <h5 className="card-title">Gesture Score: 8/10</h5>
                <p className="card-text"><span className="fw-bold">Takeaway:</span> Hand gestures play an important part in your overall personality. Due to limitations of the camera recording it may not be always possible to capture them depending on how you have recorded your own interview. A good score indicates you have used your hand gestures to positively reinforce your interview answers. Consider using your hands naturally like in any other live conversation even for online interviews. If this score is blank for you - in indicates you have opted for an audio only interview.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5">
          <div className='card h-100 border-warning'>
            <div className="card-body">
              <h5 className="card-title">Content Ratings</h5>
              <p className="card-text">We evaluate the content of the responses not only by the best possible answer to that question but using our context cloud we are further enhancing the accuracy of what of answers might be relevant to what kind of situation. Any candidate taking time to understand and align to the context in which he is operating and using industry specific terminologies to articulate his point of view is likely to do well in the content ratings. The top cohort rating (A) on more than 75% of the questions denotes high degree of proficiency and accuracy in his answers.</p>
            </div>
          </div>
        </div>

        <div>
          <div className={`${styles.row} row`}>
            <div className={`${styles.col} col-6`}>Content Match Score</div>
            <div className={`${styles.col} col-6`}>Meaning</div>
          </div>
          <div className={`${styles.row} row`}>
            <div className={`${styles.col1} col-6`}>Greater than 90</div>
            <div className={`${styles.col1} col-6`}>
              Extremely precise & relevant answer
            </div>
          </div>
          <div className={`${styles.row} row`}>
            <div className={`${styles.col1} col-6`}>70 to 90 % </div>
            <div className={`${styles.col1} col-6`}>
              Satisfactory answer with key points covered
            </div>
          </div>
          <div className={`${styles.row} row`}>
            <div className={`${styles.col1} col-6`}>50 to 70 % </div>
            <div className={`${styles.col1} col-6`}>
              Highlights key aspects but is not complete
            </div>
          </div>
          <div className={`${styles.row} row`}>
            <div className={`${styles.col1} col-6`}>Less than 50 % </div>
            <div className={`${styles.col1} col-6`}>Missing key aspects</div>
          </div>
        </div>
        <div>
          <h4 className='container mt-5 mb-3'>
            Question Specific Content Ratings :
          </h4>
          <div className={`${styles.row} row`}>
            <div className={`${styles.col} col-6`}>Question#</div>
            <div className={`${styles.col} col-6`}>Content Match Score</div>
          </div>
          <div className={`${styles.row} row`}>
            <div className={`${styles.col1} col-6`}>1</div>
            <div className={`${styles.col1} col-6`}>60%</div>
          </div>
          <div className={`${styles.row} row`}>
            <div className={`${styles.col1} col-6`}>2</div>
            <div className={`${styles.col1} col-6`}>70%</div>
          </div>
          <div className={`${styles.row} row`}>
            <div className={`${styles.col1} col-6`}>3</div>
            <div className={`${styles.col1} col-6`}>50%</div>
          </div>
          <div className={`${styles.row} row`}>
            <div className={`${styles.col1} col-6`}>4</div>
            <div className={`${styles.col1} col-6`}>80%</div>
          </div>
        </div>
        <h4 className='container my-5 d-flex justify-content-end me-auto'>
          Overall Content Rating :<span className='text-warning ms-1'>PASS</span>
        </h4>
      </div>
    </>
  );
};

export default General;
