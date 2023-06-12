import { Outlet, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "@services/axios"

export const Protected = () => {

    const [loading, setLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        axios.get('user-data')
        .then(res=> {
            setIsAuthorized(true);
        })
        .catch(err=> {
            setIsAuthorized(false)
        })
        .finally(() => {
            setLoading(false)
        })
            
    }, [isAuthorized, loading])
    
    return (
        loading ? <div>Loading...</div> : isAuthorized ? <Outlet /> : <Navigate to="/login" replace />
    )
}