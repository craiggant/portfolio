// components
import { About, Card, ColorThemeSwitch, Header } from '../../components';

// hooks
import { useSetColorTheme } from '../../hooks';

// styles
import './Homepage.scss';

const Homepage = () => {
	useSetColorTheme();

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
					<About />
					<div className="homepage__right-experiences">
						<Card
							company="Mass Virtual"
							startDate="Oct 2023"
							endDate="Dec 2023"
							title="Web Engineer"
							descriptions={[
								'Built custom web applications that supported internal business needs.'
							]}
							tags={['TypeScript', 'React', 'Next', 'MongoDB']}
						/>
						<Card
							company="Charter Communications"
							startDate="Apr 2022"
							endDate="Oct 2023"
							title="Software Engineer"
							descriptions={[
								'• Build accessible, scalable and secure full-stack web applications to meet a variety of business needs using React, Typescript, Node and Fastify.',
								'• Architect and implement scalable database solutions for our applications. Integrate external applications and APIs (like Salesforce and Jira) into our apps.'
							]}
							tags={[
								'TypeScript',
								'React',
								'Node',
								'Fastify',
								'PostgreSQL'
							]}
						/>
						<Card
							company="University of Central Florida"
							startDate="Sept 2020"
							endDate="Apr 2022"
							title="Web Applications Developer"
							descriptions={[
								'• Made custom REST applications using React, Vue, Node, Express, and both SQL and NoSQL databases',
								'• Wrote unit and end-to-end tests with Jest and Cypress',
								'• Converted legacy ColdFusion applications into modern JavaScript apps'
							]}
							tags={['TypeScript', 'React', 'Next', 'MongoDB']}
						/>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Homepage;
