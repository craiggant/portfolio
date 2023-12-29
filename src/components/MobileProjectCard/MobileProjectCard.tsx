import React from 'react';

// components
import { LinkOut } from '../../components';

// types
import { TProject } from '../../types';

// styles
import './MobileProjectCard.scss';

type TProjectCardProps = Omit<TProject, 'id'>;

const MobileProjectCard = ({
	description,
	githubUrl,
	liveUrl,
	title,
	technologies,
	image
}: TProjectCardProps) => {
	const tagsToRender = technologies.map((tech) => (
		<span className="mobile-project-card__technologies-tag" key={tech}>
			{tech}
		</span>
	));

	return (
		<div className="mobile-project-card">
			<div className="mobile-project-card__title">{title}</div>
			<div className="mobile-project-card__visual">
				<img
					className="mobile-project-card__visual-image"
					src={image}
					alt={title}
				/>
				<div className="mobile-project-card__visual-links">
					{githubUrl && <LinkOut url={githubUrl} text="Code" />}
					{liveUrl && <LinkOut url={liveUrl} text="Deployed site" />}
				</div>
			</div>
			<div className="mobile-project-card__description">
				{description}
			</div>
			<div className="mobile-project-card__technologies">
				{tagsToRender}
			</div>
		</div>
	);
};

export default MobileProjectCard;
