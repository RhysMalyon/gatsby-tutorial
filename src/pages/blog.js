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
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`

export default BlogPage;
