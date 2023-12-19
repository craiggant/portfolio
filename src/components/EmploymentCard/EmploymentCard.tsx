import { TEmploymentHistory } from '../../types';

// styles
import './EmploymentCard.scss';

type TEmploymentCardProps = Omit<TEmploymentHistory, 'id'>;

/** Card that displays info, desc, and tags and raises on hover */

const EmploymentCard = ({
	company,
	companyLogo,
	companyUrl,
	taskDescriptions,
	endDate,
	startDate,
	technologies,
	title
}: TEmploymentCardProps) => {
	const descriptionsToRender = taskDescriptions.length
		? taskDescriptions.map((desc) => <p key={desc}>{desc}</p>)
		: null;

	const tagsToRender = technologies.length
		? technologies.map((tag) => (
				<span className="card__right-tags-wrapper" key={tag}>
					{tag}
				</span>
		  ))
		: null;

	return (
		<div className="card">
			<div className="card__left">
				<span>{company}</span>
				<div>
					{startDate} - {endDate}
				</div>
			</div>
			<div className="card__right">
				<div className="card__right-title">{title}</div>
				<div className="card__right-description">
					{descriptionsToRender}
				</div>
				<div className="card__right-tags">{tagsToRender}</div>
			</div>
		</div>
	);
};

export default EmploymentCard;
