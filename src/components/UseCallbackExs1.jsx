import { useCallback, useState } from "react"
import UseCallbackChild from "./UseCallbackChild"
import { Button } from "react-bootstrap"

const UseCallbackExs1 = () => {

    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    // useCallback ile sarmalanmazsa => her render'da fonksiyon değişir
    const handleChildClick = useCallback(() => {
        console.log("🧷 Child butonuna tıklandı")
    }, []) // bağımlılık yok → referans hiç değişmez

    return (
        <>
            <div className="blockArea">
                <h5>
                    <strong>Örnek 1</strong>
                </h5>
                <div style={{ padding: "1rem" }}>
 
                    <p><strong>Sayaç:</strong> {count}</p>
                    <Button onClick={() => setCount(count + 1)}>Artır</Button>

                    <br /><br />
                    <input
                        type="text"
                        placeholder="Bir şey yaz"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                    <UseCallbackChild onClick={handleChildClick} />
                </div>
            </div>
        </>
    )
}

export default UseCallbackExs1