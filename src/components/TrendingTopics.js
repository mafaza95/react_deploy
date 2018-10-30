import React from 'react';

const TrendingTopics = props => (
    <div className="trendingWrapper">
        <div className="row text-left">
            <div className="col-3">
                <div className="numStyle">#{props.index+1}</div>
            </div>
            <div className="col-9">
                <a href={props.url}><span>{props.title}</span></a>
            </div>
        </div>
    </div>      
);

export default TrendingTopics;