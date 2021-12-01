import { createContext, useContext, useEffect, Dispatch } from "react";
import { appStateReducer, AppState, List, Task } from "./appStateReducer";
import { useImmerReducer } from "use-immer";
import { Action } from "./actions";
import { DragItem } from "../DragItem";
import { withInitialState } from "../withInitialState";
import { saveState } from "../utils/localStorage";

type AppStateProviderProps = {
	children: React.ReactNode;
	initialState: AppState;
};

type AppStateContextProps = {
	lists: List[];
	getTasksByListId(id: string): Task[];
	dispatch: Dispatch<Action>;
	draggedItem: DragItem | null;
};

const AppStateContext = createContext<AppStateContextProps>(
	{} as AppStateContextProps
);

export const AppStateProvider = withInitialState<AppStateProviderProps>(
	({ children, initialState }) => {
		const [state, dispatch] = useImmerReducer(appStateReducer, initialState);

		useEffect(() => {
			saveState(state);
		}, [state]);

		const { draggedItem, lists } = state;
		const getTasksByListId = (id: string) => {
			return lists.find((list) => list.id === id)?.tasks || [];
		};

		return (
			<AppStateContext.Provider
				value={{ draggedItem, lists, getTasksByListId, dispatch }}
			>
				{children}
			</AppStateContext.Provider>
		);
	}
);

export const useAppState = () => {
	return useContext(AppStateContext);
};
