import React from 'react';

const Contact = () => {
    return (
        <div className='mb-5'>
            <form className='mb-5 mt-5' action="https://formsubmit.co/your@email.com" method="POST">
                <h1>Send A <span className='text-danger'>Massage</span></h1>

                <div className="mb-3 ">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control w-75 mx-auto"
                        id="exampleInputEmail1"
                        name="name"
                        aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control w-75 mx-auto"
                        name="email" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Message</label>
                    <textarea
                        type="text"
                        className="form-control w-75 mx-auto"
                        name="Message" />
                </div>
                <button type="submit" className="btn btn-danger w-75 mt-3 fw-bold">Send</button>
                </form>
        </div>
    );
};

export default Contact;