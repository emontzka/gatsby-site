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
import Skills from "../components/pageComponents/Skills"
import Works from "../components/pageComponents/Works"


const IndexPage = () => (
  <>
  
  <ScrollingProvider scrollBehavior="smooth">
  <Layout className="layout">
  <SEO />
    
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
            }
          }
        }
      } 
      allWordpressWpWork {
        edges {
          node {
            id
            title
            featured_media {
              source_url
            }
            acf {
              portfolio_url
              short_description
              description
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
            featured_media {
              source_url
              media_details {
                file
              }
            }
            acf {
              github
              url
              project_description
              short_project_description
            }
          }
        }
      }
      allWordpressWpSkills {
        edges {
          node {
            featured_media {
              source_url
            }
            title
            id
            categories {
              name
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
        let skillsData = {}
        props.allWordpressWpSkills.edges.forEach(post => (
          skillsData[post.node.title] = post.node
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
            <Section id="work">
              <Works  data={workData}/>
            </Section>
            <Section id="skills">
              <Skills data={skillsData} />
            </Section>
            
            {/* <Work data={projectData} /> */}
            {/* <Skills data={pageData['Skills']} /> */}
            
          </>
        )
      }

    }/>
    
  </Layout>
  </ScrollingProvider>
  </>
)

export default IndexPage
