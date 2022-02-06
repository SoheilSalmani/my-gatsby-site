import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"

export const query = graphql`
  query GetPosts {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        slug
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`

export default function BlogPage({ data, location }) {
  const posts = data.allMdx.nodes
  return (
    <Layout pageTitle="Blog" path={location.pathname}>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.slug}`}>
              {post.frontmatter.title} ({post.frontmatter.date})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
