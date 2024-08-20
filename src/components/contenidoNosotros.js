import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

const Contenido = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;
  }

  P {
    line-height: 2;
    margin-top: 2rem;
  }
`

const ContenidoNosotros = () => {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
        nodes {
          titulo
          contenido
          imagen {
            gatsbyImageData(layout: CONSTRAINED, width: 800)
          }
        }
      }
    }
  `)

  const datosPagina = informacion.allDatoCmsPagina.nodes[0]
  const { titulo, contenido, imagen } = datosPagina
  const dataImage = getImage(imagen)
  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >
        {titulo}
      </h2>
      <Contenido>
        <p>{contenido}</p>
        <GatsbyImage image={dataImage} alt={titulo} />
      </Contenido>
    </>
  )
}

export default ContenidoNosotros
