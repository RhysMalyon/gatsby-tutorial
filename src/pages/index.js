import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is my Gatsby test website.</p>
      <StaticImage
        alt="A man looking into the distance"
        src="../images/Rhys Malyon.jpg"
      />
    </Layout>
  )
}

export default IndexPage
