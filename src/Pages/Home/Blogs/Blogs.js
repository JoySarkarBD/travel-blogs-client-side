import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://pacific-chamber-72907.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div className="mt-5 mb-5 text-center">
                <h1>New <span className="text-danger">Blogs</span></h1>
            </div>
            <div className="container mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {blogs.length === 0 ? <div className="spinner-border text-danger mx-auto" role="status">
                        <span className="visually-hidden"></span>
                    </div> :
                        blogs.map(blog =>
                            <div className="col">
                                <Blog
                                    key={blog._id}
                                    blog={blog}
                                >
                                </Blog>
                            </div>).slice(0, 6)}
                </div>
            </div>
        </div>
    );
};

export default Blogs;