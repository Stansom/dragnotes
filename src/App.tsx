import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";
import { addList } from "./state/actions";
import { CustomDragLayer } from "./CustomDragLayer";

export const App = () => {
	const { lists, dispatch } = useAppState();

	return (
		<AppContainer>
			<h1>Draggable Todo</h1>
			<CustomDragLayer />
			{lists.map((list) => (
				<Column text={list.text} key={list.id} id={list.id} />
			))}
			<AddNewItem
				toggleButtonText="new list"
				onAdd={(text) => dispatch(addList(text))}
			/>
		</AppContainer>
	);
};
