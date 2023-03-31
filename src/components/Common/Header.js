import React, { Component } from 'react';
import config from '../../config';
import ReactGA from 'react-ga';

export default class Header extends Component {

    componentDidMount() {          
        ReactGA.initialize(config.gaTrackingId);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }


    render() {

        return (        
            <header className="header">
    <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-center">
            <div className="site-header-logo">
                    <a href="https://smallhd.com" className="logo">
                            <img src={config.siteUrl+"/images/logo.svg"} />
                    </a>
            </div>
            <div className="navbar navbar-static-top bs-docs-nav">
                <nav id="bs-navbar" role="navigation" aria-label="Main">
                    <ul className="nav navbar">
                        <li className="products-menu"><a href="https://smallhd.com/collections/all-products" className=" text-uppercase" title="Browse all our products">PRODUCTS</a>
                        </li>
                        <li className="support-menu"><a href="https://support.smallhd.com/" className="text-uppercase" title="Customer Support, Knowledge-base, FAQ, downloads and live-chat.">Support</a>
                        </li>
                        <li className="support-menu"><a href="https://smallhd.com/blogs/community" className="text-uppercase" title="SmallHD News and articles">Community</a></li>
                        <li className="support-menu"><a href="https://smallhd.com/pages/my-account" className="text-uppercase" title="Your SmallHD account">My account</a></li>
                        <li className="search" id="submit"><a href="#"><span className="d-none">Search</span></a></li>
                    </ul>
                </nav>
            </div>
            <div>
            </div>
        </div>
    </div>
</header>
);

    }

}
