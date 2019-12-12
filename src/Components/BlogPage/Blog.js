import React, { useState, useEffect } from 'react';
import './Blog.css';
import Article from './Article';
import firebase from '../../firebase';

export default function Blog(props){
    const [existingArticles, setExistingArticles] = useState(null);

    useEffect( () => {
        // setExistingArticles([]);
            firebase
            .firestore()
            .collection("articles").orderBy("date", "desc")
            .get().then((snapshot) => {
                // debugger
                const articlesData = snapshot.docs.map((doc)=>({
                    'id': doc.id,
                    'frTitle': doc._document.proto.fields.frTitle.stringValue,
                    'enTitle': doc._document.proto.fields.enTitle.stringValue,
                    'url': doc._document.proto.fields.url.stringValue,
                    'frText': doc._document.proto.fields.frText.stringValue,
                    'enText': doc._document.proto.fields.enText.stringValue,
                }));
                setExistingArticles(articlesData);
            });
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