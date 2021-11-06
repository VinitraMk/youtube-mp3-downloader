import React from 'react';
import allIcons from './allIcons';

class Icon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            allIcons(this.props)[this.props.iconName]
        );
    }
}

Icon.defaultProps = {
    iconName: 'MoreVertical',
    color: 'white'
};
export default Icon;
