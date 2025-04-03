import React from "react"
import { Button } from "react-bootstrap"

const UseCallbackChild = React.memo(({ onClick }) => {
    console.log("🔁 Child render edildi")
    return (
        <div style={{ marginTop: "1rem" }}>
            <Button onClick={onClick}>Child Butonu</Button>
        </div>
    )
}) 

export default UseCallbackChild