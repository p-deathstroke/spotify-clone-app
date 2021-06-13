export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	//remove the token value after development
	// token:
	// 	"BQAqff56C_m2qRjF-hTr0tnC7inlRD_KjNwoA8CB3R3y_rmv4_hiIrCMgThYbsJfbRxmn479FKNDjijC7X94qOhu2Q_bJsfnLgGHQeVU6H9V2_QZC1nnR7pGwy_4__sKnrtAqsYa8rLOeynj0sLw16PHXbXlTOcgX6ka8f2FEg",
};

const reducer = (state, action) => {
	console.log(action);

	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};
		default:
			return state;
	}
};

export default reducer;
