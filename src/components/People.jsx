import Swapi from '../services/SWAPI'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap'
import { getIdFromUrl } from '../helper/index'

const People = () => {
    const [people, setPeople] = useState("")
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState("false")
    const [error, setError] = useState("")

    const getPeople = async (page) => {
        setLoading(true)
        try{
        const data = await Swapi.getPeople(page)
        setPeople(data)
        setLoading(false)
        }catch(err){
            setError(err.message)
        }
    } 

    useEffect(() => {
        getPeople(page)
    },[page])

    return(
        <>
        <h1>Characters</h1>
        <Row xs={1} md={2} lg={3}>

    {error && {error}}

    {loading && !people && (<h1>Loading ...</h1>)}

{people && people.results.map((people, index) => (
    <Col key={index}>
        <div className="card"> 
            <div className="cardHeader">
                <h3>{people.name}</h3>
            </div>

            <div className="cardBody">
                <ul>
                    <li> Gender: {people.gender}</li>
                    <li>Born: {people.birth_year}</li>
                    <li>Seen in: {people.films.length} films</li>
                </ul>
            </div>
            <div className='buttonWrapper'>
               <Button 
                    className="btn" 
                    variant="danger"
                    as={Link} 
                    to={`/people/${getIdFromUrl(people.url)}`}>
                    Read more
                </Button>
            </div>
        </div>
        
    </Col>
))}
</Row>

<div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                <div className="prev">
                    <Button
                        disabled={!people.previous || page <= 1}
                        onClick={() => setPage(prevValue => prevValue - 1)}                        
                        variant="danger"
                    >Previous Page</Button>
                </div>
                <div className="page"><h4>{page} / 9</h4> </div>
                <div className="next">
                    <Button
                        disabled={!people.next || page >= 9}
                        onClick={() => setPage(prevValue => prevValue + 1)}
                        variant="danger"
                    >Next Page</Button>
                </div>
		    </div>
</>
        
    )

}

export default People