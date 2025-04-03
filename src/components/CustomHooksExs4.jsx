import useScrollControl from "../hooks/useScrollControl"

const CustomHooksExs4 = ()=>{

    const stateScrollHook = useScrollControl()

  
    return(
        <>
            <div className={stateScrollHook > 50 ? "blockArea active" : "blockArea"}>
                
                <h5><strong>Örnek 4:Custom Hook Kullanarak Scroll olunca 'active' classı eklenmesi</strong></h5>
                <p>Sayfa scroll yüksekliği: <strong>{`${stateScrollHook.toFixed(0)}px`}</strong></p>
            </div>
        </>
    )
}
export default CustomHooksExs4