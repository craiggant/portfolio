import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

type Story = StoryObj<typeof meta>;

const meta = {
	title: 'Components/Header',
	component: Header,
	parameters: {
		layout: 'centered',
		actions: { argTypesRegex: '^on.*' },
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: '#000'
				},
				{
					name: 'light',
					value: '#fff'
				}
			]
		}
	},
	tags: ['autodocs']
} satisfies Meta<typeof Header>;

export const Primary: Story = {
	args: {
		name: 'John Doe',
		title: 'Software Engineer',
		description: 'This is a description of the header component'
	}
};

export default meta;
