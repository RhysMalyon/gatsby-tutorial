import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  const title = data.mdx.frontmatter.title
  const date = data.mdx.frontmatter.date
  const body = data.mdx.body

  return (
    <Layout pageTitle={title}>
      <small>{date}</small>
      <GatsbyImage 
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <small>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </small>
      <MDXRenderer>
        {body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPost
