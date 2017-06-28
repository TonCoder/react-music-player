import React from 'react';


function MusicListItems(props){
    
    function DisplayPlaying(){
        if(props.isPlaying){
           return <i className="fa fa-check" aria-hidden="true"></i>
        }
    }
    
    
    return(
        <li className="list-group-item playing" onClick={props.selectedSong} >
            {props.name}
            &nbsp; {DisplayPlaying()}
        </li>
    )
};


export default MusicListItems;