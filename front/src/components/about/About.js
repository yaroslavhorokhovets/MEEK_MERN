import React from 'react';
import '../../assets/stylesheets/ng-app/layout/main.scss';
import '../../assets/stylesheets/ng-app/static_page.scss';
import Footer from '../footer/Footer';

function About() {
    const contentStyle = {
        'marginTop': '90px'
    }
    const decorationStyle = {
        'textDecoration': 'none'
    }
    return (
        <div className='row static-page about' style={contentStyle}>
            <div className="header-page col-md-12 p-0">
                <div className="list-breadcrumbs left-right-offset row m-0">
                    <div className="list-breadcrumbs-item col-md-12">
                        <div className="last-flex-item-container">
                            <a href="/" className="uppercase">Home</a>
                        </div>
                    </div>
                    <div className="list-breadcrumbs-item">
                        <div className="last-flex-item-container">About</div>
                    </div>
                </div>
                <div className="categories">Meek.ly</div>
                <h1 className="title">About</h1>
            </div>
            <ul className="list-menu-static-page col-md-12">
                <li className="list-menu-static-page-item active">
                    <a href="/about">About us</a>
                </li>
                <li className="list-menu-static-page-item ">
                    <a href="/terms"> Terms of Use</a>
                </li>
                <li className="list-menu-static-page-item ">
                    <a href="/privacy"> Privacy Policy</a>
                </li>
                <li className="list-menu-static-page-item ">
                    <a href="/contactus"> Contact Us</a>
                </li>
                <li className="list-menu-static-page-item ">
                    <a href="/cookies"> What are Cookies</a>
                </li>
            </ul>
            <div className='col-md-12'>
                <div className="left-right-offset">
                    <div><br /></div>
                    <h2>All about Meek</h2>
                    <div><br /></div>
                    <p>Meek is simply a platform used to make the best Christian podcasts and radio stations in one place. We don't aggregate all that exist, but only the best. If you would like to have your radio station or podcast included, please <a href="/contactus" style={decorationStyle}>fill out our contact form</a>.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default About;