import React, { useState, useContext } from 'react';
import './BlogEditPage.css';
import firebase from '../../firebase';
import Article from '../BlogPage/Article';
import Blog from '../BlogPage/Blog';
import BlogCreateBox from './BlogCreateBox';
import Login from './Login'
import { Context } from "../../Context";

export default function BlogEditPage(props){
    const {currentUser} = useContext(Context)

    const [newArticle, setNewArticle] = useState({})

    const [reloadBlog, setReloadBlog] = useState(false);

    const [showAlert, setShowAlert] = useState("hidePopup")

    function reload(){
        setReloadBlog(Date.now());
        setNewArticle({
            frTitle: "",
            enTitle: "",
            url: "",
            frText: "",
            enText: "",
        })
    }

    function saveToDatabase(){
        if(newArticle.frTitle && newArticle.enTitle && newArticle.url && newArticle.frText && newArticle.enText){
        firebase.firestore().collection('articles').add({
            "date": Date.now(),
            "frTitle": newArticle.frTitle,
            "enTitle": newArticle.enTitle,
            "url": newArticle.url,
            "frText": newArticle.frText,
            "enText": newArticle.enText
        }).then(()=>reload());
        }else{
            setShowAlert("showPopup")
        }
    }

    function modifyDataBase(){
        if(newArticle.frTitle && newArticle.enTitle && newArticle.url && newArticle.frText && newArticle.enText){
            firebase.firestore().collection('articles').doc(newArticle.id).update({
                'frTitle': newArticle.frTitle,
                'enTitle': newArticle.enTitle,
                'url': newArticle.url,
                'frText': newArticle.frText,
                'enText': newArticle.enText,
            }).then(()=>reload());
            }else{
                setShowAlert("showPopup")
            }
    }

    function showEditArticle(article){
        setNewArticle({...newArticle,
            articleEdit: true,
            id: article.id,
            frTitle: article.frTitle,
            enTitle: article.enTitle,
            url: article.url,
            frText: article.frText,
            enText: article.enText,
        })
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
    function showPopup(){
        setShowAlert("hidePopup")
    }
    return (
        <div>
            {
                currentUser ?
                <div className="BlogEditPage">
                    <div className={showAlert}>
                        <h3>Missing a field!</h3>
                        <button className="ok" onClick={showPopup}>OK</button>
                    </div>
                    <BlogCreateBox newArticle={newArticle} setNewArticle={setNewArticle}
                    saveToDatabase={saveToDatabase} modify={newArticle.articleEdit} modifyDataBase={modifyDataBase}/>
                    
                    {(newArticle.frTitle || newArticle.enTitle || newArticle.url || newArticle.frText || newArticle.enText)?
                    <Article article={newArticle} create="true" />
                    :<div></div>}
        
                    <Blog key={reloadBlog} editPage="true" showEditArticle={showEditArticle} />
        
                </div>
                :
                <Login />

            }
        </div>
    );

}