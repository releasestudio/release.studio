import React from 'react';
import './Article.css';

export default function Article(props){
    return (
        <div className="Article">
            <h3>{props.title}</h3>
            <iframe title={props.title} className="video" src={props.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="text">
                <p>{props.text}</p>
            </div>
        </div>
    )
}