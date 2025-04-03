import { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext"

const ChildContextComponent = ()=>{

    const {theme,toggleTheme} = useContext(ThemeContext) 
    //toggleTheme üst komponentdeki fonksiyondur

    return(
        <>
         <p>Aktif tema: {theme}</p>
         <button onClick={toggleTheme}>Temayı Değiştir</button>
        </>
    )
}

export default ChildContextComponent