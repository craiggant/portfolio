// components
import {
	About,
	ColorThemeSwitch,
	EmploymentCard,
	Header
} from '../../components';

// hooks
import { useSetColorTheme } from '../../hooks';

// utils
import { employmentHistory } from '../../utils';

// styles
import './Homepage.scss';

const Homepage = () => {
	useSetColorTheme();

	const cardsToDisplay = employmentHistory.map((e) => (
		<EmploymentCard
			key={e.id}
			company={e.company}
			companyLogo={e.companyLogo}
			companyUrl={e.companyUrl}
			startDate={e.startDate}
			endDate={e.endDate}
			title={e.title}
			taskDescriptions={e.taskDescriptions}
			technologies={e.technologies}
		/>
	));

	return (
		<main className="homepage-wrapper">
			<div className="homepage">
				<Header
					name="Craig Gant"
					title="Software Engineer"
					description="Building beautiful and accessible web experiences"
				/>

				<div className="homepage__right">
					<ColorThemeSwitch />
					<div id="about">
						<About />
					</div>
					<div
						className="homepage__right-experiences"
						id="experience"
					>
						{cardsToDisplay}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Homepage;
