import React from 'react';
import '../../assets/stylesheets/ng-app/static_page.scss';
import '../../assets/stylesheets/ng-app/shared/forms.scss';
import Footer from '../footer/Footer';

function SignUp() {
    const divStyle = {
        'backgroundColor':'#43ACCD',
        'padding':'3%',
        'paddingLeft':'5%',
        'color':'#ffffff'
    }
    const h1Style = {
        'fontFamily':'lato!important',
        'fontSize':'36px'
    }
    const contentStyle = {
        'marginTop': '90px'
    }
    return (
        <div id="signup" className='row' style={contentStyle}>
            <div style={divStyle} className="col-md-12">
                <h1 style={h1Style}>Sign up for free Christian podcast listening.</h1>
                <p>Meek.ly is free for your use. We have the top Christian podcasters for <b>women, men, and teens</b>, at whatever spiritual level you are.&nbsp;</p>
                <ul>
                    <li>Listen to the top Christian podcasts</li>
                    <li>Get Biblical teaching delivered daily</li>
                    <li>Follow just the podcasts you want</li>
                </ul>
            </div>
            <div className='left-right-offset col-md-12'>
                <form className="site-form" touched="[object Object]" novalidate="">
                    <hr className="separator" />
                    <div className="title text-support uppercase">Create New Account</div>
                    <a className="btn-facebook" href="/api/users/auth/facebook" target="_self">facebook</a>
                    <a className="btn-twitter" href="/api/users/auth/twitter" target="_self">twitter</a>
                    <hr className="separator" />
                    <div className="title text-support">or</div>
                    <div className="input-parent">
                        <input name="email" type="text" placeholder="Email" className="field landing-page-field" meta="[object Object]" />
                    </div>
                    <div className="input-parent">
                        <input name="first_name" type="text" placeholder="First Name" className="field landing-page-field" meta="[object Object]" />
                    </div>
                    <div className="input-parent">
                        <input name="last_name" type="text" placeholder="Last Name" className="field landing-page-field" meta="[object Object]" />
                    </div>
                    <div className="input-parent">
                        <input name="password" type="password" placeholder="Password" className="field landing-page-field" meta="[object Object]" />
                    </div>
                    <div className="input-parent">
                        <input name="password_confirmation" type="password" placeholder="Password Confirmation" className="field landing-page-field" meta="[object Object]" />
                    </div>
                    <button type="submit" className="btn-submit">Sign up</button>
                    <div className="info text-support">
                        By creating an account, you are agreeing to<a href="/terms"> Meek Terms of Service</a>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default SignUp;