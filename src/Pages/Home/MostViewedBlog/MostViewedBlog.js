import React from 'react';
import Rating from 'react-rating';

const MostViewedBlog = () => {
    return (
        <div className="bg-color">
            <div className="container">
                <div className="mt-5 mb-5 text-center">
                    <h1>Most Viewed <span className="text-danger">Blog</span></h1>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src="https://i.ibb.co/0tC0mWr/3.jpg" className="w-75" alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12 text-start">
                        <h1>INDEPENDENT TREKKING AND CAMPING IN NEPAL</h1>
                        <p>Rating: <Rating
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            initialRating={5}
                            readonly >

                        </Rating></p>
                        <p>Nepal, officially the Federal Democratic Republic of Nepal, is a landlocked country in South Asia. It is mainly situated in the Himalayas, but also includes parts of the Indo-Gangetic Plain, bordering</p>
                        <button className="btn btn-danger">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostViewedBlog;