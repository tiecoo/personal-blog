import React from 'react'
import { graphql, Link } from 'gatsby'

const Template = ({data, pageContext}) => {
    const {next, prev} = pageContext
    const title = data.markdownRemark.frontmatter.title
    const html = data.markdownRemark.html
    return (
        <div>
            <h1>{title}</h1>
            <div 
                className="blogpost"
                dangerouslySetInnerHTML={{__html: html}}
            />
            {next && <Link to={next.frontmatter.path}>
                Next
            </Link>}
            {prev && <Link to={prev.frontmatter.path}>
                Next
            </Link>}
           
        </div>
    )
}

export const query = graphql`
    query($pathSlug: String!){
        markdownRemark( frontmatter: { path: {eq: $pathSlug}}){
            html
            frontmatter{
                title
            }
        }
    }
`


export default Template