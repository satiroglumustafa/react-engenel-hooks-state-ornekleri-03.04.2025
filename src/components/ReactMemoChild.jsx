import React from "react"

 const ReactMemoChild = ({name})=>{
    console.log("Child render edildi")
    return(
        <>
          <p>Merhaba {name}</p>
        </>
    )
}

export default React.memo(ReactMemoChild)