import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Nav from '../../nav'
import {graphql, StaticQuery} from 'gatsby'
import {ScrollingProvider, Section} from 'react-scroll-section'

import Experience from "../components/pageComponents/Experience"
import Projects from "../components/pageComponents/Projects"
import Homepage from "../components/pageComponents/Homepage"

const IndexPage = () => (
  <ScrollingProvider scrollBehavior="smooth">
  <Layout className="layout">
    
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
      allWordpressWpWork {
        edges {
          node {
            id
            title
            content
            acf {
              portfolio_url
            }
          }
        }
      }
      allWordpressWpProjects {
        edges {
          node {
            id
            title
            content
            acf {
              github
              url
              description
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
        let workData = {}
        props.allWordpressWpWork.edges.forEach(post => (
          workData[post.node.title] = post.node
        ))
        let projectData = {}
        props.allWordpressWpProjects.edges.forEach(post => (
          projectData[post.node.title] = post.node
        ))      
        return (
          <>
            <Homepage />
            <Section id="projects">
              <Projects data={projectData} />
            </Section>
            <Section id="experience">
              <Experience data={pageData['Experience']} />
            </Section>
            
            {/* <Work data={projectData} /> */}
            {/* <Skills data={pageData['Skills']} /> */}
            
          </>
        )
      }

    }/>
    
  </Layout>
  </ScrollingProvider>
)

export default IndexPage
