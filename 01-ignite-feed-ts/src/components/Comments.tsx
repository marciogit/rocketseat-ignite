
import { Avatar } from "./Avatar";
import { StyledComment } from "../styles/comment";
import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";

interface commentsProps {
	content: string,
	onDeleteComment: (comment: string)=> void
}

export function Comments({ content, onDeleteComment }: commentsProps) {

	const [ likesCount, setLikesCount ] = useState(0);

	function handleLikeComment() {
		setLikesCount((like)=>  like + 1);
	}

	function handleDeleteComment() {
		onDeleteComment(content)
	}

	return (
		<StyledComment>
			<Avatar hasBorder={false} src="https://github.com/reactjs.png" alt=""/>

			<div className="commentBox">
				<div className="content">
					<header>
						<div className="authorTime">
							<strong>Person</strong>
							<time dateTime="2023-16-02 08:00:00">Published 1h ago</time>
						</div>

						<button title="delete" onClick={handleDeleteComment}>
							<Trash size={20}/>
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp size={24}/>Like <span>{likesCount}</span>
					</button>
				</footer>
			</div>
		</StyledComment>
	)
}
