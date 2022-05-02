import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SwapiApi from '../services/SWAPI'
import { getIdFromUrl } from '../helper/index'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Film = () => {
    const [film, setFilm] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("false")
    const { id } = useParams()
    const [people, setPeople] = useState([])

    // Get film from Api
    const getFilm = async (id) => {
        setLoading(true)
        try{
            const data = await SwapiApi.getFilm(id)
            setFilm(data)
            setPeople(data.characters)
            console.log(data)
        }catch(err){
            setError(err.message)
        }
    }

    // Get film from Api when component is first mounted
    useEffect(() => {

        getFilm(id)
      }, [id])

      return (
          
        <>

        {error && {
            error
        }}

        {loading && !film && (
            <h1 className="text-center mt-5">Loading...</h1>
        )}

        <Row>
            <Col>
                <div className="card">
                    <div className="cardHeader"><h2>{film.title}</h2></div>
                    <div className="cardBody">
                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Episode</p>
							</Col>
							<Col className="cardColRight">
								<p>{film.episode_id}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Director</p>
							</Col>
							<Col className="cardColRight">
								<p>{film.director}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Producer</p>
							</Col>
							<Col className="cardColRight">
								<p>{film.producer}</p>
							</Col>
						</Row>

                        <Row className="cardRow"  md={3}>
                            <Col className="cardColLeft">
								<p>Release date</p>
							</Col>
							<Col className="cardColRight">
								<p>{film.release_date}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={1}>
                            <Col>
                                <h2>Characters in this film:</h2>
                            </Col>
                        </Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
                                
                            </Col>

                            <Col className="cardColRight">
                                {people.map(character => (
                                    <Link to={`/people/${getIdFromUrl(character)}`} key={character}>
                                        <li>Character {getIdFromUrl(character)}</li>
                                    </Link>
                                ))} 
                            </Col>
                        </Row>
                    </div>
                        
                    <div className='buttonWrapper'>
                        <Button className="btn" variant="danger" as={Link} to={'/films'}>Back</Button>
                    </div>
                </div>
            </Col>
        </Row>  
    </>
      )
}

export default Film