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
	}
];

export default projects;
