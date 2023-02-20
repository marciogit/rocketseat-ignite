
import styled from 'styled-components';

// SIDEBAR
export const StyledSiderbar = styled('aside') `
	background-color: #202024;
	border-radius: 8px;
	overflow: hidden;

	.cover {
		width: 100%;
		height: 80px;
		object-fit: cover;
		overflow: hidden;
	}

	.profile {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: calc(1.5rem - 6px);

		.avatar {
			box-sizing: initial;
			width: calc(4rem + 8px);
			border: 4px solid #202024;
			outline: 4px solid #00B37E;
			border-radius: 8px;
		}

		strong {
			margin-top: 1rem;
		}
	}


	footer {
		margin-top: 1.5rem;
		padding: 1.5rem 2rem 2rem;
		border-top: 1px solid #323238;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 50px;
			border: 2px solid #00B37E;
			border-radius: 8px;
			color: #00B37E;
			text-decoration: none;
			transition: .2s;
			gap: 0.5rem;

			&:hover {
				background-color: #00B37E;
				color: #E1E1E6;
			}
		}
	}
`
