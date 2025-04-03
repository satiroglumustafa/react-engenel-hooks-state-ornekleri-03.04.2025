import useInternetControl from "../hooks/useInternetControl"


const CustomHooksExs2 = () => {

    const isOnline = useInternetControl()

    return (
        <>
            <div className="blockArea mb-5">
                <h5><strong>Örnek 2: İnternet Bağlantısı</strong> </h5>
                { isOnline ? "İnternetiniz Bağlı" : "İnternetiniz Bağlı Değil"
                    
                }
            </div>
        </>
    )
}

export default CustomHooksExs2