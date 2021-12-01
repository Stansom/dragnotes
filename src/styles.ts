import styled from "styled-components";

interface DragPreviewContainerProps {
	isHidden?: boolean;
	isPreview?: boolean;
}

type AddItemButtonProps = {
	dark?: boolean;
};

type DragPreviewWrapperProps = {
	position: {
		x: number;
		y: number;
	};
};

export const AppContainer = styled.div`
	align-items: flex-start;
	background-color: #544179;
	color: #fff;
	display: flex;
	height: 100%;
	padding: 20px;
	width: 100%;
	flex-direction: column;
	align-items: space-between;
	margin: 0 auto;

	h1 {
		align-self: center;
	}
	@media (max-width: 768px) {
		align-items: center;
	}
`;

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
	transform: ${(props) => (props.isPreview ? "rotate(-5deg)" : undefined)};
	opacity: ${(props) => (props.isHidden ? 0 : 1)};
`;

export const ColumnContainer = styled(DragPreviewContainer)`
	background-color: #6166b3;
	border-radius: 5px;
	flex-grow: 0;
	min-height: 40px;
	margin-right: 20px;
	padding: 8px;
	width: 300px;
	margin-right: 0;
	margin-bottom: 20px;
`;

export const ColumnTitle = styled.div`
	font-weight: bold;
	padding: 6px 16px 12px;
`;

export const CardContainer = styled(DragPreviewContainer)`
	background-color: #32c1cd;
	border-radius: 5px;
	cursor: pointer;
	max-width: 300px;
	margin-bottom: 0.5rem;
	padding: 0.5rem 1rem;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
	background-color: #17d7a0;
	border-radius: 5px;
	border: none;
	color: ${(props) => (props.dark ? "#000" : "#fff")};
	cursor: pointer;
	max-width: 300px;
	padding: 10px 12px;
	text-align: left;
	transition: background 85ms ease-in;
	width: 100%;
	text-align: center;
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

export const NewItemFormContainer = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 300px;
`;

export const NewItemButton = styled.button`
	background-color: #32c1cd;
	border-radius: 5px;
	border: none;
	box-shadow: none;
	outline: none;
	color: #000;
	padding: 6px 12px;
	text-align: center;
	transition: background 200ms ease-out;
	&:hover {
		background-color: rgba(50, 193, 205, 0.7);
		color: #111;
	}
`;

export const NewItemInput = styled.input`
	border-radius: 5px;
	border: none;
	box-shadow: #091e4240 0px 1px 0px 0px;
	margin-bottom: 0.5rem;
	padding: 0.5rem 1rem;
	width: 100%;
`;

export const CustomDragLayerContainer = styled.div`
	height: 100%;
	left: 0;
	pointer-events: none;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100;
`;

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
	({ position: { x, y } }) => ({
		style: {
			transform: `translate(${x}px, ${y}px)`,
		},
	})
)<DragPreviewWrapperProps>``;
