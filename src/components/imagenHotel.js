import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "@emotion/styled/macro"

const BackgroundContainer = styled.div`
  height: 700px;
  position: relative;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
`

const OverlayContent = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.75),
    rgba(34, 49, 63, 0.75)
  );
  color: #FFF;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    margin: 0;
  }

  p{
    font-size: 2rem;
  }
`

const ImagenHotel = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `)

  const imageData = getImage(image)
  console.log(imageData)

  const imageUrl = imageData.images.fallback.src

  return (
    <BackgroundContainer image={imageUrl}>
      <OverlayContent>
        <h1>Bienvenido al hotel Gatsby</h1>
        <p>El mejor lugar para tus vacaciones</p>
      </OverlayContent>
    </BackgroundContainer>
  )
}

export default ImagenHotel
