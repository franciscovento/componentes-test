import type { Preview } from "@storybook/react";
import AntdDecorator from '../src/lib/theme/AntdDecorator';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [AntdDecorator],
  
  
  
};

export default preview;
