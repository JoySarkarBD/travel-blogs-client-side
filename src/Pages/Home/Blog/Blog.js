import React from 'react';
import { Link } from 'react-router-dom';
import Rating from "react-rating"


const Blog = (props) => {
    const { _id, img, title, rating, details} = props.blog;
    return (
        <div>
            <div className="card">
                <img src={img} className="card-img-top img-height img-size" alt="..." />
                <div className="card-body">
                    <h5 className="card-title mt-3 mb-3">{title.slice(0, 25)}</h5>
                    <div className="d-flex justify-content-between">
                        <p><Rating
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            initialRating={rating}
                            readonly >

                        </Rating></p>
                    </div>
                    <p className="text-start">{details.slice(0, 200)}</p>
                </div>
                <Link to={`/viewBlog/${_id}`}><button type="button" className="btn btn-danger w-100">View Details</button></Link>
            </div>
        </div>
    );
};

export default Blog;