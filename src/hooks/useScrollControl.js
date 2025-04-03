import { useEffect, useState } from "react"

const useScrollControl = ()=> {
    const [stateScroll,setStateScroll] = useState(0)


    useEffect(()=>{

        const scrollFunct = ()=>{
            setStateScroll(window.scrollY)
        }

        scrollFunct()
        window.addEventListener('scroll',scrollFunct)
        return ()=>{
            window.removeEventListener('scroll',scrollFunct)
        }
    },[])

    return stateScroll

}
export default useScrollControl