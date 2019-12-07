import React, { useContext, useState } from 'react';
import './BlogEditPage.css';
import firebase from '../../firebase';
import Article from '../BlogPage/Article';
import {LanguageContext} from '../../LanguageContext';
import Blog from '../BlogPage/Blog';
import BlogCreateBox from './BlogCreateBox';

export default function BlogEditPage(props){
    const {language} = useContext(LanguageContext);
    const [frTitle, setFrTitle] = useState();
    const [enTitle, setEnTitle] = useState();
    const [url, setUrl] = useState();
    const [frText, setFrText] = useState();
    const [enText, setEnText] = useState();

    function handleFrTitleChange(e){
        setFrTitle(e.target.value);
    }
    function handleEnTitleChange(e){
        setEnTitle(e.target.value);
    }
    function handleUrlChange(e){
        setUrl(e.target.value);
    }
    function handleFrTextChange(e){
        setFrText(e.target.value);
    }
    function handleEnTextChange(e){
        setEnText(e.target.value);
    }

    function saveToDatabase(){
        firebase.firestore().collection('articles').add({
            "date": Date.now(),
            "frTitle": frTitle,
            "enTitle": enTitle,
            "url": url,
            "frText": frText,
            "enText": enText
        });
        setFrTitle("");
        setEnTitle("");
        setUrl("");
        setFrText("");
        setEnText("");
        // window.location.href = 'https://release.studio/Collaborations'
    }
    
    function newArticle(){
        if(frTitle || enTitle || url || frText || enText && language === "fr"){
            return <Article title={frTitle} url={url} text={frText} />
        }else if(frTitle || enTitle || url || frText || enText && language === "en"){
            return <Article title={enTitle} url={url} text={enText} />
        }
    }
    return (


        <div className="BlogEditPage">
            <BlogCreateBox frTitle={frTitle} enTitle={enTitle} url={url} frText={frText} enText={enText} 
            handleFrTitleChange={handleFrTitleChange} handleEnTitleChange={handleEnTitleChange} handleUrlChange={handleUrlChange} 
            handleFrTextChange={handleFrTextChange} handleEnTextChange={handleEnTextChange} 
            saveToDatabase={saveToDatabase} />
            
           {newArticle()}

           <Blog />

        </div>
    );

}