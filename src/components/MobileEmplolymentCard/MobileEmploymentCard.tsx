import React, { useMemo } from 'react';

import { TEmploymentHistory } from '../../types';

// styles
import './MobileEmploymentCard.scss';

type TEmploymentCardProps = Omit<TEmploymentHistory, 'id'>;

/** Card that displays info, desc, and tags and raises on hover */

const MobileEmploymentCard = ({
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
			<span
				className="mobile-employment-card__bottom-tags-wrapper"
				key={tag}
			>
				{tag}
			</span>
		));
	}, [technologies]);

	const notableAchievementToRender = useMemo(() => {
		if (!notableAchievement) return null;

		return (
			<div className="mobile-employment-card__bottom-notable-achievement">
				<p className="mobile-employment-card__bottom-notable-achievement-title">
					Notable Achievement
				</p>
				{notableAchievement}
			</div>
		);
	}, [notableAchievement]);

	return (
		<div className="mobile-employment-card">
			<div className="mobile-employment-card__top">
				<div className="mobile-employment-card__top-title">{title}</div>
				<a
					href={companyUrl}
					className="mobile-employment-card__link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>{company}</span>
				</a>
				<div>
					{startDate} - {endDate}
				</div>
			</div>
			<div className="mobile-employment-card__bottom">
				<div className="mobile-employment-card__bottom-description">
					{descriptionsToRender}
				</div>
				{notableAchievementToRender}
				<div className="mobile-employment-card__bottom-tags">
					{tagsToRender}
				</div>
			</div>
		</div>
	);
};

export default MobileEmploymentCard;
