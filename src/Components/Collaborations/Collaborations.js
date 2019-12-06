import React, { useContext, useState, useEffect } from 'react';
import './Collaborations.css';
import Article from './Article';
import {BlogArticlesFr} from './BlogArticlesFr';
import {BlogArticlesEng} from './BlogArticlesEng';
import {ContextLanguage} from '../../UserContext';
import firebase from '../../firebase';

export default function Collaborations(props){
    const {language} = useContext(ContextLanguage);
    const [existingArticles, setExistingArticles] = useState();

    useEffect(() => {
        firebase
        .firestore()
        .collection("articles")
        .onSnapshot((snapshot)  => {
            debugger
            // const articlesData = snapshot.docs.map((doc)=>({
            //     id: doc.id,
            //     ...doc.data()
            // }));
            // setExistingArticles(articlesData);
            // console.log(existingArticles);
        })
    }, [])

    // function renderBlog(){
    //     if(language === "fr"){
    //         return existingArticles.map(article =>{
    //             return <Article titre={article.frTitle} url={article.url} text={article.frText} />
    //     })}
    //     else{
    //         return existingArticles.map(article =>{
    //             return <Article titre={article.enTitle} url={article.url} text={article.enText} />
    //         })
    //     }
    // }

    // function renderBlog(){
    //     if(language === "fr"){
    //         return BlogArticlesFr.map(article =>{
    //             return <Article name={article.name} url={article.url} text={article.text} />
    //     })}
    //     else{
    //         return BlogArticlesEng.map(article =>{
    //             return <Article name={article.name} url={article.url} text={article.text} />
    //         })
    //     }
    // }

    return (
        <div className="Blog">
            {
            // renderBlog()
            }
        </div>
    );

}