import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Seo from "./seo"
import "../styles/global.css"
import * as styles from "./layout.module.css"

export default function Layout({ pageTitle, description, path, image, children }) {
  const data = useStaticQuery(graphql`
    query GetSiteName {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  const siteName = data.site.siteMetadata.title

  return (
    <>
      <Seo
        siteName={siteName}
        pageTitle={pageTitle}
        description={description}
        path={path}
        image={image}
      />
      <nav>
        <ul className={styles.navLinkList}>
          <li className={styles.siteNameLink}>
            <strong>
              <Link to="/">{siteName}</Link>
            </strong>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </>
  )
}
