import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import img from "./../Img/featured01.jpg"
import useAuth from "../../../Hooks/useAuth"
import { useHistory } from 'react-router-dom';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <div>
            <Navigation></Navigation>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 col-sm-12 text-start">
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <h1>Please Register</h1>
                            <div className="mb-3 ">
                                <label for="exampleInputEmail1" className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    className="form-control w-75"
                                    aria-describedby="emailHelp"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    placeholder="Enter Your Name" />
                            </div>

                            <div className="mb-3 ">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control w-75"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    placeholder="Enter Your Email" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control w-75"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    placeholder="Enter Your Password" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control w-75"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    placeholder="Re-enter Your Password" />
                            </div>
                            <Link to="/login"> <a href="/"> Already have an account Login? Then Login.</a></Link>
                            <button type="submit" className="btn btn-primary w-75 mt-3">Register</button>
                        </form>}

                        {
                            isLoading && <div className="spinner-border text-danger" role="status">
                                <span className="sr-only"></span>
                            </div>
                        }
                        {
                            user?.email && <div className="alert alert-success mt-3 w-75" role="alert">
                                Registered successfully!
                            </div>
                        }
                        {
                            authError && <div className="alert alert-danger mt-3 w-75" role="alert">
                                {authError}
                            </div>
                        }

                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={img} className="w-75" alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;