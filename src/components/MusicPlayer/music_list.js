import React from 'react';
import MusicListItem from './music_list_items';


function musicList(props) {
    let currentlyPlaying = props.currentlyPlaying;
    let albumSongs = props.albumSongs;
    
    var index = 0;
    const songs = albumSongs.map(function(data){
        let isPlaying = false;
        
        if(currentlyPlaying.title.toLowerCase() === data.songName.toLowerCase()){
            isPlaying = true;
        }
        
        return <MusicListItem key={index++}  name={data.songName} selectedSong={event => props.onSongSelectedChange(data.songName, data.songUrl)} isPlaying={isPlaying}/>
    });
    
                

    return(
        <div className="col-xs-12">
          <ul className="list-group list-group-flush">
              {songs}
          </ul>
        </div>
    )
}


export default musicList;