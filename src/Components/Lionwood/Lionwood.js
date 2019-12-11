import React, { useContext } from 'react';
import './Lionwood.css';
import {Context} from '../../Context';

export default function Lionwood(props){
    const {language} = useContext(Context);

    function renderBlog(){
        if(language === "fr"){
            return (
                <div className="text">
                
                <p>Découvrez le compositeur derrière le son de Release Studio.
                <br/>Une musique qui mêle audace, sensibilité et puissance, voilà peut-être l’ambition de sa musique.
                <br/>Des subtiles textures atmosphériques aux épiques percées électroniques, sa musique tantôt grandiose,
                <br/>tantôt intime, nous surprenant pour mieux nous apaiser.
                </p>

            </div>
            )}
        else{
           return(
                <div className="text">
                    
                    <p>
                        Descover the music composer behind the sound of Release Studio.
                    </p>

                </div>
           )}
    }

    return (
        <div className="Lionwood">

            <div className="LionwoodBanner">
                <img src={require("./Lionwood Banner 3.jpg")} alt="Lionwood-Banner" />
            </div>

            {renderBlog()}

            <iframe title="soundcloud" className="SoundCloud" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/370141379&color=%23f59e79&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        
            <div className="PlatformLinks">
                <a href="https://open.spotify.com/artist/3aIU8XAQ95JDFz44SsDyuA?si=qmR8cL1FTw-oL5Aa2FqCJw" target="_blank" rel="noopener noreferrer" alt="SpotifyLink" src={require('./badge-spotify.png')}>
                    <img alt="SpotifyLink" src={require('./badge-spotify.png')}/>
                </a>
                <a href="https://itunes.apple.com/fr/artist/lionwood/1347088652" target="_blank" rel="noopener noreferrer" alt="AppleMusicLink" src={require('./badge-applemusic.png')}>
                    <img alt="AppleMusicLink" src={require('./badge-applemusic.png')}/>
                </a>
            </div>
        
        </div>
    )
}