import * as React from "react"
import Layout from "../components/layout"

export default function AboutPage({ location }) {
  return (
    <Layout pageTitle="About Me" path={location.pathname}>
      <p>
        Hi there! I'm the proud creator of this site, which I built with
        Gatsby.
      </p>
    </Layout>
  )
}