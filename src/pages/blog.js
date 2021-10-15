import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {

  console.log(data)

  const blogComponents = data.allMdx.nodes.map(node => 
    <article key={node.id}>
      <h2>{node.frontmatter.title}</h2>
      <small>{node.frontmatter.date}</small>
      <br />
      <MDXRenderer>
        {node.body}
      </MDXRenderer>
    </article>
  )
  
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      {blogComponents}
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
