import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconClick from './index'

export default {
  title: 'Atoms/IconClick',
  component: IconClick,
} as ComponentMeta<typeof IconClick>

const Template: ComponentStory<typeof IconClick> = (args) => (
  <IconClick />
)

export const Basic_Chip = Template.bind({})