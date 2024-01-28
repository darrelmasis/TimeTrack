import { usePageTitle } from '../../utils/helpersFunction'

const Error404 = () => {
  usePageTitle('Página no encontrada')

  return <h1>Error 404, no encontrado</h1>
}

export default Error404
