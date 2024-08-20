import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 100px;
    }
`


const ContenidoInicio = () => {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
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
        css = {css`
            text-align: center;
            font-size: 4rem;
            margin-top: 4rem;
            `}
      >{titulo}</h2>
      <TextoInicio>
        <p>{contenido}</p>
        {dataImage && <GatsbyImage image={dataImage} alt={titulo} />}
      </TextoInicio>
    </>
  )
}

export default ContenidoInicio
