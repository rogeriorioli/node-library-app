import {useState, useEffect} from 'react'
import {Row, Col, Card , CardBody, CardImg, ListGroup, ListGroupItem} from 'reactstrap'
import Layouts from '../Layouts'
import api from '../services/api'
import { string } from 'prop-types'
import Cards from '../Components/Cards'

function Home(history) {

  const [books , setBooks] = useState([]);

  useEffect(() => {
    api.get('/books').then(response => {
      setBooks(response.data)

    },[books])
  },)


  return(
    <Layouts>
      <Row className="align-items-center">
      {books.map((item , i)=> 
         <Cards key={item._id} 
                title={item.title} 
                thumbnail={item.thumbnail} 
                author={item.author[i]} 
                publishedDate={item.publishedDate}/>
        )}
      </Row>
    </Layouts>
  ) 
}
Home.propTypes = {
  title: string,
  author : [string],
  description: string,
  thumbnail :  string,
  publishedDate : string
}

export default Home