import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Link } from "gatsby"

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`

const HabitacionVista = ({ habitacion }) => {
  const { titulo, contenido, slug, imagen } = habitacion
  const imagenHabitacion = getImage(imagen)

  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
      `}
    >
      <GatsbyImage image={imagenHabitacion} alt={titulo} />
      <div
        css={css`
          padding: 3rem;
        `}
      >
        <h3
            css={css`
                height: 96px;
                text-align: center;
                `}
        >{titulo}</h3>

        <Boton to={slug}>Ver habitacion</Boton>
      </div>
    </div>
  )
}

export default HabitacionVista
