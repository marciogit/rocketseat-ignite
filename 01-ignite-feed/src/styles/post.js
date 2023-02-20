
import styled from 'styled-components';

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

	.commentPost {
		width: 100%;
		margin: 1.5rem 0 0 0;
		padding: 1.5rem 0 0 0;
		border-top: 1px solid #C4C4CC;

		strong  {
			line-height: 1.6;
			color: #C4C4CC;
		}

		textarea {
			width: 100%;
			height: 6rem;
			margin: 1rem 0 0 0;
			padding: 1rem;
			line-height: 1.4;
			background-color: #121214;
			border: 0;
			border-radius: 8px;
			color: #C4C4CC;
			resize: none;
		}

		button[type="submit"] {
			margin: 1rem 0 0 0;
			padding: 1rem 1.5rem;
			border: 0;
			border-radius: 8px;
			background-color: #00B37E;
			font-weight: 700;
			color: #C4C4CC;
			transition: background-color .2s;


			&:hover {
				background-color: #6FCF97;
				color: #121214;
			}
		}

		footer {
			visibility: hidden;
			max-height: 0;
		}

		&:focus-within footer {
			visibility: visible;
			max-height: none;
		}
	}
`
