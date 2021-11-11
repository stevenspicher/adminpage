import { useState} from 'react'
import {Card, Button, CardGroup, Container, Col, Row} from 'react-bootstrap';
import content from './components/content'; //all the information we had to create

import Admin from './components/admin'






function App() {
  
  //for the modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  
  //library starts out with the info from the jsx file we imported
  //'library' is a category all the elements of the array in content can fit in, but it could be anything. //'recipes', 'blogs', 'teams', you name it. 
 //'blogs' is probably a good choice. 

  const [library, setLibrary] = useState(content) 
 
const LibraryContent = () => {
  //console.log(library)
  return (
    <Container>
    <CardGroup>
    
    {library.map((info, i) => (
         <Card style={{ width: '18rem', height: '12rem' }}>
        
         <Card.Body className="bg-light">
           <Card.Title>{info.title}</Card.Title>
           <Card.Text>
              {info.description}
           </Card.Text>
           <Row>
           <Col xs={4}>
           <Card.Img variant="top" src={info.authorImage} width="75" height="50" />
           </Col>
           <Col>
           <Card.Text>
              {info.author}
           </Card.Text>
           </Col>
           </Row>
         
           
         </Card.Body>
       </Card>
    ))}

    </CardGroup>
    </Container>
  )
}
  return (
  <>
  <Button variant="secondary" onClick={handleShow}>Admin</Button>
  {/* sending a ton of stuff, simplify? */}
  <Admin updateContent={setLibrary} library={library} setShow={setShow} show={show} content={content}/>
    <LibraryContent />
  
    
  </>
  )
}

export default App;
