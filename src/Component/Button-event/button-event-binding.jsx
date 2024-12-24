


export function ButtonBinding(){

    function double(){
        window.open("iphone.jpg","Iphone"," width=300 height=300")
    }
    function handleContextMenu(){
        alert("right click not works");
        document.oncontextmenu= function(){
            return false;
        }
    }

    return(
<div className="container-fluid" onContextMenu={handleContextMenu}>

  <img src="iphone.jpg" width={100} height={100} onDoubleClick={double}></img>
</div>
    )
}