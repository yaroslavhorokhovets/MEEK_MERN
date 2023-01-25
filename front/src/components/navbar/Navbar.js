import React, { useState, useEffect } from 'react';
import '../../assets/stylesheets/ng-app/layout/main.scss';
import '../../assets/stylesheets/ng-app/shared/side_navigation.scss';
import '../../assets/stylesheets/fonts/_meek-rails.scss';

function Navbar() {
    
    const [prodcast, setProdcast] = useState("none");
    const toggleProdcastNavItem = () => {
        setArticle("none");
        if(prodcast === 'none'){
            setProdcast("block");
        }else{
            setProdcast("none");
        }
    }

    const [article, setArticle] = useState("none");
    const toggleArticleNavItem = () => {
        setProdcast("none");
        if(article === 'none'){
            setArticle("block");
        }else{
            setArticle("none");
        }
    }

    const goBlogPage = () => {
        window.location.href = "/blog";
    }

    return (
        <>
            <div id="side-navigation-wrapper" ng-include="'partials/sidebar_navigation.html'" className="ng-scope">
                <nav id="side-navigation" className="ng-scope">
                    <ul className="catalog site-catalog ng-scope" ng-include="'partials/navigation.html'">
                        <li className="sidebar-block-name ng-scope">MY MENU</li>
                        <li className="section ng-scope">
                            <div className="section-header" onClick={toggleProdcastNavItem}>
                                <span className="icon-podcast"></span>
                                Podcasts
                            </div>
                            <ul className="new-panel-section" style={{'display':prodcast}}>
                                <li className="header">Podcasts</li>
                                <li ng-repeat="category in categories | filter: { kind: 'podcast' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="podcasts({ id: category.slug })" className="ng-binding" href="/podcast/sermons">
                                        Sermons
                                    </a>
                                </li><li ng-repeat="category in categories | filter: { kind: 'podcast' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="podcasts({ id: category.slug })" className="ng-binding" href="/podcast/bible-studies">
                                        Bible Studies
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'podcast' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="podcasts({ id: category.slug })" className="ng-binding" href="/podcast/women-studies">
                                        Women's Studies
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'podcast' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="podcasts({ id: category.slug })" className="ng-binding" href="/podcast/business">
                                        Business
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'podcast' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="podcasts({ id: category.slug })" className="ng-binding" href="/podcast/programs">
                                        Devotionals
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'podcast' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="podcasts({ id: category.slug })" className="ng-binding" href="/podcast/christian-talk">
                                        Christian Talk
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'podcast' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="podcasts({ id: category.slug })" className="ng-binding" href="/podcast/christian-family">
                                        Family and Marriage
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'podcast' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="podcasts({ id: category.slug })" className="ng-binding" href="/podcast/financial">
                                        Financial
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'podcast' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="podcasts({ id: category.slug })" className="ng-binding" href="/podcast/leadership">
                                        Leadership
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'podcast' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="podcasts({ id: category.slug })" className="ng-binding" href="/podcast/men">
                                        Men of Courage
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'podcast' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="podcasts({ id: category.slug })" className="ng-binding" href="/podcast/ministry-education">
                                        Ministry Education
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'podcast' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="podcasts({ id: category.slug })" className="ng-binding" href="/podcast/news">
                                        News
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'podcast' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="podcasts({ id: category.slug })" className="ng-binding" href="/podcast/young-adult">
                                        Young Adult
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="section ng-scope">
                            <div className="section-header" onClick={toggleArticleNavItem}>
                                <span className="icon-article"></span>
                                Articles
                            </div>
                            <ul className="new-panel-section" style={{'display':article}}>
                                <li className="header">Articles</li>
                                <li ng-repeat="category in categories | filter: { kind: 'article' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="articles({ id: category.slug })" className="ng-binding" href="/article/apologetics-understanding-christianity">
                                        Apologetics &amp; Understanding Christianity
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'article' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="articles({ id: category.slug })" className="ng-binding" href="/article/faith-culture">
                                        Faith &amp; Culture
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'article' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="articles({ id: category.slug })" className="ng-binding" href="/article/missions-evangelism">
                                        Missions &amp; Evangelism
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'article' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="articles({ id: category.slug })" className="ng-binding" href="/article/bible-study-blogs">
                                        Bible Study &amp; Theology Blogs
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'article' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="articles({ id: category.slug })" className="ng-binding" href="/article/devotions">
                                        Devotions
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'article' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="articles({ id: category.slug })" className="ng-binding" href="/article/family-relationships">
                                        Family &amp; Relationships
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'article' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="articles({ id: category.slug })" className="ng-binding" href="/article/christian-news">
                                        Christian News
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'article' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="articles({ id: category.slug })" className="ng-binding" href="/article/church-ministry-matters">
                                        Church &amp; Ministry Matters
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'article' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="articles({ id: category.slug })" className="ng-binding" href="/article/pastoral-leadership">
                                        Pastoral Leadership
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'article' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="articles({ id: category.slug })" className="ng-binding" href="/article/spiritual-growth-for-christians">
                                        Spiritual Growth for Christians
                                    </a>
                                </li>
                                <li ng-repeat="category in categories | filter: { kind: 'article' }" className="ng-scope">
                                    <a ng-click="sideNav.hideAllSections()" ui-sref="articles({ id: category.slug })" className="ng-binding" href="/article/christians-in-business">
                                        Christians in Business
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="section ng-scope" onClick={() => goBlogPage()}>
                            <div className="section-header">
                                <span className="icon-blog"></span>
                                Blog
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Navbar;