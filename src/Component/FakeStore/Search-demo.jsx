

export function Search(){
 

    function HandleClick(){

    }
    return(
        <div className="container-fluid">
            <form method="/get" action="/result">
                <dl>
                    <dd><input type="search" placeholder="Search"></input></dd>
                    <dd ><button type="submit" className="btn btn-primary" onClick={HandleClick}>Search</button></dd>
                </dl>
            </form>
        </div>
    )
}