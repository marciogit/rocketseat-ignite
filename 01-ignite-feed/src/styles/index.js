
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

	:focus {
		outline: transparent;
		box-shadow: 0 0 0 2px #00B37E;
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
