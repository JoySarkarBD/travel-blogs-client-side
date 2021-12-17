import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark text-white pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-12 text-start">
                        <h1>Travel Blogs</h1>
                        <p>Peru is a country in South America that's home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city high in the Andes mountains. The region around Machu Picchu, including the Sacred Valley, Inca Trail and colonial city of Cusco, is rich in archaeological sites. On Peru’s arid Pacific coast is Lima, the capital, with a preserved colonial center and important collections of pre-Columbian art</p>
                    </div>
                    <div className="col-md-2 col-sm-12 text-start">
                        <h3>PAGES</h3>
                        <Nav.Link as={NavLink} className="text-white" to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} className="text-white" to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={NavLink} className="text-white" to="/login">Login</Nav.Link>
                    </div>
                    <div className="col-md-5 col-sm-12 text-start">
                        <h3>NEWSLETTER</h3>
                        <p> Subscibe to the Shaeng mailing list to receive updates on new arrivals,offers and other discount information.</p>
                        <input type="text" placeholder="Write your email here." />
                        <br />
                        <button className="btn btn-danger mt-3">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;