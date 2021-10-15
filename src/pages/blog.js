import * as React from 'react'
import Layout from '../components/layout'

import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  const blogComponents = data.allFile.nodes.map(
      post => <li>{post.name}</li>
    )
  
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {blogComponents}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage;
