import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import '../../assets/stylesheets/ng-app/layout/main.scss';
import '../../assets/stylesheets/ng-app/static_page.scss';
import '../../assets/stylesheets/ng-app/item_view/grid_view.scss';
import '../../assets/stylesheets/ng-app/item_view/list_view.scss';
import '../../assets/stylesheets/ng-app/item_view/box_item.scss';
import '../../assets/stylesheets/ng-app/category_inside.scss';
import '../../assets/stylesheets/ng-app/podcast_page.scss';
import '../../assets/stylesheets/ng-app/list_media_line.scss';
import Footer from '../footer/Footer';

function Detail() {
    const contentStyle = {
        'marginTop': '90px'
    }
    // const [articles, setArticles] = useState(null)
    const { categoryId, itemName } = useParams();
    const [urlpath, setUrlPath] = useState("/");

    useEffect(() => {
        console.log(categoryId);
    }, [categoryId])

    return (
        <div className='row static-page article' style={contentStyle}>
            <div className="header-page col-md-12 p-0">
                <div className='header-page-bg'>
                    <div className="list-breadcrumbs left-right-offset row m-0">
                        <div className="list-breadcrumbs-item col-md-12">
                            <div className="last-flex-item-container">
                                <a href="/" className="uppercase">Articles</a>
                            </div>
                        </div>
                        <div className="list-breadcrumbs-item">
                            <div className="last-flex-item-container text-capitalize">{categoryId} &nbsp; &#62; &nbsp; {itemName}</div>
                        </div>
                    </div>
                    <div className="categories uppercase"> articles, {itemName} </div>
                    <h1 className="title text-capitalize"> {itemName} </h1>
                </div>
            </div>
            <div className='col-md-12 podcast' id="inside-page">
                <div className="list-soc">
                    <div className="list-soc-item" ng-click="favorite.addToFavorite(article.id, 'Article')">
                        <div className="icon icon-heart add-favourite active"></div>
                        <div className="title">
                            Add to
                            <span>Favorites</span>
                        </div>
                    </div>
                    <div className="list-soc-item">
                        <div className="icon icon-facebook soc-facebook" ng-click="share.shareLink( 'facebook', { imagePath: article.image, title: article.name, linkPath: aritcle.path } )"></div>
                        <div className="title">
                            <span>Facebook</span>
                        </div>
                    </div>
                    <div className="list-soc-item">
                        <div className="icon icon-twitter soc-twitter" ng-click="share.shareLink( 'twitter', { imagePath: article.image, title: article.name, linkPath: article.path } )"></div>
                        <div className="title">
                            <span>Tweet</span>
                            this
                        </div>
                    </div>
                    <div className="list-soc-item">
                        <div className="icon icon-pinterest soc-pinterest" ng-click="share.shareLink( 'pinterest', { imagePath: article.image, title: article.name, linkPath: article.path } )"></div>
                        <div className="title">
                            <span>Pinterest</span>
                        </div>
                    </div>
                </div>
                <h1 className="title left-right-offset ng-binding">Outreach Magazine Blog</h1>
                <div className="description left-right-offset">
                    <img alt="/system/articles/images/000/000/045/normal/Outreach_Magazine_Blog_Logo_1.png?1659840731" src="/system/articles/images/000/000/045/normal/Outreach_Magazine_Blog_Logo_1.png?1659840731" data-xblocker="passed" style={{ "visibility": "visible" }} />
                    <div ng-bind-html="htmlSafeDescription" className="ng-binding">Sharing stories of outreach, helping Christian leadership discover the ideas, innovations, and resources that will equip them to advance the kingdom of God through the outreach efforts of the local church.</div>
                </div>
                <div className="fog mobile-landscape"></div>
                <div className="btn-read-more mobile-landscape" ng-click="fullDescription = true" ng-hide="fullDescription === true">
                    Read more
                </div>
                <div className="podcast-episodes-container left-right-offset">
                    <div className="title ng-binding">
                        11 Posts
                    </div>
                    <div className="sub-title">
                        <div className="sub-title-row">
                            <div className="sub-title-cell">
                                <form className="search-form small ng-pristine ng-valid ng-scope" ng-include="'partials/header/search.html'" ng-submit="loadMorePosts(1, searchQuery.text)">
                                    <span className="search-block ng-scope">
                                        <input autocomplete="off" className="form-control ng-pristine ng-untouched ng-valid ng-empty" id="search_input" ng-model="searchQuery.text" placeholder="SEARCH" />
                                        <button className="icon-search-header" type="submit"></button>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="list-media-line" ng-show="postsCount">
                        <div className="list-media-line-item ng-scope" ng-click="toggleActivePost(post)" ng-repeat="post in posts">
                            <div className="media-item">
                                <div className="media-item-action"></div>
                            </div>
                            <div className="media-item center-side">
                                <div className="media-item-table">
                                    <div className="name ng-binding ng-scope" ng-if="!isActive(post)">
                                        89.3 Million Forcibly Displaced from Their Homes
                                    </div>
                                    <div className="date ng-binding">
                                        10/13/2022
                                    </div>
                                </div>
                            </div>
                            <div className="media-item">
                                <a className="media-item-show" href={`${urlpath}`}>
                                    <div className="icon-info"></div>
                                </a>
                            </div>
                        </div>
                        <div className="list-media-line-item ng-scope" ng-click="toggleActivePost(post)" ng-repeat="post in posts">
                            <div className="media-item">
                                <div className="media-item-action"></div>
                            </div>
                            <div className="media-item center-side">
                                <div className="media-item-table">
                                    <div className="name ng-binding ng-scope" ng-if="!isActive(post)">
                                        Free at Last
                                    </div>
                                    <div className="date ng-binding">
                                        06/08/2022
                                    </div>
                                </div>
                            </div>
                            <div className="media-item">
                                <a className="media-item-show" href={`${urlpath}`}>
                                    <div class="icon-info"></div>
                                </a>
                            </div>
                        </div>
                        <div class="list-media-line-item ng-scope" ng-click="toggleActivePost(post)" ng-repeat="post in posts">
                            <div class="media-item">
                                <div class="media-item-action"></div>
                            </div>
                            <div class="media-item center-side">
                                <div class="media-item-table">
                                    <div class="name ng-binding ng-scope" ng-if="!isActive(post)">
                                        Hope for the Ukraine
                                    </div>
                                    <div class="date ng-binding">
                                        03/11/2022
                                    </div>
                                </div>
                            </div>
                            <div class="media-item">
                                <a class="media-item-show" href={`${urlpath}`}>
                                    <div class="icon-info"></div>
                                </a>
                            </div>
                        </div>
                        <div class="list-media-line-item ng-scope" ng-click="toggleActivePost(post)" ng-repeat="post in posts">
                            <div class="media-item">
                                <div class="media-item-action"></div>
                            </div>
                            <div class="media-item center-side">
                                <div class="media-item-table">
                                    <div class="name ng-binding ng-scope" ng-if="!isActive(post)">
                                        Not Forgotten: Christmas Joy for Children in Syria
                                    </div>
                                    <div class="date ng-binding">
                                        12/10/2021
                                    </div>
                                </div>
                            </div>
                            <div class="media-item">
                                <a class="media-item-show" href={`${urlpath}`}>
                                    <div class="icon-info"></div>
                                </a>
                            </div>
                        </div>
                        <div class="list-media-line-item ng-scope" ng-click="toggleActivePost(post)" ng-repeat="post in posts">
                            <div class="media-item">
                                <div class="media-item-action"></div>
                            </div>
                            <div class="media-item center-side">
                                <div class="media-item-table">
                                    <div class="name ng-binding ng-scope" ng-if="!isActive(post)">
                                        Women Who Risk
                                    </div>
                                    <div class="date ng-binding">
                                        01/25/2021
                                    </div>
                                </div>
                            </div>
                            <div class="media-item">
                                <a class="media-item-show" href={`${urlpath}`}>
                                    <div class="icon-info"></div>
                                </a>
                            </div>
                        </div>
                        <div class="list-media-line-item ng-scope" ng-click="toggleActivePost(post)" ng-repeat="post in posts">
                            <div class="media-item">
                                <div class="media-item-action"></div>
                            </div>
                            <div class="media-item center-side">
                                <div class="media-item-table">
                                    <div class="name ng-binding ng-scope" ng-if="!isActive(post)">
                                        The Angry Syrian Soldier
                                    </div>
                                    <div class="date ng-binding">
                                        10/20/2020
                                    </div>
                                </div>
                            </div>
                            <div class="media-item">
                                <a class="media-item-show" href={`${urlpath}`}>
                                    <div class="icon-info"></div>
                                </a>
                            </div>
                        </div>
                        <div class="list-media-line-item ng-scope" ng-click="toggleActivePost(post)" ng-repeat="post in posts">
                            <div class="media-item">
                                <div class="media-item-action"></div>
                            </div>
                            <div class="media-item center-side">
                                <div class="media-item-table">
                                    <div class="name ng-binding ng-scope" ng-if="!isActive(post)">
                                        Lebanon’s 911
                                    </div>
                                    <div class="date ng-binding">
                                        08/10/2020
                                    </div>
                                </div>
                            </div>
                            <div class="media-item">
                                <a class="media-item-show" href={`${urlpath}`}>
                                    <div class="icon-info"></div>
                                </a>
                            </div>
                        </div>
                        <div class="list-media-line-item ng-scope" ng-click="toggleActivePost(post)" ng-repeat="post in posts">
                            <div class="media-item">
                                <div class="media-item-action"></div>
                            </div>
                            <div class="media-item center-side">
                                <div class="media-item-table">
                                    <div class="name ng-binding ng-scope" ng-if="!isActive(post)">
                                        I Found the Truth
                                    </div>
                                    <div class="date ng-binding">
                                        04/23/2020
                                    </div>
                                </div>
                            </div>
                            <div class="media-item">
                                <a class="media-item-show" href={`${urlpath}`}>
                                    <div class="icon-info"></div>
                                </a>
                            </div>
                        </div>
                        <div class="list-media-line-item ng-scope" ng-click="toggleActivePost(post)" ng-repeat="post in posts">
                            <div class="media-item">
                                <div class="media-item-action"></div>
                            </div>
                            <div class="media-item center-side">
                                <div class="media-item-table">
                                    <div class="name ng-binding ng-scope" ng-if="!isActive(post)">
                                        Jerusalem: The Holocaust Survivor
                                    </div>
                                    <div class="date ng-binding">
                                        07/15/2019
                                    </div>
                                </div>
                            </div>
                            <div class="media-item">
                                <a class="media-item-show" href={`${urlpath}`}>
                                    <div class="icon-info"></div>
                                </a>
                            </div>
                        </div>
                        <div class="list-media-line-item ng-scope" ng-click="toggleActivePost(post)" ng-repeat="post in posts">
                            <div class="media-item">
                                <div class="media-item-action"></div>
                            </div>
                            <div class="media-item center-side">
                                <div class="media-item-table">
                                    <div class="name ng-binding ng-scope" ng-if="!isActive(post)">
                                        Aleppo: The Terrorist’s Wife
                                    </div>
                                    <div class="date ng-binding">
                                        11/15/2018
                                    </div>
                                </div>
                            </div>
                            <div class="media-item">
                                <a class="media-item-show" href={`${urlpath}`}>
                                    <div class="icon-info"></div>
                                </a>
                            </div>
                        </div><div class="list-media-line-item ng-scope" ng-click="toggleActivePost(post)" ng-repeat="post in posts">
                            <div class="media-item">
                                <div class="media-item-action"></div>
                            </div>
                            <div class="media-item center-side">
                                <div class="media-item-table">
                                    <div class="name ng-binding ng-scope" ng-if="!isActive(post)">
                                        Afghanistan: Reza the Refugee
                                    </div>
                                    <div class="date ng-binding">
                                        06/20/2018
                                    </div>
                                </div>
                            </div>
                            <div class="media-item">
                                <a class="media-item-show" href={`${urlpath}`}>
                                    <div class="icon-info"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="scroll-bottom-sensor ng-scope" ng-if="postsNextPage" on-reach-bottom="loadMorePosts( postsNextPage, searchQuery.text )"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Detail;