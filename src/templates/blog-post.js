import React from "react"
import { Link, graphql } from "gatsby"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = "Smart Moves Blog"
    const { previous, next } = this.props.pageContext
    const image = post.frontmatter.image ? post.frontmatter.image.childImageSharp.resize : null 
    return (
      <React.Fragment>
        <NavBar />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
            image={image}
          />
          <article>
            <header>
              <h3
                style={{
                  marginTop: rhythm(1),
                  marginBottom: 0,
                  fontFamily: 'sans-serif'
                }}
              >
                {post.frontmatter.title}
              </h3>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1),
                }}
              >
                {post.frontmatter.date}
              </p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <footer>
              <Bio />
            </footer>
          </article>

          <nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link 
                    to={previous.fields.slug} 
                    rel="prev"
                    style={{
                      color: '#007acc'
                    }}
                  >
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link 
                    to={next.fields.slug} 
                    rel="next"
                    style={{
                      color: '#007acc'
                    }}
                  >
                    {next.frontmatter.title} →
                </Link>
                )}
              </li>
            </ul>
          </nav>
        </Layout>
        <Footer />
      </React.Fragment>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image: featured {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`
