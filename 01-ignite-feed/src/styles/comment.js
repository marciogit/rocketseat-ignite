import styled from 'styled-components';

export const StyledComment = styled.div `
	display: flex;
	gap: 1rem;
	margin: 1.5rem;

	img {
		width: 3rem;
		height: 3rem;
		border-radius: 8px;
	}

	.commentBox {
		flex: 1;

		.content {
			padding: 1rem;
			border-radius: 8px;
			background-color: #29292E;

			header {
				display: flex;
				align-items: flex-start;
				justify-content: space-between;

				.authorTime {
					display: flex;
					flex-direction: column;
				}

				strong {
					display: block;
					font-size: 0.875rem;
					line-height: 1.6;
				}

				time {
					display: block;
					font-size: 0.75rem;
					line-height: 1.6;
				}

				button {
					background: transparent;
					border: 0;
					line-height: 0;
					border-radius: 2px;
					cursor: pointer;
					transition: color .2s;

					&:hover {
						color: #EB5757;
					}
				}
			}

			p {
				margin-top: 1rem;
			}
		}

		footer {
			button {
				display: flex;
				align-items: center;
				margin-top: 1.5rem;
				background: transparent;
				border: 0;
				font-size: 12px;
				color: #8D8D99;
				cursor: pointer;
				transition: color .2s;

				&:hover {
					color: #00B37E;
				}

				svg {
					margin-right: 0.5rem;
				}

				span {
					&:before {
						content: "•";
						padding: 0 0.25rem;
					}
				}
			}
		}
	}

`
