import React, { useContext, useState } from 'react';
import './BlogCreate.css';
import '../Collaborations/Collaborations.css'
import firebase from '../../firebase';
import Article from '../Collaborations/Article';
import {ContextLanguage}from '../../UserContext';

export default function Collaborations(props){
    const {language} = useContext(ContextLanguage);
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

    }
    return (


        <div className="BlogEditPage">
            <div className="CreateArticle">
                <h3>Créer un Article</h3>
                <button onClick={saveToDatabase}>Enregistrer</button>
                <textarea onChange={handleFrTitleChange} type="text" name="setFrTitre" className="frTitre" placeholder="Titre Francais"/>
                <textarea onChange={handleEnTitleChange} type="text" name="setEnTitre" className="enTitre" placeholder="Titre Anglais"/>
                <textarea onChange={handleUrlChange} type="text" name="setUrl" className="url" placeholder="Embeded url" />
                <textarea onChange={handleFrTextChange} type="setText" name="frTexte" className="frTexte" placeholder="Texte Français" />
                <textarea onChange={handleEnTextChange} type="setext" name="enTexte" className="enTexte" placeholder="Texte Anglais" />
            </div>
            
            {language === "fr" ? <Article name={frTitle} url={url} text={frText} /> : <Article name={enTitle} url={url} text={enText} />}
        </div>
    );

}