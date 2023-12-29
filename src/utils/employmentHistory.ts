import { TEmploymentHistory } from '../types';

const employmentHistory: TEmploymentHistory[] = [
	{
		company: 'Mass Virtual',
		companyUrl: 'https://massvirtual.com/',
		endDate: 'Dec 2023',
		id: '10',
		startDate: 'Oct 2023',
		taskDescriptions: [
			'- Built custom web applications that supported internal business needs.'
		],
		technologies: ['TypeScript', 'React', 'Next', 'MongoDB'],
		title: 'Web Engineer'
	},
	{
		company: 'Charter Communications',
		companyUrl: 'https://corporate.charter.com/',
		endDate: 'Oct 2023',
		notableAchievement: `- Single-handedly coded an application that takes in data from a Salesforce opportunity, transforms that data based on business logic and automatically creates multiple Jira tickets. \n - This application has saved tens of thousands of dollars for Charter, as it reduced the time sales personnel need to create these tickets from over 20 minutes to just a few seconds. Additionally, before the app, one full time employee was dedicated to the creation of these tickets. After the app, however, they were fully freed up to use their skills in other ways for the company.`,
		id: '20',
		startDate: 'Apr 2022',
		taskDescriptions: [
			'- Built accessible, scalable and secure full-stack web applications to meet a variety of business needs using React, Typescript, Node and Fastify.',
			'- Architected and implemented scalable database solutions for our applications. Integrated external applications and APIs (like Salesforce and Jira) into our apps.'
		],
		technologies: ['TypeScript', 'React', 'Node', 'Fastify', 'PostgreSQL'],
		title: 'Software Engineer'
	},
	{
		company: 'University of Central Florida',
		companyUrl: 'https://www.ucf.edu/',
		endDate: 'Apr 2022',
		notableAchievement: `- Coded an application using Next.js, Express and Socket.io that combed through the academic records of all current graduate students at the university and provided administrators with suggestions (based on school standards) about which students might need to be sent letters regarding their status with the school (placed on academic probation, be reinstated, etc.). The administrators were then able to use a common dashboard (built with web sockets) to collaborate and confirm which letters should be sent. Once confirmed, they could send all letters through the application.`,
		id: '30',
		startDate: 'Sep 2020',
		taskDescriptions: [
			'- Made custom REST applications using React, Vue, Node, Express and both SQL and NoSQL databases',
			'- Wrote unit and end-to-end tests with Jest and Cypress',
			'- Converted legacy ColdFusion applications into modern JavaScript apps'
		],
		technologies: ['TypeScript', 'React', 'Next', 'MongoDB'],
		title: 'Web Applications Developer'
	},
	{
		company: 'Chec/Commerce.js',
		companyUrl: 'https://commercejs.com/',
		endDate: 'Sep 2020',
		id: '40',
		startDate: 'Jun 2020',
		taskDescriptions: [
			'- Created eCommerce projects and integration guides using the Chec and Commerce.js SDKs and API.',
			'- Built tutorials and proof of concept applications showing how one could use 3D technologies (like three.js and react-three-fiber) within a cart/checkout experience.'
		],
		technologies: ['React', 'Three.js'],
		title: 'Developer Resources Contributor'
	}
];

export default employmentHistory;
