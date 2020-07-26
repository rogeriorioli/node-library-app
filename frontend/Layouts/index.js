import React from 'react';
import Header from '../Components/Header'
import { Container } from 'reactstrap';

function Layouts({children}) {
  return (
      <>
      <Header/>
        <Container>
            {children}
        </Container>
      </>
  );
}



export default Layouts;