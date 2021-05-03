export const unsubscriptionAction = (payload) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		const { id } = payload
		firestore.collection("subscription").doc(id).update({
			bookName: 0,
			seriesName: 0
		}).then(() => {
			// make async call to database
			dispatch({ type: 'DELETE_SUBSCRIPTION', payload });
		}).catch((err) => {
			dispatch({ type: 'DELETE_SUBSCRIPTION_FAILURE', err });
		});
	}
}