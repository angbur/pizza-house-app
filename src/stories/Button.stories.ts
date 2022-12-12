import {Meta, StoryFn} from '@storybook/react';
import Button from '../components/Atoms/Button';


export default {
    title: 'Atoms/Button',
    component: Button,
} as Meta;

export const Primary: StoryFn= (args) => Button({ variant: 'primary', children: 'Hi', ...args});
