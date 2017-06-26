import React from 'react';


function MusicListItems(props){
    return(
        <li className="list-group-item playing">
            {props.name}
            &nbsp;<i className="fa fa-volume-up" aria-hidden="true"></i>
        </li>
    )
};


export default MusicListItems;