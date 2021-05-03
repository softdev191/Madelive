import firebase from 'firebase/app'

export const authenticate = () => {

	// console.log("9177186317",firebase.auth().currentUser);
    // console.log('authReducer');
    
    return (dispatch) => {
        firebase.auth().onAuthStateChanged(user => {
            console.log('auth state changed.');
            if (user != null) {
                console.log(user);
                dispatch({type: 'USER_LOGGED_IN', user})
            } else {
                dispatch({type: 'USER_LOGGED_OUT'})
            }
        });
    }

}
