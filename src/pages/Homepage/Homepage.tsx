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
			notableAchievement={e.notableAchievement}
			endDate={e.endDate}
			title={e.title}
			taskDescriptions={e.taskDescriptions}
			technologies={e.technologies}
		/>
	));

	return (
		<main className="homepage-wrapper">
			<div className="homepage">
				<div className="homepage__left">
					<Header
						name="Craig Gant"
						title="Software Engineer"
						description="Building beautiful and accessible web experiences"
					/>
				</div>
				<div className="homepage__right">
					<ColorThemeSwitch />
					<div id="about">
						<h2 className="homepage__right-title">About</h2>
						<About />
					</div>
					<div id="experience">
						<h2 className="homepage__right-title">Experience</h2>
						<div className="homepage__right-experiences">
							{cardsToDisplay}
						</div>
					</div>
					<div id="projects">
						<h2 className="homepage__right-title">Projects</h2>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Homepage;
