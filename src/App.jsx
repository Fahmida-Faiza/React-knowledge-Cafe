
import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  // step1:
const [bookmarks, setbookmarks] =useState([]); 
const[readingTime, setReadingTime]= useState(0)

//step2:
 const handleAddToBookmark = blog =>{
  // console.log(blog)
  // new add korar jonno
  const newBookmarks = [...bookmarks, blog];
  setbookmarks(newBookmarks)
 }

 //markasread
 const handleMarkAsRead = time =>{
  // console.log( 'faiza',time)

const newReadingTime = readingTime+time;
setReadingTime(newReadingTime)

 }
  return (
    <>
      
     <Header></Header>
     <div className='md:flex max-w-3xl mx-auto'>
      {/* step3: handleAddToBookmark={handleAddToBookmark} */}
      <Blogs handleAddToBookmark={handleAddToBookmark}  handleMarkAsRead ={handleMarkAsRead }></Blogs>

      {/*  */}
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}    ></Bookmarks>
     </div>
      
    </>
  )
}

export default App
