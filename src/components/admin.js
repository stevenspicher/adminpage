import{ Form, Modal } from 'react-bootstrap'
import { useState, useEffect} from 'react'

//updateContent is the now the name of the function that updates library, library is still the list plus (eventually) any additions, setShow(function) and show(boolean) are for the modal. content gives us access to the jsx file in order to reset the site to original conditions.
const Admin = ({updateContent, library, setShow, show, content}) => {

//we use this to keep track of the form input, see handleSubmit
  const [response, setResponse] = useState({});
 

//STEP 2 - after the list is loading in the browser-  

//set updated library to what is in local storage
  useEffect(() => {
    let library = JSON.parse(localStorage.getItem("library"));
    library ? updateContent(library) : localStorage.setItem("library", JSON.stringify(library))
  }, [updateContent])

//puts whatever is in library into local storage
  useEffect(() => {
   localStorage.setItem("library", JSON.stringify(library))  
  }, [library])
  
  const updateField = (e) => {
      setResponse({
          ...response,
          [e.target.name]: e.target.value
      })
  }

// reset the site to original content - not working 

  const handleClose = () => setShow(false);
  const resetSite = () => {
    console.log(content)
    updateContent(content);
  }


//send updated library content back to app.js

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose()
        let updateArr =[
            {...response}, 
            ...library];
         updateContent(updateArr)   //this is to fix adding an empty {} to updateArr on submit
    }



    return (


      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
        <Form onSubmit={handleSubmit} >
       <Form.Control size="lg" type="text" placeholder="Title" name="title" onChange={updateField}/>
       <Form.Control type="text" placeholder="Author" name="author" onChange={updateField}/>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" placeholder="description" name="description" rows={3} onChange={updateField}/>
        </Form.Group>
        <button>Submit</button>
        <button onClick={resetSite}>Reset Site</button>
      </Form>
      <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    )
}

export default Admin

