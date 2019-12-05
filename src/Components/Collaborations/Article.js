import React from 'react';

export default function Article(props){
    return (
        <div className="Article">
            <h3>{props.name}</h3>
            <iframe title={props.name} className="video" src={props.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="text">
                <p>    
                {props.text1}
                <br/>
                {props.text2}
                <br/>
                {props.text3}
                <br/>
                {props.text4}
                <br/>
                {props.text5}
                </p>
            </div>
        </div>
    )
}