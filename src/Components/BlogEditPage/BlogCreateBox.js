import React from 'react';
import './BlogCreateBox.css';

export default function BlogCreateBox(props){

    return (
            <div className="CreateArticleBox">
                <h3>Créer un Article</h3>
                <div className="ButtonBox">
                    <button onClick={props.saveToDatabase}>Enregistrer</button>
                    <button onClick={props.logOut}>Log out</button>
                </div>
                <textarea onChange={props.handleFrTitleChange} value={props.frTitle} type="text" name="setFrTitre" className="frTitre" placeholder="Titre Francais"/>
                <textarea onChange={props.handleEnTitleChange} value={props.enTitle} type="text" name="setEnTitre" className="enTitre" placeholder="Titre Anglais"/>
                <textarea onChange={props.handleUrlChange} value={props.url} type="text" name="setUrl" className="url" placeholder="Embeded url" />
                <textarea onChange={props.handleFrTextChange} value={props.frText} type="setText" name="frTexte" className="frTexte" placeholder="Texte Français" />
                <textarea onChange={props.handleEnTextChange} value={props.enText} type="setext" name="enTexte" className="enTexte" placeholder="Texte Anglais" />
            </div>
    );

}