// styles
import './Card.scss';

type TCardProps = {
	// company name
	company: string;
	// description/explanation of the title
	descriptions: string[];
	// end date
	endDate: string;
	// start date
	startDate: string;
	// tags
	tags: string[];
	// main text for the card
	title: string;
};

/** Card that displays info, desc, and tags and raises on hover */

const Card = ({
	company,
	descriptions,
	endDate,
	startDate,
	tags,
	title
}: TCardProps) => {
	const descriptionsToRender = descriptions.length
		? descriptions.map((desc) => <p key={desc}>{desc}</p>)
		: null;

	const tagsToRender = tags.length
		? tags.map((tag) => (
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

export default Card;
