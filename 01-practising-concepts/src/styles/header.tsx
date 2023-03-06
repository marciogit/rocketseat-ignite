
import styled from 'styled-components';

import rocket_icon from '../assets/rocket.svg';

export const StyledHeader = styled.header `
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 170px;
	background-color: var(--gray700);
	font-size: 40px;
	font-weight: 900;
	color: var(--purpleDark);

	span {
		position: relative;
		color: var(--blue);

		&:before {
			content: "";
			position: absolute;
			top: 8px;
			left: -30px;
			width: 22px;
			height: 36px;
			background-image: url(${rocket_icon});
		}
	}
`