import React, { useMemo } from 'react';

// components
import {
	About,
	EmploymentCard,
	MobileEmploymentCard,
	MobileHeader,
	MobileProjectCard,
	ProjectCard
} from '../../components';

// hooks
import { useSetColorTheme, useSize } from '../../hooks';

// utils
import { employmentHistory, projects } from '../../utils';

// styles
import './MobileHomepage.scss';

const MobileHomepage = () => {
	useSetColorTheme();
	const { isMediumScreen } = useSize();

	const cardsToDisplay = useMemo(() => {
		if (isMediumScreen) {
			return employmentHistory.map((e) => (
				<EmploymentCard
					key={e.id}
					company={e.company}
					companyUrl={e.companyUrl}
					startDate={e.startDate}
					notableAchievement={e.notableAchievement}
					endDate={e.endDate}
					title={e.title}
					taskDescriptions={e.taskDescriptions}
					technologies={e.technologies}
				/>
			));
		}

		return employmentHistory.map((e) => (
			<MobileEmploymentCard
				key={e.id}
				company={e.company}
				companyUrl={e.companyUrl}
				startDate={e.startDate}
				notableAchievement={e.notableAchievement}
				endDate={e.endDate}
				title={e.title}
				taskDescriptions={e.taskDescriptions}
				technologies={e.technologies}
			/>
		));
	}, [isMediumScreen]);

	const projectsToDisplay = useMemo(() => {
		if (isMediumScreen) {
			return projects.map((p) => (
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
		}

		return projects.map((p) => (
			<MobileProjectCard
				key={p.id}
				title={p.title}
				description={p.description}
				technologies={p.technologies}
				githubUrl={p.githubUrl}
				liveUrl={p.liveUrl}
				image={p.image}
			/>
		));
	}, [isMediumScreen]);

	return (
		<main className="mobile-homepage">
			<MobileHeader
				name="Craig Gant"
				title="Software Engineer"
				description="Crafting beautiful and accessible web experiences"
			/>
			<div className="mobile-homepage__body">
				<section id="about">
					<h2 className="mobile-homepage__section-title">About</h2>
					<About />
				</section>
				<section id="experience">
					<h2 className="mobile-homepage__section-title">
						Experience
					</h2>
					<div className="mobile-homepage__section">
						{cardsToDisplay}
					</div>
				</section>
				<section id="projects">
					<h2 className="mobile-homepage__section-title">
						Sample Projects
					</h2>
					<div className="mobile-homepage__section">
						{projectsToDisplay}
					</div>
				</section>
			</div>
		</main>
	);
};

export default MobileHomepage;
