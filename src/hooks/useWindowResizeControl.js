import { useEffect, useState } from "react"

const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState(
        {
            width: undefined,
            height: undefined
        }
    )


    useEffect(() => {

        const resizeFunct = () => {
            setWindowSize(
                {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            )
        }
        resizeFunct()
        window.addEventListener('resize', resizeFunct)

        return () => {
            window.removeEventListener('resize', resizeFunct)
        }

    }, [])

    return windowSize

 

}
export default useWindowResize