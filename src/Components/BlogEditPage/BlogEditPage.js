import React, { useContext, useState } from 'react';
import './BlogEditPage.css';
import firebase from '../../firebase';
import Article from '../BlogPage/Article';
import Blog from '../BlogPage/Blog';
import BlogCreateBox from './BlogCreateBox';
import {UserContext} from '../../UserContext';
import Login from './Login'

export default function BlogEditPage(props){
    const {currentUser} = useContext(UserContext);

    const [newArticle, setNewArticle] = useState({})

    const [reloadBlog, setReloadBlog] = useState(false);

    function saveToDatabase(){
        if(newArticle.frTitle && newArticle.enTitle && newArticle.url && newArticle.frText && newArticle.enText){
        firebase.firestore().collection('articles').add({
            "date": Date.now(),
            "frTitle": newArticle.frTitle,
            "enTitle": newArticle.enTitle,
            "url": newArticle.url,
            "frText": newArticle.frText,
            "enText": newArticle.enText
        });
        setNewArticle({
            frTitle: "",
            enTitle: "",
            url: "",
            frText: "",
            enText: "",
        })
        // setReloadBlog(Date.now());
        }else{
            alert("Missing a field!")
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
            });
            setNewArticle({
                frTitle: "",
                enTitle: "",
                url: "",
                frText: "",
                enText: "",
            })
            // setReloadBlog(Date.now());
            }else{
                alert("Missing a field!")
            }
    }

    function showEditArticle(article){
        // setModify(true);
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

    return (
        <div>
            {
                currentUser ?
                <div className="BlogEditPage">
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