import Hero from '../components/home/Hero'
import Audience from '../components/home/Audience'
import Products from '../components/home/Products'
import Story from '../components/home/Story'
import CTABand from '../components/CTABand'
import Page from '../components/Page'

export default function LandingPage() {
  return (
    <Page>
      <Hero />
      <Audience />
      <Products />
      <Story />
      <CTABand />
    </Page>
  )
}
