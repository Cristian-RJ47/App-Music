import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../context/customHooks/UseAuth"

export const PrivateRouter = () => {
  
  const {session} = useAuth()

  return session? <Outlet /> : <Navigate to={'/start'}/>
}