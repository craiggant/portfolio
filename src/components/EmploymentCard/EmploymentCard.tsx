import React, { useMemo } from 'react';

import { TEmploymentHistory } from '../../types';

// styles
import './EmploymentCard.scss';

type TEmploymentCardProps = Omit<TEmploymentHistory, 'id'>;

/** Card that displays info, desc, and tags and raises on hover */

const EmploymentCard = ({
	company,
	companyUrl,
	taskDescriptions,
	endDate,
	notableAchievement,
	startDate,
	technologies,
	title
}: TEmploymentCardProps) => {
	const descriptionsToRender = taskDescriptions.length
		? taskDescriptions.map((desc) => <p key={desc}>{desc}</p>)
		: null;

	const tagsToRender = useMemo(() => {
		if (!technologies.length) return null;
		return technologies.map((tag) => (
			<span className="employment-card__right-tags-wrapper" key={tag}>
				{tag}
			</span>
		));
	}, [technologies]);

	const notableAchievementToRender = useMemo(() => {
		if (!notableAchievement) return null;

		return (
			<div className="employment-card__right-notable-achievement">
				<p className="employment-card__right-notable-achievement-title">
					Notable Achievement
				</p>
				{notableAchievement}
			</div>
		);
	}, [notableAchievement]);

	return (
		<div className="employment-card">
			<div className="employment-card__left">
				<a
					href={companyUrl}
					className="employment-card__link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>{company}</span>
				</a>
				<div>
					{startDate} - {endDate}
				</div>
			</div>
			<div className="employment-card__right">
				<div className="employment-card__right-title">{title}</div>
				<div className="employment-card__right-description">
					{descriptionsToRender}
				</div>
				{notableAchievementToRender}
				<div className="employment-card__right-tags">
					{tagsToRender}
				</div>
			</div>
		</div>
	);
};

export default EmploymentCard;
