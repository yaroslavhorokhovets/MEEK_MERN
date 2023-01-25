import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import SignUp from './components/auth/SignUp';
import About from './components/about/About';
import Terms from './components/terms/Terms';
import Privacy from './components/privacy/Privacy';
import ContactUs from './components/contactus/ContactUs';
import Cookies from './components/cookies/Cookies';
import Article from './components/article/Article';
import Podcast from './components/podcast/Podcast';
import Detail from './components/detail/Detail';
import Blog from './components/blog/Blog';
import Page404 from './components/Page404';
import './App.scss';

const store = createStore(
  rootReducer
)
// const action = type => store.dispatch({type})

function App() {


  return (
    <>
      <Provider store={store}>
        <Header />
        <div className='row'>
          <div className='col-md-2'><Navbar /></div>
          <div className='col-md-10'>
            <BrowserRouter>
              <Routes>
                <Route index element={<Home />} />
                <Route path='home' element={<Home />} />                
                <Route path='setup' element={<SignUp />} />
                <Route path='about' element={<About />} />
                <Route path='terms' element={<Terms />} />
                <Route path='privacy' element={<Privacy />} />
                <Route path='contactus' element={<ContactUs />} />
                <Route path='cookies' element={<Cookies />} />
                <Route path='blog' element={<Blog />} />
                <Route path='article/:categoryId/:itemName' element={<Detail />} />
                <Route path='article/:categoryId' element={<Article />} />
                <Route path='podcast/:categoryId' element={<Podcast />} />
                <Route path='*' element={<Page404 />} />
              </Routes>
            </BrowserRouter></div>
        </div>

      </Provider>
    </>
  );
}

export default App;
