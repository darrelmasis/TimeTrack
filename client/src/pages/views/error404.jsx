import React from 'react'
import { useUpdatePageTitle } from "../../App"

function error404() {
  useUpdatePageTitle("Página no encontrada")
  return (
    <h1>Error 404, no encontrado</h1>
  )
}

export default error404