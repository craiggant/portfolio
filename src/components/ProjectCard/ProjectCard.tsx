import React from 'react';

// components
import { LinkOut } from '../../components';

// types
import { TProject } from '../../types';

// styles
import './ProjectCard.scss';

type TProjectCardProps = Omit<TProject, 'id'>;

const ProjectCard = ({
	description,
	githubUrl,
	liveUrl,
	title,
	technologies,
	image
}: TProjectCardProps) => {
	const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

	const tagsToRender = technologies.map((tech) => (
		<span
			className="project-card__info-technologies-tag"
			key={tech}
			style={{ borderRadius: isFirefox ? '' : '2rem' }}
		>
			{tech}
		</span>
	));

	return (
		<div className="project-card">
			<div className="project-card__left">
				<img
					className="project-card__left-image"
					src={image}
					alt={title}
				/>
				<div className="project-card__left-links">
					{githubUrl && <LinkOut url={githubUrl} text="Code" />}
					{liveUrl && <LinkOut url={liveUrl} text="Deployed site" />}
				</div>
			</div>
			<div className="project-card__info">
				<div className="project-card__info-title">{title}</div>
				<div className="project-card__info-description">
					{description}
				</div>
				<div className="project-card__info-technologies">
					{tagsToRender}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
