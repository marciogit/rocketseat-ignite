
import styled from 'styled-components';

export const StyledAvatar = styled.div `
	.avatar {
		box-sizing: border-box;
		width: 3rem;
		height: 3rem;
		border-radius: 8px;
		border: none;

		&.hasBorder {
			width: calc(3rem + 8px);
			height: calc(3rem + 8px);
			border: 4px solid #202024;
			outline: 2px solid #00B37E;
			border-radius: 8px;
		}
	}
`
