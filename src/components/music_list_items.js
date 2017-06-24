import React from 'react';


function MusicListItems(props){
    return(
        <li className="list-group-item">
            {props.name}
        </li>
    )
};


export default MusicListItems;