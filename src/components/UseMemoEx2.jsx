import { useEffect, useMemo, useState } from "react"
import { Form, ListGroup } from "react-bootstrap"

const UseMemoExs2 = () => {

    const [personInfos, setPersonInfos] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const fetchPersonData = async () => {
        try {
            const personDatas = await fetch('https://randomuser.me/api/?results=20')
            const personJsonDatas = await personDatas.json()
            setPersonInfos(personJsonDatas.results)


        } catch (error) {
            console.error('veri çekilemedi')
        }
    }


    useEffect(() => {
        fetchPersonData()
    }, [])

    const searchFunct = (e) => {
        setSearchTerm(e.target.value)
    }

    const filteredPersons = useMemo(() => {
        console.log("Filtreleme çalıştı") // sadece searchTerm değişince çalışır
        return personInfos.filter(person => person.name.first.toLowerCase().includes(searchTerm.toLowerCase())) //cinsiyete göre filtreleme
    }, [personInfos, searchTerm]) // Kişi listesi yada arama değişirse yeniden hesaplar


    return (
        <>
            <div className="blockArea">
                <h5><strong>Örnek 2</strong></h5>
                <div className="py-3">
                    <h3>Kişi Listesi</h3>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Lütfen Kişi Arayınız" value={searchTerm} onChange={searchFunct} />
                    </Form.Group>
                </div>
                {
                    filteredPersons.length === 0 ? (
                        <p><strong>Kişi Bulunamadı</strong></p>
                    ) : (
                        <ListGroup className="p-0">
                            {filteredPersons.map((person) => (

                                <ListGroup.Item className="mb-2" key={person.id.value || person.login.uuid}>  {person.name.title} {person.name.first} {person.name.last}</ListGroup.Item>

                            ))}
                        </ListGroup>
                    )
                }
            </div>

        </>
    )
}

export default UseMemoExs2