import { Navigate } from 'react-router-dom'

const AllowAdmin = ({ admin, children }) => {
  if (!admin) { return <Navigate to='/' /> }
  return children
}

export default AllowAdmin
