import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import AllBlogs from './AllBlogs/AllBlogs';

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    const { isLoading } = useAuth();


    useEffect(() => {
        fetch('https://pacific-chamber-72907.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogs])

    const deleteBlog = (id) => {
        let warning = window.confirm("Are sure wanna delete this blog?");
        const url = `https://pacific-chamber-72907.herokuapp.com/blogs/${id}`;
        if (warning) {
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remainingBlogs = blogs.filter((blog) => blog._id !== id);
                        setBlogs(remainingBlogs);
                    }
                })
        }
    }

    return (
        <>
            {isLoading ? 
            <div className="spinner-border text-danger" role="status">
                <span className="sr-only"></span>
            </div>
                :
                <>
                    <div className="my-8 text-center mt-5 mb-5">
                        <h3 className="text-3xl">
                            Manage All Blogs
                        </h3>
                    </div>
                    <div className="table-responsive">
                        <table className="table mb-5 container">
                            <thead>
                                <tr>
                                    <th scope="col">S/N</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map((blog, index) => <AllBlogs
                                    key={blog._id}
                                    blog={blog}
                                    serial={index + 1}
                                    deleteBlog={deleteBlog}
                                ></AllBlogs>)}
                            </tbody>
                        </table>
                    </div>
                </>}
        </>

    );
};

export default ManageBlogs;