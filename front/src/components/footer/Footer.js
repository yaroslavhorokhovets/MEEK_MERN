import React from 'react';
import '../../assets/stylesheets/ng-app/shared/footer.scss';

function Footer() {
    const footerStyle = {
        "borderStyle": "none"
    }
    return (
        <>
            <div id='footer' className='col-md-12'>
                <ul className="bolder-links">
                    <li>
                        <a className="logo" ui-sref="home" href="/">
                            <img src="/assets/images/logos/logo_2021.png" style={footerStyle} alt="" />
                        </a>
                    </li>
                </ul>
                <ul className="lighter-links">
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/terms">Terms of Use</a>
                    </li>
                    <li>
                        <a href="/privacy">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/contactus">Contact Us</a>
                    </li>
                    <li>
                        <span>© 2015 - 2022 Meek.ly. All rights reserved</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Footer;