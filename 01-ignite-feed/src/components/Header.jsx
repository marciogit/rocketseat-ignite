
import { StyledHeader } from '../styles';
import feedLogo from '../images/feed-logo.svg';

export function Header() {
	return (
		<StyledHeader>
			<img src={feedLogo} alt="" />
			<strong>Ignite Feed</strong>
		</StyledHeader>
	)
}
