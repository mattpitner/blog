import React, { Component } from "react";

class Home extends Component {
    state = {
        value: 0
    }

    render() {
        return (
            <div>
                <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                            <a className="navbar-brand page-scroll" href="#page-top"><i className="fa fa-book" /> Blogmania</a> </div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#about" className="page-scroll">About</a></li>
                                <li><a href="#services" className="page-scroll">Join</a></li>
                                <li><a href="#pricing" className="page-scroll">Pricing</a></li>
                                <li><a href="#contact" className="page-scroll">Contact</a></li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </div>
                    {/* /.container-fluid */}
                </nav>
                {/* Header */}
                <header id="header">
                    <div className="intro">
                        <div className="overlay">
                            <div className="container">
                                <div className="row">
                                    <div className="intro-text">
                                        <h1>Blogmania</h1>
                                        <p>Be You | Be the Best</p>
                                        <a href="#about" className="btn btn-custom btn-lg page-scroll">Get Started</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* About Section */}
                <div id="about">
                    <div className="container">
                        <div className="section-title text-center center">
                            <h2>About Us</h2>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive thumbnail" alt /> </div>
                            <div className="col-xs-12 col-md-6">
                                <div className="about-text">
                                    <h3>What is Blogmania?</h3>
                                    <p>Blogmania is an open platform application utilizing React, allowing users to create their own custom content without a hassle no matter what they're into.</p>
                                    <p>Here are some of the technologies we have to offer that are implemented into your sites:</p>
                                    <div className="list-style">
                                        <div className="col-lg-6 col-sm-6 col-xs-12">
                                            <ul>
                                                <li>React Core</li>
                                                <li>Passport Security</li>
                                                <li>UglifyJS2 Code Efficiency</li>
                                                <li>Full User Customization</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-xs-12">
                                            <ul>
                                                <li>Node.js</li>
                                                <li>JQuery</li>
                                                <li>Bootstrap</li>
                                                <li>MongoDB</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Services Section */}
                <div id="services" className="text-center">
                    <div className="container">
                        <div className="col-md-10 col-md-offset-1 section-title">
                            <h2 className="h2-secondary">Join a Cause</h2>
                            <hr />
                            <p className="p-secondary">Join and innovate hungry minds from home!</p>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-md-3"> <i className="fa fa-home" />
                                <h4>Home</h4>
                                <p className="p-secondary">Joining Blogmania is as easy as signing up. What are you waiting for!</p>
                            </div>
                            <div className="col-xs-6 col-md-3"> <i className="fa fa-umbrella" />
                                <h4>Protection</h4>
                                <p className="p-secondary">Keep pesky theives away and take advantage of your precious work.</p>
                            </div>
                            <div className="col-xs-6 col-md-3"> <i className="fa fa-gears" />
                                <h4>Collaborate</h4>
                                <p className="p-secondary">Take advantage of connecting to other writers and enjoy a fresh perspective.</p>
                            </div>
                            <div className="col-xs-6 col-md-3"> <i className="fa fa-language" />
                                <h4>Communication</h4>
                                <p className="p-secondary">Connect with people around the globe!</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pricing Section */}
                <div id="pricing" className="text-center">
                    <div className="container">
                        <div className="section-title center">
                            <h2>Pricing</h2>
                            <hr />
                            <p>Want to take your site a step farther? Take advantage of our packages!</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div className="pricing-table">
                                    <div className="plan-name">
                                        <h3>Basic</h3>
                                    </div>
                                    <div className="plan-price">
                                        <div className="price-value">$10</div>
                                    </div>
                                    <div className="plan-list">
                                        <ul>
                                            <li><strong>1 GB</strong> Disk Space</li>
                                            <li><strong>1GB</strong> Monthly Bandwidth</li>
                                            <li><strong>3</strong> Domains</li>
                                            <li><strong>3</strong> Email Accounts</li>
                                            <li><strong>Free</strong> Setup</li>
                                        </ul>
                                    </div>
                                    <div className="plan-signup"> <a href="#" className="btn-system">Order Now</a> </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="pricing-table highlight-plan">
                                    <div className="plan-name">
                                        <h3>Standard</h3>
                                    </div>
                                    <div className="plan-price">
                                        <div className="price-value">$20</div>
                                    </div>
                                    <div className="plan-list">
                                        <ul>
                                            <li><strong>10 GB</strong> Disk Space</li>
                                            <li><strong>10GB</strong> Monthly Bandwidth</li>
                                            <li><strong>10</strong> Domains</li>
                                            <li><strong>10</strong> Email Accounts</li>
                                            <li><strong>Free</strong> Setup</li>
                                        </ul>
                                    </div>
                                    <div className="plan-signup"> <a href="#" className="btn-system border-btn">Order Now</a> </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="pricing-table">
                                    <div className="plan-name">
                                        <h3>Professional</h3>
                                    </div>
                                    <div className="plan-price">
                                        <div className="price-value">$30</div>
                                    </div>
                                    <div className="plan-list">
                                        <ul>
                                            <li><strong>20 GB</strong> Disk Space</li>
                                            <li><strong>20GB</strong> Monthly Bandwidth</li>
                                            <li><strong>20</strong> Domains</li>
                                            <li><strong>20</strong> Email Accounts</li>
                                            <li><strong>Free</strong> Setup</li>
                                        </ul>
                                    </div>
                                    <div className="plan-signup"> <a href="#" className="btn-system">Order Now</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact Section */}
                <div id="contact" className="text-center">
                    <div className="container">
                        <div className="section-title center">
                            <h2 className="h2-secondary">Contact Us</h2>
                            <hr />
                            <p className="p-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                        </div>
                        <div className="col-md-8 col-md-offset-2">
                            <form name="sentMessage" id="contactForm" noValidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea name="message" id="message" className="form-control" rows={4} placeholder="Message" required defaultValue={""} />
                                    <p className="help-block text-danger" />
                                </div>
                                <div id="success" />
                                <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
                            </form>
                            <div className="social">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                    <li><a href="#"><i className="fa fa-youtube" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div className="container text-center">
                        <div className="fnav">
                            <p>Copyright © 2019 Designed by Chandler Paulk</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;