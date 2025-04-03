
import TotalTourContext from "../contexts/TotalTourContext"
import TotalTourComponent from "./TotalTourComponent"

const UseContextExs1 = (prop)=>{
    return (
        <>
        
        <TotalTourContext.Provider value={prop.totalTourLength}>
            <TotalTourComponent />
        </TotalTourContext.Provider>
        </>
    )
}

export default UseContextExs1