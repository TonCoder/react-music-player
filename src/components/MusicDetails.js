import React from 'react';

export default function MusicDetails(props){
    if(!props.songData){
        console.log("No Music information given, please check the app.js file.")
        
        return (
        <div className="col-xs-12">
            <img className="card-img-top" src="" alt="Card image cap" width="100%"/>
            <div className="card-text">
                <p className="songPlaying">N/A</p>
                <br/>
                <span className="artistName"> Artist: N/A</span>
                <br/>
                <span className="albumName">N/A</span>
            </div>
        </div> )    
    }
    
    return(
        <div className="col-xs-12">
            <div className="card-text">
                <span className="songPlaying">{props.songData.songPlaying}</span>
                <br/>
                <span className="artistName"> Artist: {props.songData.artist}</span>
                <br/>
                <span className="albumName">{props.songData.albumName}</span>
            </div>
        </div>
    )
}