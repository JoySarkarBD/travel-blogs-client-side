import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Rating from "react-rating"
import { useParams } from 'react-router';

const ViewBlogs = () => {
    const { id } = useParams();
    const [blog, setBlogs] = useState({});

    useEffect(() => {
        fetch(`https://pacific-chamber-72907.herokuapp.com/blogs/${id}`)
            .then((res) => res.json())
            .then(data => {
                setBlogs(data)
            });
    }, [id]);


    return (
        <div>
            <Navigation></Navigation>
            <div className="d-flex flex-column justify-content-center mb-5">
                <div>
                    <h1 className="text-center mt-5 mb-5">View <span className="text-danger">Blog</span></h1>
                </div>
                <div className="row container mx-auto">
                    <div className="col-md-6">
                        <div className="card">
                            <img src={blog?.img} className="card-img-top img-size" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title mt-3 mb-3">{blog?.title}</h5>
                                <div className="d-flex justify-content-between">
                                    <p>Rating: <Rating
                                        emptySymbol="far fa-star icon-color"
                                        fullSymbol="fas fa-star icon-color"
                                        initialRating={blog?.rating}
                                        readonly >
                                    </Rating>
                                    </p>
                                </div>
                                <p className="text-start">{blog?.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default ViewBlogs;