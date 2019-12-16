import React,{useState, useContext} from 'react';
import './Article.css';
import firebase, {getArticles} from '../../firebase';
import {Context} from '../../Context';

export default function Article(props){
    const [visible, setVisible] = useState(true);
    const {language} = useContext(Context);

    function deleteArticle(e){
        setVisible(false)
        let id = e.target.id;
        firebase.firestore().collection("articles").doc(id).delete();
        getArticles();

    }

    function showEditArticle(){
        props.showEditArticle(props.article)
    }

    function cssStyle(){
        if(!visible){
            return {display: "none"};
        }else if(props.create){
            return { backgroundColor: "rgba(228, 255, 230, 0.473)" };
        }
    }

    return (
        <div className="Article" style={cssStyle()}>

            <h3>{language === 'fr' ? props.article.frTitle : props.article.enTitle}</h3>

            {
            props.editPage ?         
            <div className="ButtonBox">

                <button onClick={showEditArticle}>Edit</button>

                <button id={props.article.id} onClick={deleteArticle}>Delete</button>
                
            </div> :
            <div className="ButtonBox"></div>
            }

            <iframe title={props.article.frTitle} className="video" src={props.article.url} samesite="false" frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" webkitallowfullscreen allowfullscreen="allowfullscreen"></iframe>

            <div className="text">
                <p>{language === 'fr' ? props.article.frText : props.article.enText}</p>
            </div>
        </div>
    )
}