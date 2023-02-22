
import { StyledAvatar } from '../styles/avatar';

export function Avatar({ hasBorder = true, src }) {
	return (
		<StyledAvatar>
			<img
				className={'avatar ' + (hasBorder ? 'hasBorder' : '_')}
				src={src}
			/>
		</StyledAvatar>
	)
}
