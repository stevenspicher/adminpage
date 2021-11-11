import{ Form, Modal } from 'react-bootstrap'
import { useState, useEffect} from 'react'

const Admin = ({updateBlog, blogData, setShow, show}) => {

  const [data, setData] = useState({});
 
  
    //set updated blogData to local storage
  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("blogdata"));
    storedData ? updateBlog(storedData) : localStorage.setItem("blogdata", JSON.stringify(blogData))
  }, [updateBlog])

  useEffect(() => {
   localStorage.setItem("blogdata", JSON.stringify(blogData))  
  }, [blogData])
  
  const updateField = (e) => {
      setData({
          ...data,
          [e.target.name]: e.target.value
      })
  }

  const handleClose = () => setShow(false);
  const resetSite = () => {
    console.log('test');
    localStorage.clear();
  }


//send updated blog content back to app.js
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose()
        let updateArr =[
            {...data}, 
            ...blogData];
        if (data.title) {
        updateBlog(updateArr) 
        }  
       
    }

//form for blog content updates
    return (

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
        <Form onSubmit={handleSubmit} onClick={resetSite}>
       <Form.Control size="lg" type="text" placeholder="Title" name="title" onChange={updateField}/>
       <Form.Control type="text" placeholder="Author" name="author" onChange={updateField}/>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" name="content" rows={3} onChange={updateField}/>
        </Form.Group>
        <button>Submit</button>
        <button>Reset Site</button>
      </Form>
      <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    )
}

export default Admin

