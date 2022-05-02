import SwapiApi from "../services/SWAPI"
import { useState, useEffect } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Films = () => {
    const [films, setFilms] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    //  Get the films from the API
    const getFilms = async () => {
        setLoading(true)
        try{
        const data = await SwapiApi.getFilms()
        setFilms(data)
        setLoading(false)
        }catch(err){
            setError(err.message)
        }
        
    }

       // Get films from API when component is first mounted
	useEffect(() => {
		getFilms()
	}, [])

    return (
        <>

        <h2>All films</h2>
        {error && {error}}

        {loading && !films && (
            <h1 className="text-center mt-5">Loading...</h1>
        )}

        

        <Row xs={1} md={2} lg={3}>

        {films && films.results.map((film) => (
            <Col>
                <div className="card"> 
                    <div className="cardHeader">
                        <h3>{film.title}</h3>
                    </div>

                    <div className="cardBody">
                        <ul>
                            <li>
                                Episode {film.episode_id}
                            </li>
                            <li>
                                Released {film.release_date}
                            </li>
                            <li>
                                {film.characters.length} characters
                            </li>
                        </ul>
                    </div>
                    <div className='buttonWrapper'>
                        <Button className="btn" variant="danger" as={Link} to={`/films/${film.episode_id}`}>Read more</Button>
                    </div>
                </div>
            </Col>
        ))}

        </Row>
    </>
    )
}


export default Films