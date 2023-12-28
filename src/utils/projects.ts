// components
import MovieApp from '../assets/images/movie-app.gif';

// types
import { TProject } from '../types';

const projects: TProject[] = [
	{
		description:
			'This application fetches movie data from an external API and presents it to users. When a user clicks on a movie card, a second call to the API to retrieve additional information about the movie. This information is then presented to the user in a modal.\n \nThis application also:\n- is built without without a component library \n- is mobile responsive \n- is deployed with Vercel \n- uses Framer Motion to enable the modal animations and swipe action',
		githubUrl: 'https://github.com/craiggant/Movie-Search',
		liveUrl: 'https://gant.tech',
		id: '1',
		image: MovieApp,
		technologies: ['TypeScript', 'React', 'Next', 'Framer Motion'],
		title: 'Movie Search'
	},
	{
		description:
			"This application was built to showcase my experience and capabilities. I thought it would be fun to build out a portfolio with a semi-neumorphic design and that has a toggle for dark/light mode. I had a really fun time figuring out a custom theming approach that uses custom css variables along with React's context API.",
		githubUrl: 'https://github.com/craiggant/portfolio',
		id: '2',
		image: MovieApp,
		technologies: ['TypeScript', 'React', 'Framer Motion'],
		title: 'Portfolio'
	}
];

export default projects;
