import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import '../../assets/stylesheets/ng-app/layout/main.scss';
import '../../assets/stylesheets/ng-app/static_page.scss';
import '../../assets/stylesheets/ng-app/item_view/grid_view.scss';
import '../../assets/stylesheets/ng-app/item_view/list_view.scss';
import '../../assets/stylesheets/ng-app/item_view/box_item.scss';
import Footer from '../footer/Footer';

function Article() {
    const contentStyle = {
        'marginTop': '90px'
    }
    // const [articles, setArticles] = useState(null)
    const { categoryId } = useParams();
    const [viewmode, setViewMode ] = useState('list-view');
    const toggleViewMode = (mode) => {
        console.log(mode);
        setViewMode(mode);           
    }

    useEffect(() => {
        console.log(categoryId);
    }, [categoryId])

    return (
        <div className='row static-page article' style={contentStyle}>
            <div className="header-page col-md-12 p-0">
                <div className="list-breadcrumbs left-right-offset row m-0">
                    <div className='col-md-12'>
                        <div className="list-breadcrumbs-item">
                            <div className="last-flex-item-container">
                                <a href="/" className="uppercase">Articles</a>
                            </div>
                        </div>
                        <div className="list-breadcrumbs-item">
                            <div className="last-flex-item-container text-capitalize">{categoryId}</div>
                        </div>
                    </div>
                </div>
                <div className="categories uppercase"> articles, {categoryId} </div>
                <h1 className="title text-capitalize"> {categoryId} </h1>
                <div className="info">Showing 11 Articles</div>
                <div className="switcher-wrapper">
                    <div className={`switcher-item ${(viewmode==='grid-view')?'active':''}`} onClick={() => toggleViewMode("grid-view")}>
                        <div className="icon-grid"></div>
                    </div>
                    <div className={`switcher-item ${(viewmode==='list-view')?'active':''}`} onClick={() => toggleViewMode('list-view')}>
                        <div className="icon-list"></div>
                    </div>
                </div>
            </div>
            <div className='col-md-12'>
                <div className="left-right-offset">
                    <ul className={`list-box ${viewmode}`}>
                        <li className="list-box-item">
                            <div>
                                <div className="item-box-image">
                                    <a className="link" href="/article/church-ministry-matters/vanderbloemen-blog" target="">
                                        <img className="image" src="/system/articles/images/000/000/011/normal/Lysa_Terkeurst_Blog_Logo_1.jpg?1659667890" alt="" data-xblocker="passed" style={{"visibility": "visible"}} />
                                    </a>
                                </div>
                                <div className="item-box-category">
                                    <a className="title" href="article/church-ministry-matters"> Church &amp; Ministry Matters </a>
                                </div>
                                <a className="item-box-name" href="/article/church-ministry-matters/vanderbloemen-blog" target="">Vanderbloemen Blog</a>
                                <div className="item-box-description">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                                <div className="item-box-description list-view">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                            </div>
                        </li>
                        <li className="list-box-item">
                            <div>
                                <div className="item-box-image">
                                    <a className="link" href="/article/church-ministry-matters/vanderbloemen-blog" target="">
                                        <img className="image" src="/system/articles/images/000/000/011/normal/Lysa_Terkeurst_Blog_Logo_1.jpg?1659667890" alt="" data-xblocker="passed" style={{"visibility": "visible"}} />
                                    </a>
                                </div>
                                <div className="item-box-category">
                                    <a className="title" href="article/church-ministry-matters"> Church &amp; Ministry Matters </a>
                                </div>
                                <a className="item-box-name" href="/article/church-ministry-matters/vanderbloemen-blog" target="">Vanderbloemen Blog</a>
                                <div className="item-box-description">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                                <div className="item-box-description list-view">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                            </div>
                        </li>
                        <li className="list-box-item">
                            <div>
                                <div className="item-box-image">
                                    <a className="link" href="/article/church-ministry-matters/vanderbloemen-blog" target="">
                                        <img className="image" src="/system/articles/images/000/000/011/normal/Lysa_Terkeurst_Blog_Logo_1.jpg?1659667890" alt="" data-xblocker="passed" style={{"visibility": "visible"}} />
                                    </a>
                                </div>
                                <div className="item-box-category">
                                    <a className="title" href="article/church-ministry-matters"> Church &amp; Ministry Matters </a>
                                </div>
                                <a className="item-box-name" href="/article/church-ministry-matters/vanderbloemen-blog" target="">Vanderbloemen Blog</a>
                                <div className="item-box-description">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                                <div className="item-box-description list-view">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                            </div>
                        </li>
                        <li className="list-box-item">
                            <div>
                                <div className="item-box-image">
                                    <a className="link" href="/article/church-ministry-matters/vanderbloemen-blog" target="">
                                        <img className="image" src="/system/articles/images/000/000/011/normal/Lysa_Terkeurst_Blog_Logo_1.jpg?1659667890" alt="" data-xblocker="passed" style={{"visibility": "visible"}} />
                                    </a>
                                </div>
                                <div className="item-box-category">
                                    <a className="title" href="article/church-ministry-matters"> Church &amp; Ministry Matters </a>
                                </div>
                                <a className="item-box-name" href="/article/church-ministry-matters/vanderbloemen-blog" target="">Vanderbloemen Blog</a>
                                <div className="item-box-description">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                                <div className="item-box-description list-view">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                            </div>
                        </li>
                        <li className="list-box-item">
                            <div>
                                <div className="item-box-image">
                                    <a className="link" href="/article/church-ministry-matters/vanderbloemen-blog" target="">
                                        <img className="image" src="/system/articles/images/000/000/011/normal/Lysa_Terkeurst_Blog_Logo_1.jpg?1659667890" alt="" data-xblocker="passed" style={{"visibility": "visible"}} />
                                    </a>
                                </div>
                                <div className="item-box-category">
                                    <a className="title" href="article/church-ministry-matters"> Church &amp; Ministry Matters </a>
                                </div>
                                <a className="item-box-name" href="/article/church-ministry-matters/vanderbloemen-blog" target="">Vanderbloemen Blog</a>
                                <div className="item-box-description">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                                <div className="item-box-description list-view">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                            </div>
                        </li>
                        <li className="list-box-item">
                            <div>
                                <div className="item-box-image">
                                    <a className="link" href="/article/church-ministry-matters/vanderbloemen-blog" target="">
                                        <img className="image" src="/system/articles/images/000/000/011/normal/Lysa_Terkeurst_Blog_Logo_1.jpg?1659667890" alt="" data-xblocker="passed" style={{"visibility": "visible"}} />
                                    </a>
                                </div>
                                <div className="item-box-category">
                                    <a className="title" href="article/church-ministry-matters"> Church &amp; Ministry Matters </a>
                                </div>
                                <a className="item-box-name" href="/article/church-ministry-matters/vanderbloemen-blog" target="">Vanderbloemen Blog</a>
                                <div className="item-box-description">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                                <div className="item-box-description list-view">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                            </div>
                        </li>
                        <li className="list-box-item">
                            <div>
                                <div className="item-box-image">
                                    <a className="link" href="/article/church-ministry-matters/vanderbloemen-blog" target="">
                                        <img className="image" src="/system/articles/images/000/000/011/normal/Lysa_Terkeurst_Blog_Logo_1.jpg?1659667890" alt="" data-xblocker="passed" style={{"visibility": "visible"}} />
                                    </a>
                                </div>
                                <div className="item-box-category">
                                    <a className="title" href="article/church-ministry-matters"> Church &amp; Ministry Matters </a>
                                </div>
                                <a className="item-box-name" href="/article/church-ministry-matters/vanderbloemen-blog" target="">Vanderbloemen Blog</a>
                                <div className="item-box-description">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                                <div className="item-box-description list-view">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                            </div>
                        </li>
                        <li className="list-box-item">
                            <div>
                                <div className="item-box-image">
                                    <a className="link" href="/article/church-ministry-matters/vanderbloemen-blog" target="">
                                        <img className="image" src="/system/articles/images/000/000/011/normal/Lysa_Terkeurst_Blog_Logo_1.jpg?1659667890" alt="" data-xblocker="passed" style={{"visibility": "visible"}} />
                                    </a>
                                </div>
                                <div className="item-box-category">
                                    <a className="title" href="article/church-ministry-matters"> Church &amp; Ministry Matters </a>
                                </div>
                                <a className="item-box-name" href="/article/church-ministry-matters/vanderbloemen-blog" target="">Vanderbloemen Blog</a>
                                <div className="item-box-description">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                                <div className="item-box-description list-view">Vanderbloemen Search Group blog on church staffing, pastor search, and church leadership best practices.</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Article;