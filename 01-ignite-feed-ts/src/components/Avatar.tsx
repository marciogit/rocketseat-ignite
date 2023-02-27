
import { ImgHTMLAttributes } from 'react';
import { StyledAvatar } from '../styles/avatar';

interface avatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	hasBorder?: boolean,
}

export function Avatar({ hasBorder = true, ...props }: avatarProps) {
	return (
		<StyledAvatar>
			<img
				className={'avatar ' + (hasBorder ? 'hasBorder' : '_')}
				{...props}
			/>
		</StyledAvatar>
	)
}
