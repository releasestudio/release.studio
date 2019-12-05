import React, { useContext, useState } from 'react';
import './Collaborations.css';
import Article from './Article';
import {BlogArticlesFr} from './BlogArticlesFr';
import {BlogArticlesEng} from './BlogArticlesEng';
import UserContext from '../../LanguageContext';

export default function Collaborations(props){
    const [language] = useState(useContext(UserContext));

    function renderBlog(){
        if(language === "fr"){
            return BlogArticlesFr.map(article =>{
                return <Article name={article.name} url={article.url} text1={article.text1} text2={article.text2} text3={article.text3} text4={article.text4} text5={article.text5} />
        })}
        else{
            return BlogArticlesEng.map(article =>{
                return <Article name={article.name} url={article.url} text1={article.text1} text2={article.text2} text3={article.text3} text4={article.text4} text5={article.text5} />
            })
        }
    }

    return (
        <div className="Blog">
            {
            renderBlog()
            }
        </div>
    );

}