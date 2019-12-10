import React, { useContext, useState } from 'react';
import './BlogEditPage.css';
import firebase from '../../firebase';
import Article from '../BlogPage/Article';
import {LanguageContext} from '../../LanguageContext';
import Blog from '../BlogPage/Blog';
import BlogCreateBox from './BlogCreateBox';
import {UserContext} from '../../UserContext';
import Login from './Login'

export default function BlogEditPage(props){
    const {language} = useContext(LanguageContext);
    const {currentUser} = useContext(UserContext);
    const [frTitle, setFrTitle] = useState();
    const [enTitle, setEnTitle] = useState();
    const [url, setUrl] = useState();
    const [frText, setFrText] = useState();
    const [enText, setEnText] = useState();
    const [reload, setReload] = useState(false);
    const [modify, setModify] = useState(false)
    const [id, setId] = useState();

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
        if(frTitle && enTitle && url && frText && enText){
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
        setReload(reload + 1);
        }else{
            alert("Missing a field!")
        }
    }

    function editArticle(article){
        setModify(true);
        setId(article.id)
        setFrTitle(article.frTitle)
        setEnTitle(article.enTitle)
        setUrl(article.url)
        setFrText(article.frText)
        setEnText(article.enText)
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    function modifyDataBase(){
        if(frTitle && enTitle && url && frText && enText){
            firebase.firestore().collection('articles').doc(id).update({
                'frTitle': frTitle,
                'enTitle': enTitle,
                'url': url,
                'frText': frText,
                'enText': enText,
            });
                setFrTitle("")
                setEnTitle("")
                setUrl("")
                setFrText("")
                setEnText("")
                setModify(false);
                setTimeout(setReload(Date.now()), 3000);
            }else{
                alert("Missing a field!")
            }
    }
    
    function newArticle(){
        if((frTitle || enTitle || url || frText || enText) && (language === "fr")){
            return <Article title={frTitle} url={url} text={frText} create="true" />
        }else if((frTitle || enTitle || url || frText || enText) && (language === "en")){
            return <Article title={enTitle} url={url} text={enText} create="true" />
        }
    }

    function loginOrEdit(){
        if(currentUser){
            return (
                <div className="BlogEditPage">
                    <BlogCreateBox frTitle={frTitle} enTitle={enTitle} url={url} frText={frText} enText={enText} 
                    handleFrTitleChange={handleFrTitleChange} handleEnTitleChange={handleEnTitleChange} handleUrlChange={handleUrlChange} 
                    handleFrTextChange={handleFrTextChange} handleEnTextChange={handleEnTextChange} 
                    saveToDatabase={saveToDatabase} modify={modify} modifyDataBase={modifyDataBase} />
                    
                    {newArticle()}
        
                    <Blog key={reload} setReload={setReload} editPage="true" editArticle={editArticle} />
        
                </div>
            )
        }
        return <Login />
    }

    return (
        <div>
            {loginOrEdit()}
        </div>
    );

}