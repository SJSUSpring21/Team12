import React from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap/esm';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import PortalPage from './PortalPage';
import SignupPage from './SignupPage';
import ResultPage from './ResultPage';
import LoadingPage from './LoadingPage';
import '../index.css';
import livebetterlogo from '../components/images/new.svg';
import aboutphoto from './images/second.svg';
import skyline from '../components/images/skyline.png';
import globephoto from './images/third.svg'


function LandingPage() {
    //landing page function

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <div className="main-section">


                            <Navbar bg="light" variant="light sticky-top">
                                <Navbar.Brand className="logo" href="/">
                                    Live<span class='text-success'>B</span>etter
                                        </Navbar.Brand>
                                <Nav className="mr-auto"></Nav>

                                <Nav className="ml-auto">
                                    <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                                </Nav>
                            </Navbar>

                            <div class='cointainer-fluid'>
                                <div class='row mt-3 justify-content-center'>
                                    <div class='col-4 my-auto'>
                                        <div class="row m-2">
                                            <h1 className="heading">Live <span class='text-success'>B</span>etter</h1>
                                        </div>
                                        <div class="row m-2">
                                            <h3 className="line">Check the livability score for your location</h3>
                                        </div>
                                        <div class="row m-2">
                                            <div class='col'>
                                                <Link to="/login"><Button variant="success btn-block" >Login</Button></Link>
                                            </div>
                                            <div class='col'>
                                                <Link to="/signup"><Button variant="success btn-block" className="signup-button">Signup</Button></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div class='col-4'>
                                        <Image class='img-responsive'
                                            src={livebetterlogo} />
                                    </div>
                                </div>

                                <div class="row mt-5 justify-content-center">

                                    <div class="col-6">
                                        <div class='p-5'>
                                            <Image class='img-responsive mx-auto'
                                                src={aboutphoto} />
                                        </div>
                                    </div>

                                    <div class="col-4 my-auto">
                                        <h2>Find the best places to live based on Crime Rate, Hospitals, Gyms and other facilities nearby.</h2>
                                    </div>

                                </div>

                            </div>

                            <div class='row mt-5 justify-content-center'>
                                <div class="col-6 d-flex ">
                                    <Image class='img-responsive mx-auto'
                                        src={globephoto} />
                                </div>
                            </div>

                            <div class="row mt-5">
                                <Image class='mt-auto mx-auto'
                                    src={skyline} />
                            </div>
                        </div>
                    </Route>

                    <Route exact path="/signup">
                        <SignupPage />
                    </Route>

                    <Route exact path="/login">
                        <LoginPage />
                    </Route>

                    <Route exact path="/portal">
                        <PortalPage />
                    </Route>

                    <Route exact path="/result">
                        <ResultPage />
                    </Route>

                    <Route exact path="/loading">
                        <LoadingPage />
                    </Route>

                </Switch>
            </Router>
        </div>
    )
}

export default LandingPage
