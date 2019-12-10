import React from 'react';
import './BlogCreateBox.css';
import firebase from '../../firebase';

export default function BlogCreateBox(props){

    function handleChange(key, value){
        switch (key) {
            case 'frTitle':
                props.setNewArticle({...props.newArticle, frTitle: value});
                break;
            case 'enTitle':
                props.setNewArticle({...props.newArticle, enTitle: value});
                break;
            case 'url':
                props.setNewArticle({...props.newArticle, url: value});
                break;
            case 'frText':
                props.setNewArticle({...props.newArticle, frText: value});
                break;
            case 'enText':
                props.setNewArticle({...props.newArticle, enText: value});
                break;
            default:
                console.log('Invalid item');
                break;
          }    
    }

    return (
            <div className="CreateArticleBox">
                <h3>{props.modify? 'Edit' : 'Create'} Article</h3>
                <div className="ButtonBox">
                    {
                        props.modify?
                        <button onClick={props.modifyDataBase}>Enregistrer</button>
                        :
                        <button onClick={props.saveToDatabase}>Enregistrer</button>
                    }
                    <button onClick={() => firebase.auth().signOut()}>Log out</button>
                </div>
                <textarea onChange={(e)=> handleChange(e.target.className, e.target.value)} value={props.newArticle.frTitle} type="text" className="frTitle" placeholder="Titre Francais"/>
                <textarea onChange={(e)=> handleChange(e.target.className, e.target.value)} value={props.newArticle.enTitle} type="text" className="enTitle" placeholder="English Title"/>
                <textarea onChange={(e)=> handleChange(e.target.className, e.target.value)} value={props.newArticle.url} type="text" className="url" placeholder="Embeded url" />
                <textarea onChange={(e)=> handleChange(e.target.className, e.target.value)} value={props.newArticle.frText} type="setText" className="frText" placeholder="Texte Français" />
                <textarea onChange={(e)=> handleChange(e.target.className, e.target.value)} value={props.newArticle.enText} type="setext" className="enText" placeholder="English Text" />
            </div>
    );

}