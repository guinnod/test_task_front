import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <main>
            Page Not Found
            <Link to="/">Go to home</Link>
        </main>
    )
}