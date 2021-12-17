import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import EachBlog from './EachBlog';


const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://pacific-chamber-72907.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <div className="mt-5 mb-5">
                <h1>All <span className="text-danger">Blogs</span></h1>

                <div className="row row-cols-1 row-cols-md-3 g-4 container m-auto mb-5">
                    {blogs.length === 0 ?
                        <div className="spinner-border text-danger mx-auto" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        :
                        blogs.map(blogs => <div className="col">
                            <div className="card">
                                <EachBlog key={blogs._id} eachBlog={blogs}></EachBlog>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;