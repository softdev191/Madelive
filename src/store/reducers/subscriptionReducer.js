const initState = {
	subscriptions: [],
	subscriptionsLoader: false,
	subscriptionsError: null
}

const subscriptionReducer = (state = initState, action) => {

	switch (action.type) {
		case 'GET_SUBSCRIPTIONS':
			state = {
				subscriptions: [],
				subscriptionsLoader: true,
				subscriptionsError: null
			}
			return state
		case 'SUBSCRIPTION_SUCCESS':
			state = {
				subscriptions: action.subscriptions,
				subscriptionsLoader: false,
				subscriptionsError: null
			}
			return state
		case 'SUBSCRIPTION_FAILURE':
			state = {
				subscriptions: action.payload,
				subscriptionsLoader: false,
				subscriptionsError: null
			}
			return state
		default:
			return state

	}

}

export default subscriptionReducer;