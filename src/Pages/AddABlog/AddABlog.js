import React, { useState } from 'react';
import { useRef } from 'react';
import useAuth from '../../Hooks/useAuth';


const AddABlog = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);

    const titleRef = useRef("");
    const ratingRef = useRef("");
    const detailsRef = useRef("");
    const emailRef = useRef("");
    const imgRef = useRef("");

    const handleAddBlogSubmit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const rating = ratingRef.current.value;
        const details = detailsRef.current.value;
        const email = emailRef.current.value;
        const img = imgRef.current.value;

        const newBlog={
            title:title, 
            rating:rating,
            details:details,
            email:email,
            img:img 
        }
        // console.log(newProduct);
        fetch("https://pacific-chamber-72907.herokuapp.com/addPost", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Post Added successfully....!");
                    setSuccess(true);
                    e.target.reset()
                }
            });
    }



    return (
        <div>
            <form onSubmit={handleAddBlogSubmit} className="d-flex flex-column container text-start col-md-6 col-sm-12 mt-5 mb-5 w-100">
                <h1 className="text-center mb-4">Add A New Blog</h1>
                <div className="mb-3 ">
                    <label className="form-label">Enter Title Name</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Enter Title"
                        ref={titleRef}                        
                        required />
                </div>
                <div className="mb-3 ">
                    <label className="form-label">Enter Blog Rating</label>
                    <input
                        type="number"
                        name="rating"
                        className="form-control"
                        placeholder="Enter Blog Rating"
                        ref={ratingRef}
                        required />
                </div>
                <div className="mb-3 ">
                    <label className="form-label">Enter Blog Details</label>
                    <textarea
                        type="text"
                        className="form-control"
                        name="details"
                        placeholder="Enter Blog Details"
                        ref={detailsRef}
                        required />
                </div>
                <div className="mb-3 ">
                    <label className="form-label">Enter Your Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={user?.email}
                        placeholder="Enter Your Email"
                        ref={emailRef}
                        required />
                </div>
                <div className="mb-3 ">
                    <label className="form-label">Blog Image</label>
                    <input
                        name="img"
                        className="form-control"
                        placeholder="Enter Blog Image Url"
                        ref={imgRef}
                    />
                </div>

                <input type="submit" className={"btn btn-success"} />
            </form>

            {success && <div className="alert alert-success" role="alert">
                Blog Posted!
            </div>}
        </div>
    );
}

export default AddABlog;