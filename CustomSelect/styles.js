import styled from '@cogoport/front/styled';

export const Container = styled.div`
	position: relative;
	box-sizing: border-box;

	.core-ui-input-root {
		width: 2px;
		background: 0px center;
		border: 0px;
		opacity: 1;
		outline: 0px;
		padding: 0px;
		color: inherit;
		padding-bottom: 2px;
		padding-top: 2px;
		visibility: visible;
		color: rgb(51, 51, 51);
		box-sizing: border-box;
		:focus-within {
			box-shadow: none;
			border: none;
		}
	}

	.core-ui-input-control {
		width: 2px;
		background: 0px center;
		border: 0px;
		font-size: inherit;
		opacity: 1;
		outline: 0px;
		padding: 0px;
	}
`;

export const SubContainer = styled.div`
	align-items: flex-start;
	background-color: white;
	border: 1px solid #000000;
	border-radius: 4px;
	cursor: default;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	position: relative;
	transition: all 100ms ease 0s;
	box-sizing: border-box;
	outline: 0px !important;
	overflow: hidden;
	cursor: pointer;

	&:focus {
		border: 1px solid black;
		box-shadow: none;
	}
	&:focus-within {
		border: 1px solid black;
		box-shadow: none;
	}
	&:hover {
		border: 1px solid black;
		box-shadow: none;
	}

	&.placeholder {
		align-items: center;
	}

	&.multiple {
		height: auto;
	}

	&.disable {
		opacity: 0.4;

		&:hover {
			border: 1px solid #d3d3d3;
		}
	}
`;

export const ChipContainer = styled.div`
	align-items: center;
	display: flex;
	flex: 1 0%;

	padding: 2px 8px;
	position: relative;
	overflow: hidden;
	box-sizing: border-box;
	&.multiple {
		flex-wrap: wrap;
	}

	.core-ui-button-root {
		height: 24px;
		width: 24px;
	}

	.clear-btn {
		height: 24px;
		width: 24px;
	}
`;

export const Chip = styled.div`
	background: #9befa8;
	border-radius: 4px;
	display: flex;
	margin: 2px;
	min-width: 0px;
	box-sizing: border-box;
	padding: 2px 6px;
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 12px;

	display: flex;
	align-items: center;
	color: black;
`;

export const UtilDiv = styled.div`
	align-items: center;
	align-self: stretch;
	display: flex;
	flex-shrink: 0;
	box-sizing: border-box;
	height: inherit;
	padding: 0px 8px 0px 0px !important;

	&.showpopover {
		transform: rotate(-180deg);
		padding: 0px 0px 0px 8px !important;
	}
`;

export const Placeholder = styled.div`
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 16px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;

	color: rgba(12, 8, 8, 0.5);
`;

export const Value = styled.p`
	margin: 0px;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	color: #000000;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;
