import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {

    return (
        <>
            <div className="container">
                <div className="d-grid col-md-10 mx-auto">
                    <div className="card border-warning mt-5">
                        <div className="card-body">
                            <h1 className='mb-5'>Thank You</h1>
                            <h5 className='mb-3'>For creating the interaction with test
                                ID XYZ
                            </h5>
                            <h5>
                                Below is the interaction link created.
                            </h5>
                            <Link to="/form" target="_blank">
                                <button className='btn btn-warning mt-4'>Go To Form</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYou;