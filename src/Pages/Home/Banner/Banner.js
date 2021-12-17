import React from 'react';
import "./Banner.css";
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="section">
            <div className="overlay">
                <div className="content-position">
                    <div className="position container">
                        <h5 className="text-white">We all know life is not always an easy ride along a beautiful cycling path. Sometimes it is just like a bicycle wheel spinning around on the ups and downs of a muddy trail (wait a moment. Actually, this is my idea of fun). What to do during these dark days as giving up has never been a choice?</h5>
                        <Link to="/blogs"> <button className="btn btn-danger mt-5">View Blogs</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;