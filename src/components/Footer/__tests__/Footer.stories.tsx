import { ComponentStory, ComponentMeta } from '@storybook/react'

import Footer from '../Footer'

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    parameters: {
      backgrounds: {
        default: '#141414',
        values: [
          { name: 'dark', value: '#141414' },
          { name: 'light', value: '#fff' },
        ],
      },
    },
    docs: {
      description: {
        component: 'Footer component default styles',
      },
    },
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const FooterDefault = Template.bind({})
