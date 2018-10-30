import React from 'react';
import PropTypes from "prop-types";
import logonews from './kumparannews.jpg';
import berita from './berita1.jpg';

const Content = (props) => (
<div>
    <div className="contentContainer text-left">
        <div className="row">
            <div className="col-1">
                <img src={logonews} width="50px"/>
            </div>
            <div className="col-auto text-left">
                <div>
                    <h6 className="text-left">kumparanNEWS</h6>
                </div>
                <div>
                    <small className="text-muted">{props.date}</small>
                </div>
            </div>
        </div>
        <div>
            <img className="imgNews" src={props.img}/>
        </div>
        <h4><a href={props.url} >{props.title}</a></h4>
        <div className="Author">Authors : {props.author}</div>
        <p>{props.content}</p>
        <div className="row text-center">
            <div className="col-4 contentAction">
                <i class="fas fa-heart"></i> Sukai
            </div>
            <div className="col-4 contentAction">
            <i class="fas fa-comment"></i> Komentar   
            </div>
            <div className="col-4 contentAction">
            <i class="fas fa-share-alt"></i> Bagikan
            </div>
        </div>
    </div>
</div>
    
);
export default Content;