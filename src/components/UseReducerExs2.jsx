import { useReducer } from "react"
import { initialStateSayac, ReducerSayacFunct } from "../reducers/ReducerSayacFunct"

import { Button } from "react-bootstrap"

const UseReducerExs2 = () => {

    const [state, dispatch] = useReducer(ReducerSayacFunct, initialStateSayac)

    const sayacArtir = () => {
        dispatch({ type: "SAYAC_ARTIR" })
    }

    const sayacAzalt = () => {
        dispatch({ type: "SAYAC_AZALT" })
    }
    const sayacSifirla = () => {
        dispatch({ type: "SIFIRLA" })
    }

    return (
        <>
            <div className="blockArea mb-4">
                <h5><strong>Örnek 2 - Sayaç Artırma,Azaltma,Sıfırlama</strong></h5>
                <p>Sayaç Değeri: <strong>{state.count}</strong></p>
                <Button variant="success" className="me-4 mb-5" onClick={sayacArtir}>Artır</Button>
                <Button variant="danger" className="me-4 mb-5" onClick={sayacAzalt}>Azalt </Button>
                <Button variant="primary" className="me-4 mb-5" onClick={sayacSifirla}>Sıfırla</Button>
            </div>

        </>
    )
}

export default UseReducerExs2