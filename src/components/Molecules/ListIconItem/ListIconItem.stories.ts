import { Meta, StoryObj } from '@storybook/react';
import ListIconItem from './ListIconItem';

const meta = {
  title: 'Molecules/IconItem',
  component: ListIconItem,
  tags: ['docsPage'],
} satisfies Meta<typeof ListIconItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MainIconItem: Story = {
  args: {
    label: 'order',
    icon: {
      name: 'order',
      size: 32,
    },
  },
};
