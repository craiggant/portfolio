import { TEmploymentHistory } from '../types';

const employmentHistory: TEmploymentHistory[] = [
	{
		company: 'Mass Virtual',
		companyLogo: '',
		companyUrl: '',
		endDate: 'Dec 2023',
		id: '10',
		startDate: 'Oct 2023',
		taskDescriptions: [
			'Built custom web applications that supported internal business needs.'
		],
		technologies: ['TypeScript', 'React', 'Next', 'MongoDB'],
		title: 'Web Engineer'
	},
	{
		company: 'Charter Communications',
		companyLogo: '',
		companyUrl: 'https://corporate.charter.com/',
		endDate: 'Oct 2023',
		id: '20',
		startDate: 'Apr 2022',
		taskDescriptions: [
			'• Build accessible, scalable and secure full-stack web applications to meet a variety of business needs using React, Typescript, Node ,and Fastify.',
			'• Architect and implement scalable database solutions for our applications. Integrate external applications and APIs (like Salesforce and Jira) into our apps.'
		],
		technologies: ['TypeScript', 'React', 'Node', 'Fastify', 'PostgreSQL'],
		title: 'Software Engineer'
	},
	{
		company: 'University of Central Florida',
		companyLogo: '',
		companyUrl: '',
		endDate: 'Apr 2022',
		id: '30',
		startDate: 'Sep 2020',
		taskDescriptions: [
			'• Made custom REST applications using React, Vue, Node, Express, and both SQL and NoSQL databases',
			'• Wrote unit and end-to-end tests with Jest and Cypress',
			'• Converted legacy ColdFusion applications into modern JavaScript apps'
		],
		technologies: ['TypeScript', 'React', 'Next', 'MongoDB'],
		title: 'Web Applications Developer'
	},
	{
		company: 'Chec/Commerce.js',
		companyLogo: '',
		companyUrl: '',
		endDate: 'Sep 2020',
		id: '40',
		startDate: 'Jun 2020',
		taskDescriptions: [
			'• Created eCommerce projects and integration guides using the Chec and Commerce.js SDKs and API.',
			'• Built tutorials and proof of concept applications showing how one could use 3D technologies (like three.js and react-three-fiber) within a cart/checkout experience.'
		],
		technologies: ['React', 'Three.js'],
		title: 'Developer Resources Contributor'
	}
];

export default employmentHistory;
