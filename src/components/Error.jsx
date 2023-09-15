import { Link } from "react-router-dom"

export default function Error () {
    return (
        <div>
            <h3>Oops!</h3>
            <p>An unexpected error has ocurred</p>
            <p>404 not found</p>
            <Link to={"/"}><button>Go back</button></Link>
        </div>
    )
}