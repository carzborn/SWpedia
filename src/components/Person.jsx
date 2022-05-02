import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SwapiApi from '../services/SWAPI'
import { getIdFromUrl } from "../helper/index"
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Person = () => {
    const [person, setPerson] = useState("")
    const [films, setFilms] = useState([])
    const {id} = useParams()

    const getPerson = async (id) => {
        const data = await SwapiApi.getPerson(id)
        setPerson(data)
        setFilms(data.films)
        console.log(data)
    }

    useEffect(() => {
        getPerson(id)
      }, [id])

      return(
        <>
        <Row>
            <Col>
                <div className="card">
                    <div className="cardHeader"><h2>{person.name}</h2></div>
                    <div className="cardBody">
                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Gender</p>
							</Col>
							<Col className="cardColRight">
								<p>{person.gender}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Birth Year</p>
							</Col>
							<Col className="cardColRight">
								<p>{person.birth_year}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Height</p>
							</Col>
							<Col className="cardColRight">
								<p>{person.height} cm</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Weight</p>
							</Col>
							<Col className="cardColRight">
								<p>{person.mass} kg</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Hair color</p>
							</Col>
							<Col className="cardColRight">
								<p>{person.hair_color}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Skin color</p>
							</Col>
							<Col className="cardColRight">
								<p>{person.skin_color}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Eye color</p>
							</Col>
							<Col className="cardColRight">
								<p>{person.eye_color}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={1}>
                            <Col>
                                <h2>Films:</h2>
                            </Col>
                        </Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
                            </Col>

                            <Col className="cardColRight">
                                {films.map(films => (
                                    <Link   
                                        to={`/films/${getIdFromUrl(films)}`} 
                                        key={getIdFromUrl(films)}>
                                        <li>Film {getIdFromUrl(films)}</li>
                                    </Link>
                                ))} 
                            </Col>
                        </Row>
                    </div>
                        
                    <div className='buttonWrapper'>
                        <Button className="btn" variant="danger" as={Link} to={'/people'}>Back</Button>
                    </div>
                </div>
            </Col>
        </Row>  
    </>
      )
}

export default Person