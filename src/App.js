import content from './components/content' //all the information we had to create
import { useState} from 'react'
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
    <>
    <h1>library</h1>
    {library.map((info, i) => (
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
  <Admin updateContent={setLibrary} library={library} setShow={setShow} show={show} content={content}/>
    <LibraryContent />
  
    
  </>
  )
}

export default App;
