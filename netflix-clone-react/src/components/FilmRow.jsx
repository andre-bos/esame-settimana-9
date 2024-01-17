import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const baseEndpoint = 'http://www.omdbapi.com/?apikey=2a543a16&s=';

class FilmRow extends Component {
  state = {
    datiFilm: []
  };

  componentDidMount() {
    const fullEndpoint = `${baseEndpoint}${this.props.search}`;
    
    fetch(fullEndpoint)
      .then(response => response.json())
      .then(oggettoFilm =>
        this.setState({
          datiFilm: oggettoFilm.Search
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h4 className='px-4 text-white'>{this.props.titolo}</h4>
        <Container fluid className='mb-4 no-gutters text-center px-5'>
          <Row className='row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6'>
            {this.state.datiFilm.map(f => (
              <Col className='mb-2 px-1' key={f.imdbID}>
                <img className='img-fluid img-size' src={f.Poster} alt={f.Title} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default FilmRow;
