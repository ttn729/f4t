import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './pages/error404';
import Vocab from './pages/vocab'
import Tienlen from './pages/tienlen';
import Books from './pages/books';
import Resources from './pages/resources'
import List100 from './pages/list100'
import Blog from './pages/blog'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <Routes>  
      <Route exact path="/" element={<App />}></Route>
      <Route exact path="/tienlen" element={<Tienlen />}></Route>
      <Route exact path="/books" element={<Books />}></Route>
      <Route exact path="/blog" element={<Blog />}></Route>
      <Route exact path="/list100" element={<List100 />}></Route>
      <Route exact path="/resources" element={<Resources />}></Route>
      <Route exact path="/vocab" element={<Vocab />}></Route>

      <Route path="*" element={<Error404 />}></Route>

    </Routes>
  </BrowserRouter >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);