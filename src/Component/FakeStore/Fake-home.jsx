import { Link } from "react-router-dom";


export function FakeHome(){

    return(
        <div>
            <h3>Shop <Link to="/category">Categories</Link> </h3>
        </div>
    )
}