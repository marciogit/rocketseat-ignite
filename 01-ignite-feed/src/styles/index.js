
import styled, { createGlobalStyle } from 'styled-components';

// GLOBAL CSS
export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border;
		user-select: none;
	}

	body {
		position: relative;
		color: #fff;
		-webkit-font-smoothing: antialiased;
		background-color: #10161F;
	}

	body, input, textarea, button {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1rem;
	}
`

export const Wrapper = styled.div `
	display: grid;
	grid-template-columns: 256px 1fr;
	max-width: 70rem;
	margin: 2rem auto;
	padding: 0 1rem;
	gap: 2rem;
	align-items: flex-start;
`

// HEADER
export const StyledHeader = styled('header') `
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100px;
	background-color: #202024;

	strong {
		font-size: 1.625rem;
		font-weight: 700;
		color: #E1E1E6;
	}

	img {
		height: 3rem;
		margin-right: 10px;
	}
`

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

		span {}
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

// POST
export const StyledPost = styled('article') `
	background-color: #202024;
	border-radius: 8px;
	padding: 2.5rem;
	margin-top: 2rem;

	&:first-child {
		margin-top: 0rem;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.author {
			display: flex;
			align-items: center;

			img {
				width: 100px;
			}

			.author-info {
				display: flex;
				flex-direction: column;
			}
		}
	}

	.content {
		line-height: 1.6;
		color: #C4C4CC;

		p {
			margin-top: 1rem;
		}

		a {
			font-weight: 700;
			text-decoration: none;
			color: #00B37E;

			&:hover {
				color: #6FCF97;
			}
		}
	}
`
