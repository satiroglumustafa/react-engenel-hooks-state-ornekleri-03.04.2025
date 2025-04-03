const ReducerForm = (state, action) => {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.payload }
        case "SET_SURNAME":
            return { ...state, surname: action.payload }
        case "SET_EMAIL":
            return { ...state, email: action.payload }
        case "SET_RESET":
            return initialFormState
        case "OPEN_MODAL":
            return { ...state, isModalOpen: true }
        case "CLOSE_MODAL":
            return { ...state, isModalOpen: false }
        default:
            break;
    }
}

const initialFormState = {
    name: "",
    surname: "",
    email: "",
    isModalOpen: false
}

export { ReducerForm, initialFormState }