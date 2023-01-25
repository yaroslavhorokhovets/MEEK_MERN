import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/stylesheets/ng-app/layout/main.scss';
import '../../assets/stylesheets/ng-app/static_page.scss';
import '../../assets/stylesheets/ng-app/item_view/grid_view.scss';
import '../../assets/stylesheets/ng-app/item_view/list_view.scss';
import '../../assets/stylesheets/ng-app/item_view/box_item.scss';
import '../../assets/stylesheets/ng-app/podcast_page.scss';
import Footer from '../footer/Footer';
import MordenPlayer from '../media/MordenPlayer';

function Podcast() {
    const contentStyle = {
        'marginTop': '90px'
    }
    const imgStyle = {
        "visibility": "visible"
    }
    // const [articles, setArticles] = useState(null)
    const { categoryId } = useParams();
    const [viewmode, setViewMode ] = useState('grid-view');
    const toggleViewMode = (mode) => {
        setViewMode(mode);           
    }
    const [showMediaPlayer, setShowMediaPlayer] = useState('none');
    const [thumbnailPath, setThumbnailPath] = useState('');
    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [audiopath, setAudiopath] = useState('/audio.mp4');
    

    const handleAudioPlayer = (e) => {
        setShowMediaPlayer('none')
        setThumbnailPath(e.target.parentNode.nextElementSibling.src)
        setWriter(e.target.getAttribute('data-writer'))
        setTitle(e.target.getAttribute('data-title'))
        setShowMediaPlayer('block')
        setAudiopath(e.target.getAttribute('data-audio'))
    }

    useEffect(() => {
        // console.log(categoryId);
    }, [categoryId])
    return (
        <div className='row static-page podcast' style={contentStyle}>
            <div className="header-page col-md-12 p-0" style={{'backgroundImage': 'url("/system/categories/wallpapers/000/000/005/normal/sermons.png?146046736'}}>
                <div className='header-page-bg'>
                    <div className="list-breadcrumbs left-right-offset row m-0">
                        <div className='col-md-12'>
                            <div className="list-breadcrumbs-item">
                                <div className="last-flex-item-container">
                                    <a href="/" className="uppercase">Podcasts</a>
                                </div>
                            </div>
                            <div className="list-breadcrumbs-item">
                                <div className="last-flex-item-container text-capitalize">{categoryId}</div>
                            </div>
                        </div>
                    </div>
                    <div className="categories uppercase"> podcasts, {categoryId} </div>
                    <h1 className="title text-capitalize">Christian Sermon Podcasts and Bible Teaching {categoryId} </h1>
                    <div className="info">Showing 14 Podcasts</div>
                    <div className="switcher-wrapper">
                        <div className={`switcher-item ${(viewmode==='grid-view')?'active':''}`} onClick={() => toggleViewMode("grid-view")}>
                            <div className="icon-grid"></div>
                        </div>
                        <div className={`switcher-item ${(viewmode==='list-view')?'active':''}`} onClick={() => toggleViewMode('list-view')}>
                            <div className="icon-list"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-12'>
                <div className="left-right-offset">
                    <ul className={`list-box ${viewmode}`}>
                        <li className="list-box-item">
                            <div>
                                <div className="item-box-image" onClick={(e) => handleAudioPlayer(e)}>
                                    <div className="bg-dark">
                                        <div className="icon-button-play btn-play-media" data-writer="Abdul Hameed" data-title="Vanderbloemen Blog" data-audio="/audio.mp4"></div>
                                    </div>
                                    <img className='image' alt="" src="/system/podcasts/images/000/000/009/normal/christianworldnews.png?1458136951" style={imgStyle} />
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
                                <div className="item-box-image" onClick={(e) => handleAudioPlayer(e)}>
                                    <div className="bg-dark">
                                        <div className="icon-button-play btn-play-media" data-writer="Wasili Marina" data-title="Shape Of You" data-audio="/shape_of_you.mp3"></div>
                                    </div>
                                    <img className='image' alt="" src="/system/podcasts/images/000/000/021/normal/focusonthefamily.png?1458136951" style={imgStyle} />
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
                                <div className="item-box-image" onClick={(e) => handleAudioPlayer(e)}>
                                    <div className="bg-dark">
                                        <div className="icon-button-play btn-play-media" data-writer="Ekaterina Pyodorovna" data-title="Rise Blog" data-audio="/rise.mp3"></div>
                                    </div>
                                    <img className='image' alt="" src="/system/podcasts/images/000/000/157/normal/Good_News_from_The_Middle_East_Logo.jpg?1458136951" style={imgStyle} />
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
            <MordenPlayer filePath={audiopath} thumbnailPath={thumbnailPath} writer={writer} title={title} show={showMediaPlayer} />
            <Footer />
        </div