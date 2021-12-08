import React from 'react';
import { View } from 'react-native';
import { componentStyles } from './styles';
import { connect } from 'react-redux';
import { utilities } from '../../common/services/utilities';
import { toggleLoader } from '../../store/actionCreators/modules/root.js';

class Loader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const message = utilities.isNullOrUndefined(this.props.loaderDetails) ? '' : this.props.loaderDetails.message;
        const showLoader = utilities.isNullOrUndefined(this.props.loaderDetails) ? false : this.props.loaderDetails.showLoader;
        return (
            showLoader && <View style={componentStyles(this.props.theme).loader}>
                <View style={componentStyles(this.props.theme).loaderContent}>
                    <Text style={componentStyles(this.props.theme).message}>{message}</Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        theme: state.root.theme,
        loaderDetails: state.root.loaderDetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleLoader: (showLoader, messagge) => {
            dispatch(toggleLoader(showLoader, message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);