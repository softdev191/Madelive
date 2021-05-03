const initState = {
	loggedIn: false,
	user: { uid: 'rU39b7L3sWZOyuTWDz6V9qLaaXI3' }
	// user: {}
}

const authReducer = (state = initState, action) => {

	switch (action.type) {
		case 'USER_LOGGED_IN':
			state = {
				loggedIn: true,
				user: action.payload
			}
			return state
		case 'USER_LOGGED_OUT':
			state = {
				loggedIn: false,
				user: {}
			}
			return state
		default:
			return state

	}

}

export default authReducer;