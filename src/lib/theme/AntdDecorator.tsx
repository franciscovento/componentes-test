import {AntdProvider} from '../../providers';
import { StoryFn } from '@storybook/react';

export const AntdDecorator = (StoryComponent: StoryFn) => (
  <AntdProvider>
    <StoryComponent />
  </AntdProvider>
);

export default AntdDecorator;
