/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
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
      <div className="container">
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
      </div>
    </>
  )
}

export default Layout
