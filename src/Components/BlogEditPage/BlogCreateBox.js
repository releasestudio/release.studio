import React from 'react';
import './BlogCreateBox.css';
import firebase from '../../firebase';

export default function BlogCreateBox(props){
    function logOut(){
        firebase.auth().signOut();
    }

    function newOrModify(){
        if(props.modify){
            return <button onClick={props.modifyDataBase}>Enregistrer</button>
        }
        return <button onClick={props.saveToDatabase}>Enregistrer</button>
    }

    return (
            <div className="CreateArticleBox">
                <h3>{props.modify? 'Edit' : 'Create'} Article</h3>
                <div className="ButtonBox">
                    {newOrModify()}
                    <button onClick={logOut}>Log out</button>
                </div>
                <textarea onChange={props.handleFrTitleChange} value={props.frTitle} type="text" name="setFrTitre" className="frTitre" placeholder="Titre Francais"/>
                <textarea onChange={props.handleEnTitleChange} value={props.enTitle} type="text" name="setEnTitre" className="enTitre" placeholder="English Title"/>
                <textarea onChange={props.handleUrlChange} value={props.url} type="text" name="setUrl" className="url" placeholder="Embeded url" />
                <textarea onChange={props.handleFrTextChange} value={props.frText} type="setText" name="frTexte" className="frTexte" placeholder="Texte Français" />
                <textarea onChange={props.handleEnTextChange} value={props.enText} type="setext" name="enTexte" className="enTexte" placeholder="English Text" />
            </div>
    );

}