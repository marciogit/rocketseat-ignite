
import { StyledTask } from '../styles/task';

interface taskProps {
	id: number,
	content: string
}

export function Task({ content }: taskProps) {
	return (
		<StyledTask>
			<div className="toggleCompleted active"></div>
			<p>{content}</p>
			<div className="deleteTask"></div>
		</StyledTask>
	)
}