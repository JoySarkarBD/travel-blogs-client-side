import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/slices/blogSlice';
const Blogs = () => {
    // const [blogs, setBlogs] = useState([]);
    // useEffect(() => {
    //     fetch('https://pacific-chamber-72907.herokuapp.com/blogs')
    //         .then(res => res.json())
    //         .then(data => setBlogs(data))
    // }, [])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBooks());
    }, [])

    const books = useSelector((state) => state.books.discover)
    return (
        <div>
            <div className="mt-5 mb-5 text-center">
                <h1>New <span className="text-danger">Blogs</span></h1>
            </div>
            <div className="container mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {books.length === 0 ? <div className="spinner-border text-danger mx-auto" role="status">
                        <span className="visually-hidden"></span>
                    </div> :
                        books.map(books =>
                            <div className="col">
                                <Blog
                                    key={books._id}
                                    blog={books}
                                >
                                </Blog>
                            </div>).slice(0, 6)}
                </div>
            </div>
        </div>
    );
};

export default Blogs;