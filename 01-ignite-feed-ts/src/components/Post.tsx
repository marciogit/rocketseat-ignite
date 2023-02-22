
import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from "./Avatar";
import { Link } from 'phosphor-react';
import { StyledPost } from '../styles/post';
import { Comments } from './Comments';

export function Post({ author, content, publishedAt }) {

	const publishedAtFormatted = format(publishedAt, "yyyy-MM-d 'at' k:mm'h'");
	const publishedFromNow = formatDistanceToNow(publishedAt, { addSuffix: true });

	const [comments, setComments] = useState(['First comment!']);
	const [newComment, setNewComment] = useState('');

	function handleAddComment(e) {
		e.preventDefault();
		setComments([...comments, newComment]);
		setNewComment('');
	}

	function handleNewComment(e) {
		setNewComment(e.target.value);
		e.target.setCustomValidity('');
	}

	function handleInvalidComment(e) {
		e.target.setCustomValidity('This field is mandatory');
	}

	function deleteComment(commentToDelete) {
		const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
		setComments(commentsWithoutDeletedOne);
	}

	const isNewCommentEmpty = newComment.length === 0;

	return (
		<StyledPost>
			<header>
				<div className="author">
					<Avatar src={author.avatarUrl} alt=""/>

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
					onInvalid={handleInvalidComment}
					required
				/>

				<footer>
					<button type='submit' disabled={isNewCommentEmpty}>Send</button>
				</footer>
			</form>

			<div className="commentsList">
				{comments.map((comment, i)=> (
					<Comments
						content={comment}
						onDeleteComment={deleteComment}
					/>
				))}
			</div>
		</StyledPost>
	)
}
