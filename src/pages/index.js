import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import 'bootstrap/dist/css/bootstrap.css';

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  console.log(edges[0].node.frontmatter.title)
  return (
    <div style={{
      backgroundColor: "#000",
                opacity: '0.7'
    }}>
      <Header></Header>
      <div className='jumbotron jumbotron-fluid'>
        <div className="container"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "avenir",
                }}>
                  <h1 style={{alignItems: 'center'}}>Posts</h1>
          {edges.map(edge => {
            const frontMatter = edge.node.frontmatter
            return (                  
                  <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                      <h5 className="card-title">{frontMatter.title}</h5>
                      <p className="card-text">{frontMatter.excerpt}</p>
                      <Link to={frontMatter.path}>Link</Link>
                    </div>
                  </div>
            )
          })}
        </div>
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
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default Layout
