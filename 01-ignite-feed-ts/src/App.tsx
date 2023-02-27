
import GlobalStyle, { Wrapper } from './styles';

import { Post, PostType } from './components/Post'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export function App() {

	const posts: PostType[] = [
		{
			id: 1,
			author: {
				name: 'Marcio Lima',
				role: 'Web Dev',
				avatarUrl: 'http://github.com/marciogit.png'
			},
			content: [
				{ type: 'p', content: 'Hello everyone!'},
				{ type: 'p', content: 'This is a fake comment!'},
				{ type: 'a', content: 'hello.com/marcio'}
			],
			publishedAt: new Date('2023-02-22 13:04:32')
		},
		{
			id: 2,
			author: {
				name: 'Valentina',
				role: 'Student',
				avatarUrl: 'http://github.com/valentina.png'
			},
			content: [
				{ type: 'p', content: 'Hello everyone!'},
				{ type: 'p', content: 'This is a my frist comment!'},
				{ type: 'a', content: 'hello.com/valentina'}
			],
			publishedAt: new Date('2023-02-22 13:23:12')
		}
	]

	return (
		<>
			<GlobalStyle/>

			<Header/>

			<Wrapper>
				<Sidebar/>

				<main>
					{posts.map((post, i)=>(
						<Post
							post={post}
						/>
					))}
				</main>

			</Wrapper>
		</>
	);
}
