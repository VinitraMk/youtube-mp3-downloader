import { ToastAndroid } from 'react-native';

export const showToastMessage = message => {
    ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.CENTER);
};
