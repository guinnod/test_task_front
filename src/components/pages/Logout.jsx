import { Navigate } from "react-router-dom"
import { useEffect } from "react"

export const Logout = () => {
    useEffect(() => {
        localStorage.removeItem("access")
    }, [])
    return (
        <Navigate to="/login" replace />
    )
}