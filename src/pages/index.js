import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  console.log(edges[0].node.frontmatter.title)
  return (
    <div>
      <Header></Header>
      <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "avenir",
              }}>
        {edges.map(edge => {
          const frontMatter = edge.node.frontmatter
          console.log(frontMatter)
          return (
            <div
              key={frontMatter.path}
              style={{marginBottom: '1rem'}}
            >
                <Link to={frontMatter.path}>
                {frontMatter.title}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default Layout
