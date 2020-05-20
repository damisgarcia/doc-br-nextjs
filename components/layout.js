/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import Head from 'next/head'
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{process.env.SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <main>
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with &nbsp;
          <a 
            target="_blank"
            href={process.env.BUILDER}
          >
            Damis Garcia
          </a>
        </footer>
      </Container>
    </>
  )
}

const Container = styled.div`
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  margin: 0 auto;
`

export default Layout
