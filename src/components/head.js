import React from "react"
import useSeo from "../hooks/use-seo"

const Head = () => {
  const data = useSeo();
  const { siteName, fallbackSeo: {title, description}} = data
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </>
  )
}

export default Head
