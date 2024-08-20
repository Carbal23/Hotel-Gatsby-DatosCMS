import React from "react"
import Head from "./head"
import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Link } from "gatsby"
import Navegacion from "./nav"

const EnlaceHome = styled(Link)`
   color: #fff;
   text-align: center;
   text-decoration: none;
`

const Header = props => {
  return (
    <>
      <Head />
      <header
        css={css`
          background-color: rgba(44,62,80);
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <EnlaceHome
            to="/"
          >
            {props.children}
          </EnlaceHome>

          <Navegacion/>
        </div>
      </header>
    </>
  )
}

export default Header
