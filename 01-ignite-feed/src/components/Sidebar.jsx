
import { PencilLine } from 'phosphor-react';

import { StyledSiderbar } from "../styles/sidebar";

export function Sidebar() {
	return (
		<StyledSiderbar>
			<img className="cover" src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80" alt="" />

			<div className="profile">
				<img className="avatar" src="https://avatars.githubusercontent.com/u/69631?v=4" alt="" />
				<strong>Marcio Lima</strong>
				<span>Web Developer</span>
			</div>

			<footer>
				<a href="#"><PencilLine size={20}/>Edit profile</a>
			</footer>
		</StyledSiderbar>
	)
}
