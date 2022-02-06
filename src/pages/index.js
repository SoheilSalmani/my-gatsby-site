import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function IndexPage({ location }) {
  return (
    <Layout pageTitle="Home" path={location.pathname}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="The mountains of Chamonix."
        src="https://en.chamonix.com/sites/default/files/styles/ogimage/public/media/images/%C2%A9Fabian_Bodet.jpg"
      />
    </Layout>
  )
}
