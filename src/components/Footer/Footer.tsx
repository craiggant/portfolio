import React from 'react';

// components
import { GithubIcon, LinkedInIcon } from '..';

// styles
import './Footer.scss';

const Footer = () => {
	const links = [
		{
			icon: <GithubIcon className="footer__icon" />,
			link: 'https://github.com/craiggant',
			name: 'Github'
		},
		{
			icon: <LinkedInIcon className="footer__icon" />,
			link: 'https://www.linkedin.com/in/craiggant',
			name: 'LinkedIn'
		}
	];

	const buttonsToDisplay = links.map(({ icon, link, name }) => (
		<a
			key={name}
			className="footer__btns"
			href={link}
			target="_blank"
			type="button"
		>
			{icon}
		</a>
	));

	return <div className="footer">{buttonsToDisplay}</div>;
};

export default Footer;
