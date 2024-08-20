import React from "react"
import { css } from "@emotion/react"

const Footer = props => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer
        css={css`
          background-color: rgb(33, 44, 55);
          margin-top: 5rem;
          padding: 1rem;
          display: flex;
          justify-content: center;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
            color: #fff;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          {props.title}. todos los derechos reservados {year} &copy;
        </div>
      </footer>
    </>
  )
}

export default Footer
