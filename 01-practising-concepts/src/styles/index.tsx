import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root {
        --gray100:    #F2F2F2;
        --gray200:    #D9D9D9;
        --gray300:    #808080;
        --gray400:    #333333;
        --gray500:    #262626;
        --gray600:    #1A1A1A;
        --gray700:    #0D0D0D;

        --purple:     #8284FA;
        --purpleDark: #5E60CE;
        --blue:       #4EA8DE;
        --blueDark:   #1E6F9F;
        --danger:     #E25858;
    }

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
		box-sizing: border-box;
	}
`