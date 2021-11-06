import MoreVertical from './moreVertical/moreVertical.js';
import Search from './search/search.js';
import React from 'react';

const allIcons = props => {
    return {
        MoreVertical: <MoreVertical color={props.color}/>,
        Search: <Search color={props.color}/>
    }
};

export default allIcons;