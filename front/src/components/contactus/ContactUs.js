import React from 'react';
import '../../assets/stylesheets/ng-app/layout/main.scss';
import '../../assets/stylesheets/ng-app/static_page.scss';
import '../../assets/stylesheets/ng-app/contactus.scss';
import Footer from '../footer/Footer';

function ContactUs() {
    const contentStyle = {
        'marginTop': '90px'
    }
    return (
        <div className='row static-page contactus' style={contentStyle}>
            <div className="header-page col-md-12 p-0">
                <div className="list-breadcrumbs left-right-offset row m-0">
                    <div className="list-breadcrumbs-item col-md-12">
                        <div className="last-flex-item-container">
                            <a href="/" className="uppercase">Home</a>
                        </div>
                    </div>
                    <div className="list-breadcrumbs-item">
                        <div className="last-flex-item-container">Contact Us</div>
                    </div>
                </div>
            </div>
            <ul className="list-menu-static-page col-md-12">
                <li className="list-menu-static-page-item ">
                    <a href="/about">About us</a>
                </li>
                <li className="list-menu-static-page-item ">
                    <a href="/terms"> Terms of Use</a>
                </li>
                <li className="list-menu-static-page-item ">
                    <a href="/privacy"> Privacy Policy</a>
                </li>
                <li className="list-menu-static-page-item active">
                    <a href="/contactus"> Contact Us</a>
                </li>
                <li className="list-menu-static-page-item ">
                    <a href="/cookies"> What are Cookies</a>
                </li>
            </ul>
            <div className='col-md-12'>
                <div className="left-right-offset">
                    <h1>Feel free to contact us about anything.</h1>
                    <span>Hopefully its related to what we do of course, but we’re happy to chat.</span>
                    <form className="site-form" touched="[object Object]" noValidate="">
                        <div className="input-parent">
                            <input name="name" type="text" placeholder="Name" className="field" meta="[object Object]" />
                        </div>
                        <div className="input-parent">
                            <input name="email" type="text" placeholder="Email" className="field" meta="[object Object]" />
                        </div>
                        <div className="input-parent">
                            <textarea name="body" placeholder="New Ideas or Feedback?" className="field" rows="4" meta="[object Object]"></textarea>
                        </div>
                        <button type="submit" className="btn-submit">Send</button>
                    </form>
                </div>
            </div>
            <div className='col-md-12'>
                <div className="info-wrapper row">
                    <div className="description left-right-offset col-md-12">
                        <div className="logo"></div>
                        <div className="text">
                            Headquartered in Tampa, Florida, our San Diego office takes a very focused approach to online marketing to drive lead generation and e-commerce sales. We rarely have to start from scratch with your marketing campaigns and marketing automation. We try to start where you are now and make it work better and deliver more customers. Sometimes it does mean starting over, but often things simply need to work better. This is far more cost effective than spending six figures just to rebuild the website by guessing what works and what doesn’t.
                        </div>
                    </div>
                    <div className="adress-wrapper left-right-offset col-md-12">
                        <div className="location">
                            <div className="title">United States</div>
                            <div className="office-wrapper">
                                <div className="office">
                                    <div className="adress">Tampa, Florida</div>
                                    <div className="details">Phone: 813.344.2520</div>
                                </div>
                                <div className="office">
                                    <div className="adress">Southern California</div>
                                    <div className="details">Phone: 310.872.7653</div>
                                </div>
                                <div className="office">
                                    <div className="adress">Washington, DC</div>
                                    <div className="details">Phone: 703.829.5162</div>
                                </div>
                            </div>
                        </div>
                        <div className="location">
                            <div className="title">Europe</div>
                            <div className="office-wrapper">
                                <div className="office">
                                    <div className="adress">United Kingdom</div>
                                    <div className="details">Swindon, Wiltshire, SN5</div>
                                    <div className="details">United KingdomSN5</div>
                                    <div className="details">Phone: +44 (0)1793 325420</div>
                                </div>
                                <div className="details">
                                    Email: &nbsp;<a href="mailto:info@clicklaboratory.com">info@clicklaboratory.com</a>
                                </div>
                                <div className="details">Twitter: @well_optimized</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ContactUs;