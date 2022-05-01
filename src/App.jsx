import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container'
import {  Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'

//  Pages
import HomePage from './pages/homePage'
import Films from './pages/films'
import Film from './pages/film'
import People from './pages/people'
import Person from './pages/person'

const App = () => {
  return (
    <div id="App">
      <Navigation/>

      <Container>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/films" element={<Films/>}/>
              <Route path="/films/:id" element={<Film/>}/>
              <Route path="/people" element={<People/>}/>
              <Route path="/people/:id" element={<Person/>}/>
          </Routes>
      </Container>
    </div>
  )
}

export default App;
