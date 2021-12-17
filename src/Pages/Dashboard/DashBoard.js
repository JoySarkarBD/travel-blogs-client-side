import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from "../Login/AdminRoute/AdminRoute"
import AddABlog from "../AddABlog/AddABlog"
import MyBlogs from "../MyOrders/MyBlogs"
import AddAnAdmin from "../AddAnAdmin/AddAnAdmin"
import ManageBlogs from "../ManageProducts/ManageBlogs"
import Navigation from "../../Pages/Shared/Navigation/Navigation"
import Footer from '../Shared/Footer/Footer';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { logout, admin } = useAuth();
    return (
        <div>
            <Navigation></Navigation>
            <div className="container mt-5 mb-5">
                <div className="row gx-5">
                    <div className="col-md-3 mt-5 border-end border-secondary text-start">
                        <h1 className="mb-5">Dashboard</h1>
                        {!admin && <>
                            <Nav.Link as={NavLink} to={`${url}/myBlogs`}><a className="text-dark fs-5 text-decoration-none" href="/">My Blogs</a></Nav.Link>

                            <Nav.Link as={NavLink} to={`${url}/addABlog`}><a className="text-dark fs-5 text-decoration-none" href="/">Add A Blog</a></Nav.Link>

                            <Nav.Link as={NavLink} to="/" onClick={logout}><Button variant="secondary" className="btn btn-secondary">Logout</Button></Nav.Link>
                        </>}

                        {admin &&
                            <>
                                <Nav.Link as={NavLink} to={`${url}/manageBlogs`}><a className="text-dark fs-5 text-decoration-none" href="/">Manage All Blogs</a></Nav.Link>
                                <Nav.Link as={NavLink} to={`${url}/addAnAdmin`}><a className="text-dark fs-5 text-decoration-none" href="/">Add An Admin</a></Nav.Link>
                                <Nav.Link as={NavLink} to={`${url}/addABlog`}><a className="text-dark fs-5 text-decoration-none" href="/">Add A Blog</a></Nav.Link>
                                <Nav.Link as={NavLink} to="/" onClick={logout}><Button variant="secondary" className="btn btn-secondary">Logout</Button></Nav.Link>
                            </>}
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            {!admin &&
                                <Route exact path={path}>
                                    <MyBlogs></MyBlogs>
                                </Route>
                            }
                            {!admin &&
                                <>
                                    <Route exact path={`${path}/myBlogs`}>
                                        <MyBlogs></MyBlogs>
                                    </Route>

                                    <Route exact path={`${path}/addABlog`}>
                                        <AddABlog></AddABlog>
                                    </Route>

                                </>}

                            {admin &&
                                <AdminRoute exact path={`${path}`}>
                                    <ManageBlogs></ManageBlogs>
                                </AdminRoute>
                            }
                            {admin &&
                                <>
                                    <AdminRoute exact path={`${path}/addABlog`}>
                                        <AddABlog></AddABlog>
                                    </AdminRoute>

                                    <AdminRoute exact path={`${path}/addAnAdmin`}>
                                        <AddAnAdmin></AddAnAdmin>
                                    </AdminRoute>

                                    <AdminRoute exact path={`${path}/manageBlogs`}>
                                        <ManageBlogs></ManageBlogs>
                                    </AdminRoute>
                                </>}
                        </Switch>
                        
                    </div>
                    
                </div>
                
            </div>
            <Footer></Footer>
        </div >
    );
};

export default DashBoard;