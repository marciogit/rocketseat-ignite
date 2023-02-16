
import GlobalStyle, { Wrapper } from './styles';

import { Post } from './components/Post'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export function App() {
	return (
		<>
			<GlobalStyle/>

			<Header/>

			<Wrapper>
				<Sidebar/>

				<main>
					<Post
						author="Author"
						content="Content"
					/>

					<Post
						author="New Author"
						content="New Content"
					/>

					<Post
						author="New Author"
						content="New Content"
					/>
				</main>

			</Wrapper>
		</>
	);
}
