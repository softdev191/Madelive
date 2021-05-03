export const getSubscriptionsAction = (data) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		dispatch({ type: 'GET_SUBSCRIPTIONS' });
		const firestore = getFirestore();
		let { uid } = data
		// Get the firestore collection 
		firestore.collection('subscription')
			.where("uid", "==", uid)
			.onSnapshot((querySnapshot) => {
				var subscriptions = [];
				querySnapshot.forEach((doc) => {
					subscriptions.push({ ...doc.data(), id: doc.id });
				});
				// console.log("Current subscriptions", subscriptions);
				dispatch({ type: 'SUBSCRIPTION_SUCCESS', subscriptions });
			})
		// .catch((error) => {
		// 	dispatch({ type: 'SUBSCRIPTION_FAILURE', error });
		// })
	}
}