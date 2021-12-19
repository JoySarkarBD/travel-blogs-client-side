import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import EachBlog from './EachBlog';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchBooks } from '../redux/slices/blogSlice';

const Blog = () => {
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
            <Navigation></Navigation>
            <div className="mt-5 mb-5">
                <h1>All <span className="text-danger">Blogs</span></h1>

                <div className="row row-cols-1 row-cols-md-3 g-4 container m-auto mb-5">
                    {books.length === 0 ?
                        <div className="spinner-border text-danger mx-auto" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        :
                        books.map(books => <div className="col">
                            <div className="card">
                                <EachBlog key={books._id} eachBlog={books}></EachBlog>
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