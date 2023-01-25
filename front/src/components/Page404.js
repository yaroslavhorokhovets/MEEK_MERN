import React from 'react';
import Footer from './footer/Footer';
function Page404(){
    const contentStyle = {
        'marginTop': '90px'
    }
    return (
        <div className='row static-page static-404' style={contentStyle}>
            <div className="header-page col-md-12">
                <div className="list-breadcrumbs left-right-offset row">
                    <div className="list-breadcrumbs-item col-md-12">
                        <div className="last-flex-item-container">
                            <a href="/" className="uppercase">Home</a>
                        </div>
                    </div>
                    <div className="list-breadcrumbs-item">
                        <div className="last-flex-item-container">404</div>
                    </div>
                </div>
                <div class="categories uppercase">That page wasn't found here</div>
                <h1 class="title left-right-offset">We are so sorry!</h1>
                <div class="info">Try searching here of use menu to find what you need.</div>
                <div class="left-right-offset">
                    <form class="search-form">
                        <span class="search-block">
                            <input id="search_input" class="form-control" autocomplete="off" placeholder="SEARCH" />
                            <button class="icon-search-header" type="submit"></button>
                        </span>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Page404;