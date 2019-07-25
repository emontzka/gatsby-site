/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Menu from './pageComponents/Menu'
import FixedMenu from './UI/FixedHeader'
import Overlay from './UI/Overlay'

import Header from "./header"

import "./layout.css"
import "./nav.css"
import styled from 'styled-components'


// const Main = styled.main`
//   width: 100%;
// `

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Content = styled.div`
    margin-left: 0;
    flex: 1 0;
    @media(min-width: 768px) {

    }
  `

  const LayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
  `

  return (
    <LayoutContainer>
      <Overlay />
      <FixedMenu />
      <Menu />
      <Content className="layout-content">
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div
          style={{
            margin: `0 auto`,
            // maxWidth: 960,
            // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          

        </div>
      </Content>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout