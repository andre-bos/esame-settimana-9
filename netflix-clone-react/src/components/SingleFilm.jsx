import React from 'react'
import { Col } from 'react-bootstrap'

export default function SingleFilm({film}) {
  return (
    <Col className='mb-2 px-1'>
        <img className='img-fluid img-size' src={film.Poster} alt={film.Title} />
    </Col>
  )
}
