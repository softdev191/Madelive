export const subscriptionAction = (payload) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		// Get the firestore collection 
		firestore.collection('subscription').add(payload).then(() => {
			// make async call to database
			dispatch({ type: 'CREATE_SUBSCRIPTION', payload });
		}).catch((err) => {
			dispatch({ type: 'CREATE_SUBSCRIPTION_ERROR', err });
		});
	}
}