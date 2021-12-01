import { AppState } from "../state/appStateReducer";

export const loadState = () => {
	const pulledState = localStorage.getItem("state");

	if (pulledState) {
		const parsedJson: AppState = JSON.parse(pulledState);
		return parsedJson;
	} else {
		return { lists: [], draggedItem: null };
	}
};

export const saveState = (state: AppState) => {
	try {
		const stringState = JSON.stringify(state);
		localStorage.setItem("state", stringState);
	} catch {
		console.error("can't save the state to the local storage");
	}
};
