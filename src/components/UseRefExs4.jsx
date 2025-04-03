import { useRef } from "react"
import { Button } from "react-bootstrap"

const UseRefExs4 = () => {

    const paragRef = useRef()
    const sayacRef = useRef(0)

    const arttir = () => {
        sayacRef.current = sayacRef.current + 5
        alert(sayacRef.current)
    }

    return (
        <>

            <div className='blockArea'>
                <h5>Örnek 4 - (useRef kullanım alanı 2 )</h5>

                <p ref={paragRef}>Prop ve statelerde herhangibir değişiklik olduğunda ui yeniden render olur. jsx yeniden üretilir. <strong>prop ve statelerin değişmediği, yani componentin yeniden render olmadığı durumlarda useRef kullanabiliriz</strong></p>
                <Button variant="danger" onClick={arttir}>Artır</Button>
                <p>{sayacRef.current}</p>
            </div>

        </>
    )
}

export default UseRefExs4