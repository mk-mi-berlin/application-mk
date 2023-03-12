import React from "react"

import Hero from "../components/hero"

export default {
  component: Hero,
  title: "Components/Hero",
}

const Template = args => <Hero {...args} />

export const Default = Template.bind({})
Default.args = {
  siteTitle: "Something",
}