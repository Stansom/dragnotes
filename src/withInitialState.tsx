import { useState, useEffect, ComponentType } from "react";
import { AppState } from "./state/appStateReducer";
import { loadState } from "./utils/localStorage";

type InjectedProps = {
	initialState: AppState;
};

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>;

export function withInitialState<TProps>(
	WrappedComponent: React.ComponentType<
		PropsWithoutInjected<TProps> & InjectedProps
	>
) {
	return (props: PropsWithoutInjected<TProps>) => {
		const [initialState, setInitialState] = useState<AppState>({
			lists: [],
			draggedItem: null,
		});
		const [isLoading, setIsLoading] = useState(true);
		// const [error, setError] = useState<Error | undefined>();

		useEffect(() => {
			const data = loadState();
			setInitialState(data);
			setIsLoading(false);
		}, []);

		if (isLoading) {
			return <div>Loading...</div>;
		}
		return <WrappedComponent {...props} initialState={initialState} />;
	};
}
