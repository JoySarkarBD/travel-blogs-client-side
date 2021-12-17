import React from 'react';

const AllBlogs = ({ blog, serial,deleteBlog }) => {
    const { title ,details, _id } = blog;
    return (
        <>
            {blog.lenght === 0 ?
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> :
                <tr>
                    <th>{serial}</th>
                    <td>{title}</td>
                    <td>{details}</td>
                    <td>
                        <button onClick={() => deleteBlog(_id)} className="btn btn-danger">Delete</button>
                    </td>
                </tr >}
        </>
    );
};

export default AllBlogs;