import { useMemo, useState } from "react"
import { Button } from "react-bootstrap"

const UseMemoExs1 = ()=>{

    const [number,setNumber] = useState(0)

    const handleNumberIncrease = ()=>{
        setNumber(prevState => prevState + 5)
    }

    const hesaplamaYap = ()=>  {
        console.log('Hesaplama Yap fonksiyonu çalışacak')
        return 65738
    }

    const deger = useMemo(()=>hesaplamaYap(),[])

    return(
        <>

           <div className="blockArea mb-4">
                <h5><strong>Örnek 1</strong></h5>
                <p>{deger}</p>
                <Button variant="success" onClick={handleNumberIncrease}>Artır {number}</Button>
            </div>       
        
        </>
    )
}

export default UseMemoExs1