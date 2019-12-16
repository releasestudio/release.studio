import React, { useState, useEffect } from 'react';
import './Blog.css';
import Article from './Article';
import {getArticles} from '../../firebase';

export default function Blog(props){
    const [existingArticles, setExistingArticles] = useState();

    useEffect( () => {
        setExistingArticles(JSON.parse(localStorage.getItem('articlesData')));
        getArticles().then(articles => setExistingArticles(articles));
    }, [])

    return (
        <div className="Blog">
            {
            existingArticles ?
            existingArticles.map(article =>{
                return <Article article={article} editPage={props.editPage} 
                showEditArticle={props.showEditArticle} key={article.id} />
            })
            :
            <div className="loading">
                <div className="loader1"></div>
                <div className="loader2"></div>
                <div className="loader3"></div>
            </div>
            }
        </div>
    )
}