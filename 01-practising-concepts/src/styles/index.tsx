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
		background-color: var(--gray600);
	}

	body, input, textarea, button, header {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1rem;
		box-sizing: border-box;
	}
`

export const Wrapper = styled.main `
	width: 46rem;
	margin: -37px auto 0;
	padding: 10px 0;
	box-sizing: border-box;

	form {
		display: flex;
	}

	input[type="text"]{
		width: 39.875rem;
		height: 3.375rem;
		padding: 10px;
		font-size: 1.125rem;
		color: var(--gray300);
		background-color: var(--gray500);
		border: 1px solid var(--gray700);
		border-radius: 8px;
		outline: none;
	}

	button[type="submit"] {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 5.625rem;
		height: 3.25rem;
		margin-left: 0.5rem;
		border: 0;
		border-radius: 8px;
		color: var(--gray100);
		background-color: var(--blueDark);
		
		img { 
			margin-left: 5px;
		}
	}

	.summary {
		display: flex;
		justify-content: space-between;
		margin-top: 4rem;
		margin-bottom: 1.5rem;

		.tasks-created {
			font-weight: bold;
			color: var(--blue);
		}

		.completed {
			font-weight: 700;
			color: var(--purple);
		}

		.tasks-created, .completed {
			span {
				margin-left: 5px;
				padding: 1px 5px;
				border-radius: 4px;
				font-size: 0.75rem;
				background-color: var(--gray400);
				color: var(--gray200);
			}
		}
	}

	.no-tasks {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column;
		width: 100%;
		min-height: 15.25rem;
		border-top: 1px solid var(--gray400);

		img {
			margin: 4rem 0 1rem 0;
		}
		
		p {
			line-height: 1.5rem;
			color: var(--gray300);
		}
	}
`