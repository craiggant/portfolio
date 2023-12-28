// components
import {
	About,
	ColorThemeSwitch,
	EmploymentCard,
	Header
} from '../../components';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

// hooks
import { useSetColorTheme } from '../../hooks';

// utils
import { employmentHistory, projects } from '../../utils';

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

	const projectsToDisplay = projects.map((p) => (
		<ProjectCard
			key={p.id}
			title={p.title}
			description={p.description}
			technologies={p.technologies}
			githubUrl={p.githubUrl}
			liveUrl={p.liveUrl}
			image={p.image}
		/>
	));

	return (
		<main className="homepage-wrapper">
			<div className="homepage">
				<div className="homepage__left">
					<Header
						name="Craig Gant"
						title="Software Engineer"
						description="Crafting beautiful and accessible web experiences"
					/>
				</div>
				<div className="homepage__right">
					<ColorThemeSwitch />
					<section id="about">
						<h2 className="homepage__right-title">About</h2>
						<About />
					</section>
					<section id="experience">
						<h2 className="homepage__right-title">Experience</h2>
						<div className="homepage__right-experiences">
							{cardsToDisplay}
						</div>
					</section>
					<section id="projects">
						<h2 className="homepage__right-title">
							Sample Projects
						</h2>
						<div className="homepage__right-experiences">
							{projectsToDisplay}
						</div>
					</section>
				</div>
			</div>
		</main>
	);
};

export default Homepage;
