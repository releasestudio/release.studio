import React, { useContext, useState, useEffect } from 'react';
import './Collaborations.css';
import Article from './Article';
import {LanguageContext} from '../../LanguageContext';
import firebase from '../../firebase';
import {NavLink} from "react-router-dom";

function GetFirebaseData() {
    const [existingArticles, setExistingArticles] = useState([]);

    useEffect(() => {
            firebase
            .firestore()
            .collection("articles").orderBy("date", "desc")
            .get().then((snapshot) => {
                const articlesData = snapshot.docs.map((doc)=>({
                    'id': doc.id,
                    'frTitle': doc._document.proto.fields.frTitle.stringValue,
                    'enTitle': doc._document.proto.fields.enTitle.stringValue,
                    'url': doc._document.proto.fields.url.stringValue,
                    'frText': doc._document.proto.fields.frText.stringValue,
                    'enText': doc._document.proto.fields.enText.stringValue,
                }));
                // debugger
                setExistingArticles(articlesData);
            });
    }, [])

    return existingArticles; 
}

export default function Collaborations(props){
    const {language} = useContext(LanguageContext);

    function renderBlog(){
        const articlesData = GetFirebaseData();
        if(language === "fr"){
            return articlesData.map(article =>{
                return <Article title={article.frTitle} url={article.url} text={article.frText} />
        })}
        else{
            return articlesData.map(article =>{
                return <Article title={article.enTitle} url={article.url} text={article.enText} />
            })
        }
    }

    return (
        <div className="Blog">
            {
            renderBlog()
            }
            <div className="footer"><NavLink to="/blogcreate" >Copyright © Release Studio {new Date().getFullYear()}</NavLink></div>
        </div>
    )
}