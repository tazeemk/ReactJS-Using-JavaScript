  export function CustomArgs(){

       function InsertClick(e,...msg){
           console.log(`X:${e.clientX} prod :${msg}`)
       }

    return(
        <div>
         <button onClick={(e)=>InsertClick(1,'TV','Devang')}>button</button>

        </div>
    )
  }