import content from './components/content' //all the information we had to create
import { useState} from 'react'
import Admin from './components/admin'
import {Alert, Container, Button, Row , Col} from 'react-bootstrap'

function App() {
  
  //for the modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  
  //library starts out with the info from the jsx file we imported
  //'library' is a category all the elements of the array in content can fit in, but it could be anything. //'recipes', 'blogs', 'teams', you name it. 
 //'blogs' is probably a good choice. 

  const [library, setLibrary] = useState(content)   
  
  return (
  <>
    <Button side="sm" variant="outline-dark" onClick={handleShow}>Admin</Button>
    {/* sending a ton of stuff, can I simplify? */}
    <Admin updateContent={setLibrary} library={library} setShow={setShow} show={show} content={content}/>
    <Container>
      <h1>library</h1>
      {library.map((info, i) => (
        
        <Alert variant="dark" key={i}>
          <Row>
            <Col>{info.title}</Col>
            <Col >{info.author}</Col> 
            <Col >{info.description}</Col> 
          </Row>
        </Alert>
      ))}
    </Container> 
  </>
  )
}

export default App;
