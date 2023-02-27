
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from "./Avatar";
import { Link } from 'phosphor-react';
import { StyledPost } from '../styles/post';
import { Comments } from './Comments';

interface Author  {
	name: string,
	role: string,
	avatarUrl: string
}

interface Content {
	type: 'p' | 'a',
	content: string
}

export interface PostType {
	id: number,
	author: Author,
	publishedAt: Date,
	content: Content[]
}

interface postProps {
	post: PostType
}

export function Post({ post }: postProps) {

	const publishedAtFormatted = format(post.publishedAt, "yyyy-MM-d 'at' k:mm'h'");
	const publishedFromNow = formatDistanceToNow(post.publishedAt, { addSuffix: true });

	const [comments, setComments] = useState(['First comment!']);
	const [newComment, setNewComment] = useState('');

	function handleAddComment(e: FormEvent) {
		e.preventDefault();
		setComments([...comments, newComment]);
		setNewComment('');
	}

	function handleNewComment(e: ChangeEvent<HTMLTextAreaElement>) {
		setNewComment(e.target.value);
		e.target.setCustomValidity('');
	}

	function handleInvalidComment(e: InvalidEvent<HTMLTextAreaElement>) {
		e.target.setCustomValidity('This field is mandatory');
	}

	function deleteComment(commentToDelete: string) {
		const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
		setComments(commentsWithoutDeletedOne);
	}

	const isNewCommentEmpty = newComment.length === 0;

	return (
		<StyledPost>
			<header>
				<div className="author">
					<Avatar src={post.author.avatarUrl} alt=""/>

					<div className="author-info">
						<strong>{post.author.name}</strong>
						<span>{post.author.role}</span>
					</div>
				</div>

				<time title={publishedAtFormatted} dateTime={post.publishedAt.toISOString()}>{publishedFromNow}</time>
			</header>

			<div className="content">
				{post.content.map((line, i)=> {
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
