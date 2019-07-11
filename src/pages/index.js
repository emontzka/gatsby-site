import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {graphql, StaticQuery} from 'gatsby'
import {ScrollingProvider} from 'react-scroll-section'

import Experience from "../components/pageComponents/Experience"

const IndexPage = () => (
  <Layout className="layout">
    <ScrollingProvider>
    <StaticQuery query={graphql`
      {
      allWordpressPage  {
        edges {
          node {
            id
            title
            acf {
              job {
                company
                dates
                location
                is_contract
                job_title
                duty_list_repeater {
                  duty
                }
              }
              skill_category {
                category_name
                skill {
                  skill_name
                }
              }
            }
          }
        }
      } 
    }
    `} render={props => {
        let pageData = {}
        props.allWordpressPage.edges.forEach(page => (
          pageData[page.node.title] = page.node
        ))
        return (
          <>
            <Experience data={pageData['Experience']} />
          </>
        )
      }

    }/>
    </ScrollingProvider>
  </Layout>
)

export default IndexPage
