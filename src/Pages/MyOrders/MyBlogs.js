import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import OrderedItem from './OrderedItem/OrderedItem';

const MyBlogs = () => {
    const [myBlogs, setMyBlogs] = useState([]);
    const { user, isLoading } = useAuth();

    useEffect(() => {
        fetch(`https://pacific-chamber-72907.herokuapp.com/myBlogs/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyBlogs(data)
            })
    }, [myBlogs, user?.email])

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
                        const remainingOrders = myBlogs.filter((order) => order._id !== id);
                        setMyBlogs(remainingOrders);
                    }
                })
        }
    }


    return (
        <>
            <div className="my-8 text-center mt-5 mb-5">
                <h3 className="text-3xl">
                    See Your Blogs List
                </h3>
            </div>
            {isLoading ?
                <div className="spinner-border text-danger" role="status">
                    <span className="sr-only"></span>
                </div>
                :
                <>
                    <div className="table-responsive">
                        <table className="table mb-5 container">
                            <thead>
                                <tr>
                                    <th scope="col">S/N</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Details</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myBlogs.map((blogs, index) => <OrderedItem
                                    key={blogs._id}
                                    blogs={blogs}
                                    serial={index + 1}
                                    deleteBlog={deleteBlog}
                                ></OrderedItem>)}
                            </tbody>
                        </table>
                    </div>
                </>}
        </>
    );
};

export default MyBlogs;