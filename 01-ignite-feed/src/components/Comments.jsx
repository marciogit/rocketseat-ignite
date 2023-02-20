
import { StyledComment } from "../styles/comment";

import { ThumbsUp, Trash } from "phosphor-react";

export function Comments() {
	return (
		<StyledComment>
			<img src="https://github.com/reactjs.png" alt="" />

			<div className="commentBox">
				<div className="content">
					<header>
						<div className="authorTime">
							<strong>Person</strong>
							<time dateTime="2023-16-02 08:00:00">Published 1h ago</time>
						</div>

						<button title="delete">
							<Trash size={20}/>
						</button>
					</header>

					<p>Content</p>
				</div>

				<footer>
					<button>
						<ThumbsUp size={24}/>Aplause <span>20</span>
					</button>
				</footer>
			</div>
		</StyledComment>
	)
}
