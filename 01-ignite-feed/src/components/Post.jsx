
import { Link } from 'phosphor-react';

import { StyledPost } from '../styles/post';
import { Comments } from './Comments';

export function Post({ author, content }) {
	return (
		<StyledPost>
			<header>
				<div className="author">
					<img src="https://github.com/reactjs.png" alt="" />

					<div className="author-info">
						<strong>ReactJs User</strong>
						<span>Web Developer</span>
					</div>
				</div>

				<time dateTime="2023-16-02 08:00:00">Published 1h ago</time>
			</header>

			<div className="content">
				<p>New post!</p>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo commodi omnis ea molestias at ex similique doloribus recusandae
				unde vel? Libero impedit odit a, aperiam veniam nostrum nesciunt magni beatae?</p>

				<p><Link size={15}/> <a href="#">link/link</a></p>
				<p><a href="#">#hashtag, #hashtag</a></p>
			</div>

			<form className="commentPost">
				<strong>Leave a comment</strong>

				<textarea />

				<footer>
					<button type='submit'>Send</button>
				</footer>
			</form>

			<div className="commentsList">
				<Comments/>
			</div>
		</StyledPost>
	)
}
