import { useReducer } from "react"
import { initialFormState, ReducerForm } from "../reducers/ReducerForm"
import { Button } from "react-bootstrap"

const UseReducerExs3 = () => {

    const [state, dispatch] = useReducer(ReducerForm, initialFormState)

    const handleNameChange = (e) => {
        dispatch({ type: "SET_NAME", payload: e.target.value })
    }
    const handleSurnameChange = (e) => {
        dispatch({ type: "SET_SURNAME", payload: e.target.value })
    }
    const handleEmailChange = (e) => {
        dispatch({ type: "SET_EMAIL", payload: e.target.value })
    }
    const handleReset = (e) => {
        dispatch({ type: "SET_RESET" })
    }
    const openModal = () => {
        dispatch({ type: "OPEN_MODAL" })
    }
    const closeModal = () => {
        dispatch({ type: "CLOSE_MODAL" })
    }

    return (
        <>
            <div className="blockArea mb-4">
                <h5><strong>Örnek 3 </strong> Kullanıcı bir formu doldururken ad,soyad ve e-posta bilgilerini girecek.ve daha sonra biz de bunları modal içinde göstereceğiz. useReducer ile yöneten bir yapı olarak kullanıcaz </h5>

                <div style={{ maxWidth: "400px", margin: "20px auto" }}>
                    <h4>Kullanıcı Bilgi Formu</h4>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={state.name}
                        onChange={handleNameChange}
                        placeholder="Ad"
                        style={{ marginBottom: "10px", width: "100%" }}
                    />
                    <input
                        type="text"
                        name="surname"
                        className="form-control"
                        value={state.surname}
                        onChange={handleSurnameChange}
                        placeholder="Soyad"
                        style={{ marginBottom: "10px", width: "100%" }}
                    />
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={state.email}
                        onChange={handleEmailChange}
                        placeholder="E-posta"
                        style={{ marginBottom: "10px", width: "100%" }}
                    />
                    <div className="flex gap-2 mb-4">
                        <Button
                            variant="danger"
                            onClick={handleReset}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Formu Temizle
                        </Button>
                        <Button
                            variant="success"
                            onClick={openModal}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            Modal Aç
                        </Button>
                    </div>

                    {state.isModalOpen && (

                        <div className="modal" style={{display:"block"}}>

                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header"></div>
                                    <p><strong>Ad:</strong> {state.name}</p>
                                    <p><strong>Soyad:</strong> {state.surname}</p>
                                    <p><strong>E-posta:</strong> {state.email}</p>
                                    <Button variant="danger"
                                        onClick={closeModal}
                                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Kapat
                                    </Button>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default UseReducerExs3
