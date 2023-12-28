// components
import { LinkOutIcon } from '..';

// styles
import './LinkOut.scss';

type TLinkOutProps = {
	url: string;
	text: string;
};

const LinkOut = ({ url, text }: TLinkOutProps) => (
	<a
		className="link-out"
		href={url}
		target="_blank"
		rel="noopener noreferrer"
	>
		<span>{text}</span>
		<LinkOutIcon />
	</a>
);

export default LinkOut;
