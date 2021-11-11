import{ Form, Modal } from 'react-bootstrap'
import { useState, useEffect} from 'react'

//updateBlog is the function that sets blog data,blogData is the list plus (eventually) any additions, setShow(function) and show(boolean) are for the modal
const Admin = ({updateBlog, blogData, setShow, show, content}) => {

//we use this to keep track of the form input, see handleSubmit
  const [data, setData] = useState({});
 

//STEP 2 - after the list is loading in the browser-  

//set updated blogData to what is in local storage
  useEffect(() => {
    let blogData = JSON.parse(localStorage.getItem("blogData"));
    blogData ? updateBlog(blogData) : localStorage.setItem("blogData", JSON.stringify(blogData))
  }, [updateBlog])

//puts whatever is in blogData into local storage
  useEffect(() => {
   localStorage.setItem("blogData", JSON.stringify(blogData))  
  }, [blogData])
  
  const updateField = (e) => {
      setData({
          ...data,
          [e.target.name]: e.target.value
      })
  }

//reset the site to original content - not working
  const handleClose = () => setShow(false);
  const resetSite = () => {
    console.log(content)
    updateBlog(content);
  }


//send updated blog content back to app.js
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose()
        let updateArr =[
            {...data}, 
            ...blogData];


//this is to fix adding an empty {} to updateArr on submit
        
         updateBlog(updateArr) 
          
       
    }

//form for blog content updates
    return (

//this is the additional code for the modal
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
        <Form onSubmit={handleSubmit} >
       <Form.Control size="lg" type="text" placeholder="Title" name="title" onChange={updateField}/>
       <Form.Control type="text" placeholder="Author" name="author" onChange={updateField}/>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" name="content" rows={3} onChange={updateField}/>
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

