import React from 'react';
import MusicListItem from './music_list_items';


function musicList(props) {
    var index = 0;
    const songs = props.albumData.songs.map(function(data){
        return <MusicListItem key={index++}  name={data.songName} onClick={(event) => { console.log(event.target);  }}/>
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