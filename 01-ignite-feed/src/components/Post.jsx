
import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from "./Avatar";
import { Link } from 'phosphor-react';
import { StyledPost } from '../styles/post';
import { Comments } from './Comments';

export function Post({ author, content, publishedAt }) {

	const publishedAtFormatted = format(publishedAt, "yyyy-MM-d 'at' k:mm'h'");
	const publishedFromNow = formatDistanceToNow(publishedAt, {
		addSuffix: true
	});

	const [comments, setComments] = useState(['First comment!']);
	const [newComment, setNewComment] = useState('');

	function handleAddComment(e) {
		e.preventDefault();
		// const newComment = e.target.comment.value;

		setComments([...comments, newComment]);
		setNewComment('');

		// e.target.comment.value = ''
	}

	function handleNewComment(e) {
		setNewComment(e.target.value);
	}

	return (
		<StyledPost>
			<header>
				<div className="author">
					<Avatar src={author.avatarUrl} alt="" />

					<div className="author-info">
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>{publishedFromNow}</time>
			</header>

			<div className="content">
				{content.map((line, i)=> {
					if(line.type === 'p') {
						return <p>{line.content}</p>
					} else if(line.type === 'a') {
						return <p><a href="#">{line.content}</a></p>
					}
				})}
			</div>

			<form className="commentPost" onSubmit={handleAddComment}>
				<strong>Leave a comment</strong>

				<textarea
					name="comment"
					placeholder='please add a comment'
					value={newComment}
					onChange={handleNewComment}
				/>

				<footer>
					<button type='submit'>Send</button>
				</footer>
			</form>

			<div className="commentsList">
				{comments.map((comment, i)=> (
					<Comments content={comment}/>
				))}
			</div>
		</StyledPost>
	)
}
