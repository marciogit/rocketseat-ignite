import styled from "styled-components";

import check_icon from '../assets/check.svg';
import bin_icon from '../assets/bin.svg';

export const StyledTask = styled.div `
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	min-height: 5rem;
	margin-bottom: 0.8rem;
	padding: 0 20px;
	border: 1px solid var(--gray700);
	border-radius: 8px;
	background-color: var(--gray500);
	color: var(--gray200);
	box-sizing: border-box;

	&:last-child {
		margin-bottom: 0;
	}

	.toggleCompleted {
		width: 18px;
		height: 18px;
		border: 2px solid var(--blue);
		border-radius: 100%;
		transition: background-color .2s;

		&:hover {
			background-color: var(--purple);
			background-image: url(${check_icon});
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border: 2px solid var(--purple);
		}
	}

	p {
		width: calc(100% - 70px);
		padding: 1.5rem 0;
		line-height: 1.4rem;
	}

	.deleteTask {
		width: 24px;
		height: 24px;
		background-image: url(${bin_icon});
		background-position: center;
		background-repeat: no-repeat;
		border: 1px solid transparent;
		border-radius: 5px;
		transition: border .2s;

		&:hover {
			border: 1px solid rgba(255,255,255,0.1);
		}
	}
`