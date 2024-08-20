import React from "react"
import Header from "./header"
import { Global, css } from "@emotion/react"
import Footer from "./footer"
import useSeo from "../hooks/use-seo"

const Layout = props => {
  const seo = useSeo();
  const { siteName, fallbackSeo: {title, description}} = seo
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62, 5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: "PT sans", sans-serif;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "Roboto", serif;
          }
          h3 {
            font-family: "PT sans", sans-serif;
            font-size: 2rem;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />

      <Header>
        <h3>{title}</h3>
      </Header>

      {props.children}
      
      <Footer title={title}/>
    </>
  )
}

export default Layout
