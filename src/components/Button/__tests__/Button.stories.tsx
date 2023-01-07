import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '../Button'
import { ButtonType } from '../Button'
import PlayLogo from '../../../static/images/play-button.svg'

export default {
  title: 'Button',
  component: Button,
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
        component: 'Primary and secondary styles for all buttons',
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary',
  buttonType: ButtonType.Primary,
}

export const PrimaryWithCustomClass = Template.bind({})
PrimaryWithCustomClass.args = {
  label: 'Primary Custom',
  buttonType: ButtonType.Primary,
  customClassName: 'custom-class-name',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary',
  buttonType: ButtonType.Secondary,
}

export const Alternate = Template.bind({})
Alternate.args = {
  label: 'Alternate',
  buttonType: ButtonType.Alternate,
}

export const IconRound = Template.bind({})
IconRound.args = {
  Icon: <PlayLogo />,
  buttonType: ButtonType.IconRound,
}

export const IconRoundSecondary = Template.bind({})
IconRoundSecondary.args = {
  Icon: <PlayLogo />,
  buttonType: ButtonType.IconRoundSecondary,
}

export const PrimaryWithIcon = Template.bind({})
PrimaryWithIcon.args = {
  label: 'Primary Ic',
  buttonType: ButtonType.Primary,
  Icon: <PlayLogo />,
}

export const SecondaryWithIcon = Template.bind({})
SecondaryWithIcon.args = {
  label: 'Secondary Ic',
  buttonType: ButtonType.Secondary,
  Icon: <PlayLogo />,
}
