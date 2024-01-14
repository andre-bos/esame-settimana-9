import React from 'react';
import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import { endPoint } from '../data/ApiData';

export default class TrendingComp extends Component {

  state = {
    filmPosters: [],
    filmTitles: []
  }

  componentDidMount() {
    fetch(endPoint)
    .then(response => response.json())
    .then((oggettoFilm) => this.setState({ 
      filmPosters: oggettoFilm.Search.map((f) => f.Poster),
      filmTitles: oggettoFilm.Search.map((f) => f.Title)
    }))
    .catch(err => console.log(err))
  }
  
  render() {
    console.log(this)
    return (
      <div>
        <h4 className='px-4 text-white'>Trending Now</h4>
        <Container fluid className="mb-4 no-gutters text-center px-5">
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">

            {this.state.filmPosters.map(f =>
              <Col className="mb-2 px-1">
              <img className="img-fluid" src={f} alt="movie picture" />
            </Col>
            )}
            {/* */}
            
          </Row>
        </Container>
      </div>
    );
  }
}

/* const TrendingComp = () => {
  return (
    <div>
      <h4 className='px-4 text-white'>Trending Now</h4>
      <Container fluid className="mb-4 no-gutters text-center px-5">
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img1} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img2} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img3} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img4} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img5} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img6} alt="movie picture" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TrendingComp; */