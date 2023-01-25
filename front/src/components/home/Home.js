import React from 'react';
import '../../assets/stylesheets/ng-app/layout/main.scss';
import '../../assets/stylesheets/ng-app/home/home.scss';
import '../../assets/stylesheets/ng-app/home/motivation_block.scss';
import '../../assets/stylesheets/ng-app/item_view/grid_view.scss';
import '../../assets/stylesheets/ng-app/item_view/box_item.scss';
import '../../assets/stylesheets/ng-app/item_view/list_view.scss';

import Footer from '../footer/Footer';
function Home() {
    const favouriteStyle = {
        'marginTop': '90px',
        'backgroundColor': '#919191',
        'background': "linear-gradient(to right, rgba(0,0,0,0), rgba(57,57,57, 20)), url('/bg_favourite.png')",
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover'
    };
    const contentStyle = {
        'padding': '5%',
        'paddingRight': '10%'
    }
    const listenStyle = {
        'zIndex': '6',
        'whiteSpace': 'normal',
        'fontSize': '20px',
        'lineHeight': '22px',
        'fontWeight': '400px',
        'fontFamily': 'Open-Sans-Light',
        'color': '#fff',
        'maxWidth': '100%',
        'textAlign': 'right',
    }
    const headingStyle = {
        'zIndex': '5',
        'whiteSpace': 'normal',
        'fontSize': '46px',
        'lineHeight': '50px',
        'fontWeight': '600',
        'fontFamily': 'Bungee',
        'color': '#fff',
        'maxWidth': '100%',
        'textAlign': 'right',
        'paddingBottom': '7%'
    }
    const buttonGroupStyle = {
        'textAlign': 'right',
        'paddingTop': '2%'
    }
    const myButtonStyle = {
        'backgroundColor': '#4d97b7',
        'display': 'inline-block',
        'cursor': 'pointer',
        'color': '#fff',
        'fontSize': '17px',
        'padding': '18px 31px',
        'textDecoration': 'none',
        'textShadow': '0px 1px 0px #2f6627'
    }
    const imgStyle = {
        "visibility": "visible"
    }
    return (
        <div className='row'>
            <div className='col-md-12' style={favouriteStyle}>
                <div style={contentStyle}>
                    <div className="" style={headingStyle}>Listen to Your Favorite <br />Christian Podcasts</div>
                    <div style={listenStyle}>Listen to your favorite Christian podcasts anytime of&nbsp;the day.  <br />It's easy and free to use meek.ly.</div>
                    <div style={buttonGroupStyle}>
                        <a href="/setup" style={myButtonStyle}>Sign Up for Free</a>
                    </div>
                </div>
            </div>
            <div id='home' className='col-md-12'>
                <div className="recommended-header left-right-offset">
                    <span className="big-header"> New Releases For You </span>
                    <ul className="list-box grid-view">
                        <li className="list-box-item">
                            <div>
                                <div className="item-box-image">
                                    <div className="bg-dark">
                                        <div className="icon-button-play btn-play-media"></div>
                                    </div>
                                    <img className='image' alt="" src="/system/podcasts/images/000/000/006/normal/gracetpyou.png?1458136951" style={imgStyle} />
                                </div>
                                <div className="item-box-category"><a className="title" href="sermons"> Sermons </a></div>
                                <a className="item-box-name" href="/sermons/grace-to-you/spiritual-stability-part-4-thankful-prayer-b"> Spiritual Stability, Part 4: Thankful Prayer B </a>
                                <div className="item-box-description">The sins of this world are to be forgiven by God, but only when asked. If you continue to sin over and over...</div>
                                <div className="item-box-description list-view">The sins of this world are to be forgiven by God, but only when asked. If you continue to sin over and over asking God for forgiveness is the only way to truly cleanse your soul. This and more can be heard when turning into Grace to You’s very own John MacAuthor.</div>
                            </div>
                        </li>
                        <li className="list-box-item">
                            <div>
                                <div className="item-box-image">
                                    <div className="bg-dark">
                                        <div className="icon-button-play btn-play-media"></div>
                                    </div>
                                    <img className='image' alt="" src="/system/podcasts/images/000/000/006/normal/gracetpyou.png?1458136951" style={imgStyle} />
                                </div>
                                <div className="item-box-category"><a className="title" href="sermons"> Sermons </a></div>
                                <a className="item-box-name" href="/sermons/grace-to-you/spiritual-stability-part-4-thankful-prayer-b"> Spiritual Stability, Part 4: Thankful Prayer B </a>
                                <div className="item-box-description">The sins of this world are to be forgiven by God, but only when asked. If you continue to sin over and over...</div>
                                <div className="item-box-description list-view">The sins of this world are to be forgiven by God, but only when asked. If you continue to sin over and over asking God for forgiveness is the only way to truly cleanse your soul. This and more can be heard when turning into Grace to You’s very own John MacAuthor.</div>
                            </div>
                        </li>
                        <li className="list-box-item">
                            <div>
                                <div className="item-box-image">
                                    <div className="bg-dark">
                                        <div className="icon-button-play btn-play-media"></div>
                                    </div>
                                    <img className='image' alt="" src="/system/podcasts/images/000/000/006/normal/gracetpyou.png?1458136951" style={imgStyle} />
                                </div>
                                <div className="item-box-category"><a className="title" href="sermons"> Sermons </a></div>
                                <a className="item-box-name" href="/sermons/grace-to-you/spiritual-stability-part-4-thankful-prayer-b"> Spiritual Stability, Part 4: Thankful Prayer B </a>
                                <div className="item-box-description">The sins of this world are to be forgiven by God, but only when asked. If you continue to sin over and over...</div>
                                <div className="item-box-description list-view">The sins of this world are to be forgiven by God, but only when asked. If you continue to sin over and over asking God for forgiveness is the only way to truly cleanse your soul. This and more can be heard when turning into Grace to You’s very own John MacAuthor.</div>
                            </div>
                        </li>
                        <li className="list-box-item">
                            <div>
                                <div className="item-box-image">
                                    <div className="bg-dark">
                                        <div className="icon-button-play btn-play-media"></div>
                                    </div>
                                    <img className='image' alt="" src="/system/podcasts/images/000/000/006/normal/gracetpyou.png?1458136951" style={imgStyle} />
                                </div>
                                <div className="item-box-category"><a className="title" href="sermons"> Sermons </a></div>
                                <a className="item-box-name" href="/sermons/grace-to-you/spiritual-stability-part-4-thankful-prayer-b"> Spiritual Stability, Part 4: Thankful Prayer B </a>
                                <div className="item-box-description">The sins of this world are to be forgiven by God, but only when asked. If you continue to sin over and over...</div>
                                <div className="item-box-description list-view">The sins of this world are to be forgiven by God, but only when asked. If you continue to sin over and over asking God for forgiveness is the only way to truly cleanse your soul. This and more can be heard when turning into Grace to You’s very own John MacAuthor.</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div id='motivation-block' className='col-md-12'>
                <div className='text-wrapper left-right-offset'>
                    <div className='main-header'>Be Courageous</div>
                    <div className='divblock'></div>
                    <div className='underheader'>
                        <h2>Be strong and courageous, do not be terrified, do not be discouraged, for the Lord your God is with you where ever you go.</h2>
                        Joshua 1.9
                    </div>
                </div>
                <div className='footer left-right-offset'>
                    <ul>
                        <li>Listen to the top Christian podcast, Bible teaching and sermons.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;