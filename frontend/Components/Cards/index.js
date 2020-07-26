import React from 'react';
import {Col, Card , CardBody, CardImg, ListGroup, ListGroupItem} from 'reactstrap'
import { string, arrayOf } from 'prop-types'

function Cards(props) {
  return (
    <Col lg={3}>
        <Card>
            <CardBody className="text-center">
            <CardImg srcSet={props.thumbnail} loading="lazy" />
            <h2> {props.title} </h2> 
            <small>date: {props.publishedDate}</small> 
            <ListGroup>
                <ListGroupItem>
                    {props.author}
                </ListGroupItem>
            </ListGroup>
            </CardBody>
        </Card>
    </Col>
  );
}

Cards.propTypes = {
    title: string,
    author : arrayOf(string).isRequired,
    description: string,
    thumbnail :  string,
    publishedDate : string
  }
  
  export default Cards