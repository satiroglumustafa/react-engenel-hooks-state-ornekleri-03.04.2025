import { useState } from "react"
import './UseContextExs2.css'
import ThemeContext from "../contexts/ThemeContext"
import ChildContextComponent from "./ChildContextComponent"

const UseContextExs2 = () => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = ()=>{
        setTheme( prev => prev ==="light" ? "dark" : "light")
    }

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div className={`app ${theme}`}>
                    <p>Hem state, hemde bir fonksiyonu <strong>context kullanarak</strong> alt komponentlere aktarabildik</p>
                    <ChildContextComponent />
                </div>

            </ThemeContext.Provider>

        </>
    )
}

export default UseContextExs2