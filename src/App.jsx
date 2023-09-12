
import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  // step1:
const [bookmarks, setbookmarks] =useState([]); 
//step2:
 const handleAddToBookmark = blog =>{
  // console.log(blog)
  // new add korar jonno
  const newBookmarks = [...bookmarks, blog];
  setbookmarks(newBookmarks)
 }

  return (
    <>
      
     <Header></Header>
     <div className='md:flex max-w-3xl mx-auto'>
      {/* step3: handleAddToBookmark={handleAddToBookmark} */}
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>

      {/*  */}
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
      
    </>
  )
}

export default App
