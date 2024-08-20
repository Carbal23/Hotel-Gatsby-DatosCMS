import * as React from "react"
import {css} from "@emotion/react"
import styled from "@emotion/styled/macro"
import Layout from "../components/layout"
import ImagenHotel from "../components/imagenHotel"
import ContenidoInicio from "../components/contenidoInicio"
import useHabitacion from "../hooks/use-habitacion"
import HabitacionVista from "../components/habitacionVista"

const ListadoHabitaciones = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 765px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {

  const habitaciones = useHabitacion();

  console.log(habitaciones);

  return (
    <div>
    <Layout>
      <ImagenHotel />
      <ContenidoInicio/>
      <h2
        css = {css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestras habitaciones
      </h2>

      <ListadoHabitaciones>
        {habitaciones.map(habitacion=>(
          <HabitacionVista 
            key={habitacion.id}
            habitacion={habitacion}
          />
        ))}
      </ListadoHabitaciones>
    </Layout>
  </div>
  )
}



/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default IndexPage
