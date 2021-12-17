import React, { useState } from 'react';

const AddAnAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = (e) => {
        const user = { email };
        e.preventDefault();
        fetch('http://https://pacific-chamber-72907.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    e.target.reset();
                }
            })

    }

    return (
        <div>
            <div className="d-flex flex-column justify-content-center mb-5">
                <div>
                    <h1 className="text-center mt-5 mb-5">Add An Admin</h1>
                </div>
                <div className="row container mx-auto">
                    <div className="col-md-6 col-sm-12 mx-auto w-100">
                        <div className="mx-auto mb-5">

                            <form onSubmit={handleAdminSubmit} className="d-flex flex-column container text-start">
                                {/* onSubmit={handleBookingSubmit} */}

                                <div className="mb-3 ">
                                    <label className="form-label">Enter Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        onBlur={handleOnBlur}
                                        required />
                                </div>

                                <div className="mb-3 ">
                                    <input
                                        type="submit"
                                        className="form-control btn btn-success"
                                    />
                                </div>
                            </form>

                            {success && <div className="alert alert-success" role="alert">
                                Admin Added!
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddAnAdmin;