import { graphql, useStaticQuery } from "gatsby"

const useHabitacion = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          titulo
          id
          contenido
          slug
          imagen {
            gatsbyImageData(layout: CONSTRAINED, width: 800)
          }
        }
      }
    }
  `)


  return data.allDatoCmsHabitacion.nodes.map(habitacion=>({
    titulo: habitacion.titulo,
    id: habitacion.id,
    contenido: habitacion.contenido,
    slug: habitacion.slug,
    imagen: habitacion.imagen
  }))
}

export default useHabitacion;