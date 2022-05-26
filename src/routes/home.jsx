import React from 'react'

import { Layout } from '../components/layout'
import { Hero } from '../components/hero'
import { HeroIllustration } from '../components/hero-illustration'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Dachshund"
        content="Open-source mailer. Register and use for free. forever!"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
