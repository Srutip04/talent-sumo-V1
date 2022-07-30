import React from 'react';

const Form = () => {
    return (
        <>
            <div className="container">
                <div className='d-grid col-md-8 mx-auto my-5'>
                    <div className='card h-100 border-warning'>
                        <h3 className='card-header text-center bg-warning' style={{ borderBottom: "2px solid #ffc107" }}>Interaction Title</h3>
                        <div className="card-body">
                            <label className='form-label fw-bold'>Test Description :</label>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id explicabo modi nemo ab inventore minus in quidem nobis illo. Quos?</p>
                            <label className='form-label fw-bold'>Test Instruction :</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores suscipit consequatur dolores molestias voluptas quaerat voluptatem sunt esse praesentium corporis.</p>
                            <hr />
                            <form>
                                <div className="mb-3">
                                    <input type="text" className='form-control' id="name" placeholder="What is your name ?" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className='form-control' id="email" placeholder="What is your email ?" />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className='form-control' id="accessCode" placeholder="Please enter your access code" />
                                </div>
                                <hr style={{ color: "#ffc107", borderTop: "2px solid", opacity: "1" }} />
                                <h5 className='text-center mb-3'>Start Test</h5>
                                <div className="mb-3">
                                    <label className='form-label'>
                                        What is the key function of HR that deals with training?
                                    </label>
                                    <select className="form-select" id='track' aria-label="Default select example">
                                        <option selected value="Select">Select...</option>
                                        <option value="Compensation & Benefits">Compensation & Benefits</option>
                                        <option value="Recruitment">Recruitment</option>
                                        <option value="Strategy">Strategy</option>
                                        <option value="Learning & Development">Learning & Development</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className='form-label'>
                                        Why you want to have a career in HR?
                                    </label>
                                    <textarea className='form-control' rows="2"></textarea>
                                    <div className="form-text text-end">(Record your answer via this <a href='#'>LINK</a> and insert above)</div>
                                </div>
                                <button className='btn btn-dark float-end'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;