import { useReducer } from "react"
import { initialStateCalculate, ReducerCalculateFunct } from "../reducers/ReducerCalculateFunct"
import { Button } from "react-bootstrap"



const UseReducerExs1 = () => {

    const [state, dispatch] = useReducer(ReducerCalculateFunct, initialStateCalculate)

    const handleNumber1Change = (e) => {
        dispatch({ type: "SET_NUMBER1", payload: Number(e.target.value) })
    }

    const handleNumber2Change = (e) => {
        dispatch({ type: "SET_NUMBER2", payload: Number(e.target.value) })
    }
    const handleAddition = () => {
        dispatch({ type: "SET_RESULT", payload: state.number1 + state.number2 })
    }
    return (
        <>
            <div className="blockArea mb-4">
                <h5><strong>Örnek 1 - Hesap Makinesi Örneği</strong></h5>
                <div className="calculator-container">
                    <div className="form-container">
                        <div className="form-group">
                            <label className="form-label" htmlFor="number1">
                                <strong>Number1</strong>
                            </label>
                            <input
                                className="form-control mb-3"
                                type="number"
                                id="number1"
                                onChange={handleNumber1Change}
                                value={state.number1}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="number2">
                                <strong>Number2</strong>
                            </label>
                            <input
                                className="form-control mb-3"
                                type="number"
                                id="number2"
                                onChange={handleNumber2Change}
                                value={state.number2}
                            />
                        </div>
                        <Button variant="success" className="mb-3" onClick={handleAddition}>Hesapla</Button>
                        <div className="form-group">
                            <label className="form-label" htmlFor="result">
                                <strong>Sonuç</strong>
                            </label>
                            <input
                                className="form-control"
                                type="number"
                                id="result"
                                value={state.result}
                                readOnly
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UseReducerExs1