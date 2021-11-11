import content from './components/content'
import { useState} from 'react'
import Admin from './components/admin'





function App() {
  
  //for the modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  
  //blogData starts out with the info from the jsx file we imported

  const [blogData, setBlogData] = useState(content) 
 
const BlogContent = () => {
  //console.log(blogData)
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
  {/* sending a ton of stuff, simplify? */}
  <Admin updateBlog={setBlogData} blogData={blogData} setShow={setShow} show={show} content={content}/>
    <BlogContent />
  
    
  </>
  )
}

export default App;
