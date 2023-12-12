import type { Meta, StoryObj } from '@storybook/react';

import ColorThemeSwitch from './ColorThemeSwitch';

type Story = StoryObj<typeof meta>;

const meta = {
	title: 'Components/ColorThemeSwitch',
	component: ColorThemeSwitch,
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
} satisfies Meta<typeof ColorThemeSwitch>;

export const Primary: Story = {
	args: {}
};

export default meta;
