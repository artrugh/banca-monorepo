import React from 'react';
import ReactDOM from 'react-dom';
// style
import './styles/index.scss';

import App from './App';
import FetchUser from './FetchUser'
import FetchTestimonies from './FetchTestimonies'
import FetchProducts from './FetchProducts';


ReactDOM.render(
    <FetchUser render={data => (
        <FetchProducts props={data} render={data => (
            <FetchTestimonies props={data} render={data => (
                <App props={data} />
            )} />
        )} />
    )} />
    , document.getElementById('root'));

