import React from 'react';
import '../../assets/stylesheets/ng-app/layout/main.scss';
import '../../assets/stylesheets/ng-app/header/header.scss';
import '../../assets/stylesheets/ng-app/header/center_side.scss';
import '../../assets/stylesheets/ng-app/header/left_side.scss';
import '../../assets/stylesheets/ng-app/header/right_side.scss';
function Header() {
    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <header id="main-header">
                        <div>
                            <div className="left-side">
                                <a href="/" className="header-item logo"><span className="header-logo"></span></a>
                                <a id="sidenav-button" className="header-item toggle-sidebar-button icon-hamburger" href='javascrip:void(0)'> </a>
                            </div>
                            <div className="center-side">
                                <a href="/" className="header-item logo"><span className="header-logo"></span></a>
                            </div>
                            <div className="right-side">
                                <div className="header-item header-search-link">
                                    <i className="icon-search-header"></i>
                                    <i className="icon-close-bold"></i>
                                </div>
                                <span className="header-item header-search">
                                    <form className="search-form ng-pristine ng-valid">
                                        <span className="search-block">
                                            <input id="search_input" className="form-control" autoComplete="off" placeholder="SEARCH" defaultValue="" />
                                            <button className="icon-search-header" type="submit">
                                            </button>
                                        </span>
                                    </form>
                                </span>
                                <div className="header-item">
                                    <div className="icon-wrapper">
                                        <div className="icon-login"></div>
                                        <div className="icon-text uppercase">Sign in</div>
                                    </div>
                                </div>
                                <span></span>
                                <div></div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}
export default Header;