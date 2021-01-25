/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import { FixedObject } from "gatsby-image";
import React from "react";
import { FooterComponent, Navbar } from "./";
import "./assets/layout.scss";


export const PageLayout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      allImageSharp(filter: {fixed: {originalName: {eq: "profile-img.jpg"}}}) {
        nodes {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Navbar fixed={data.allImageSharp.nodes[0].fixed as FixedObject} />
      <div>
        <main>{children}</main>
        <footer>
          <FooterComponent />
        </footer>
      </div>
    </>
  )
};
