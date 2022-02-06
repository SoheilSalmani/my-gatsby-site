import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"

export const query = graphql`
  query GetPost($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default function BlogPost({ data, location }) {
  const post = data.mdx
  return (
    <Layout pageTitle={post.frontmatter.title} path={location.pathname}>
      <p>Posted: {post.frontmatter.date}</p>
      <p>
        <GatsbyImage
          image={getImage(post.frontmatter.hero_image)}
          alt={post.frontmatter.hero_image_alt}
        />
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}
