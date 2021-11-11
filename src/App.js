import data from './components/data'
import { useState} from 'react'
import Admin from './components/admin'





function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  //initializes with saved blog from local storage as 'blogData' 
  const [blogData, setBlogData] = useState(data) 
 
const BlogContent = () => {
  console.log(blogData)
  return (
    <>
    <h1>Blog</h1>
    {blogData.map((info, i) => (
      <div key={i}>
        {info.title}
      </div>
    ))}
    </>
  )
}
  return (
  <>
  <button onClick={handleShow}>Admin</button>
  <Admin updateBlog={setBlogData} blogData={blogData} setShow={setShow} show={show}/>
    <BlogContent />
  
    
  </>
  )
}

export default App;
