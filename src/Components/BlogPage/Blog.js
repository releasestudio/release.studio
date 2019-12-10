import React, { useContext, useState, useEffect } from 'react';
import './Blog.css';
import Article from './Article';
import {LanguageContext} from '../../LanguageContext';
import firebase from '../../firebase';

function GetFirebaseData() {
    const [existingArticles, setExistingArticles] = useState([]);

    useEffect( () => {
        setExistingArticles([]);
            firebase
            .firestore()
            .collection("articles").orderBy("date", "desc")
            .get().then((snapshot) => {
                // debugger
                // try{
                const articlesData = snapshot.docs.map((doc)=>({
                    'id': doc.id,
                    'frTitle': doc._document.proto.fields.frTitle.stringValue,
                    'enTitle': doc._document.proto.fields.enTitle.stringValue,
                    'url': doc._document.proto.fields.url.stringValue,
                    'frText': doc._document.proto.fields.frText.stringValue,
                    'enText': doc._document.proto.fields.enText.stringValue,
                }));
                setExistingArticles(articlesData);
                    
                // }catch{
                //     window.location.reload()
                // };
            });
    }, [])
    return existingArticles; 
}

export default function Blog(props){
    const {language} = useContext(LanguageContext);

    function renderBlog(){
        const articlesData = GetFirebaseData();
        if(language === "fr"){
            return articlesData.map(article =>{
                return <Article article={article} title={article.frTitle} url={article.url} text={article.frText} editPage={props.editPage} editArticle={props.editArticle} key={article.id} />
        })}
        else{
            return articlesData.map(article =>{
                return <Article article={article} title={article.enTitle} url={article.url} text={article.enText} editPage={props.editPage} editArticle={props.editArticle} key={article.id} />
            })
        }
    }

    return (
        <div className="Blog">
            {
            renderBlog()
            }
        </div>
    )
}