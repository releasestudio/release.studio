import React, {useState} from 'react';
import './Article.css';
import firebase from '../../firebase';

export default function Article(props){
    const [visible, setVisible] = useState(true);

    function deleteArticle(e){
        setVisible(false)
        let id = e.target.id;
        firebase.firestore().collection("articles").doc(id).delete()
    }

    function showEditDelete(){
        if (props.editPage){
       return (
        <div className="ButtonBox">
            <button onClick={editArticle}>Edit</button>
            <button id={props.article.id} onClick={deleteArticle}>Delete</button>
        </div>
        )}
        return (<div className="ButtonBox"></div>);
    }

    function editArticle(){
        props.editArticle(props.article)
    }

    function style(){
        if(!visible){
            return style={display: "none"};
        }else if(props.create){
            return style={ backgroundColor: "rgba(228, 255, 230, 0.473)" }
        }
    }


    return (
        <div className="Article" style={style()}>
            <h3>{props.title}</h3>
            {showEditDelete()}
            <iframe title={props.title} className="video" src={props.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="text">
                <p>{props.text}</p>
            </div>
        </div>
    )
}