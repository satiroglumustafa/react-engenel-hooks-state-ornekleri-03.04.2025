import { useContext } from "react"
import TotalTourContext from "../contexts/TotalTourContext"
 
 

const TotalTourComponent = () => {

    const totalTourLengtValue = useContext(TotalTourContext)

    return (
        <>
            <p>Listelenen Tur sayısı : <strong>{totalTourLengtValue}</strong></p>
        </>
    )
}

export default TotalTourComponent