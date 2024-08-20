import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {css} from "@emotion/react"
import Layout from "./layout"

export const query = graphql`
  query ($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        imagen {
          gatsbyImageData(layout: CONSTRAINED, width: 800)
        }
      }
    }
  }
`
const HabitacionesTemplate = ({ data: {allDatoCmsHabitacion: {nodes}} }) => {
  console.log(nodes);

  const { titulo, contenido, imagen } = nodes[0];
  const imagenHabitacion = getImage(imagen);

  return (
    <Layout>
        <main
            css = {css`
                display: flex;
                flex-direction: column;
                margin: 0 auto;
                max-width: 1200px;
                width: 95%;
                justify-content: center;
                `}
        >
            <h1
                css= {css`
                    text-align: center;
                    margin-top: 4rem;
                    `}
            >{titulo}</h1>
            <p>{contenido}</p>
            <GatsbyImage image={imagenHabitacion} alt={titulo}/>
        </main>
    </Layout>
  )
}

export default HabitacionesTemplate
