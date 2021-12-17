import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import img from "./Img/featured01.jpg"

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSign = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 col-sm-12 text-start">
                        {isLoading ?
                            <div className="spinner-border text-danger" role="status">
                                <span className="sr-only"></span>
                            </div>
                            :
                            <form onSubmit={handleLoginSubmit}>

                                <h1>Please Login</h1>

                                <div className="mb-3 ">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control w-75"
                                        id="exampleInputEmail1"
                                        name="email"
                                        onBlur={handleOnBlur}
                                        aria-describedby="emailHelp" />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control w-75"
                                        name="password"
                                        onBlur={handleOnBlur}
                                        id="exampleInputPassword1" />
                                </div>

                                <Link to="/register"> <a href="/"> Don't have an account? Create An Account....!</a></Link>
                                <button type="submit" className="btn btn-primary w-75 mt-3 fw-bold">Login</button>

                                <hr className="my-4 w-75" />
                                {
                                    isLoading && <div className="spinner-border text-danger" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                }
                                {
                                    user?.email && <div className="alert alert-success mt-3 w-75" role="alert">
                                        Login successfully!
                                    </div>
                                }
                                {
                                    authError &&
                                    <div className="alert alert-danger mt-3 w-75" role="alert">
                                        {authError}
                                    </div>
                                }

                                <div className="d-grid mb-2">
                                    <button onClick={handleGoogleSign} className="btn btn-google bg-success text-uppercase text-white w-75 fw-bold" type="submit" >
                                        <i className=" me-2"></i> Sign in with Google
                                    </button>
                                </div>
                            </form>}

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

export default Login;