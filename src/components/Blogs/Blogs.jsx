import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

// step4:handleAddToBookmark
const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setblogs]= useState([]);

    useEffect(()=>{

        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setblogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>

            {


// step5:handleAddToBookmark={handleAddToBookmark}
                blogs.map(blog =>  <Blog 
                    key={blog.id} 
                    blog={blog}
                
                
                handleAddToBookmark={handleAddToBookmark}
                >

                    
                </Blog>)



            }
        </div>
    );
};

export default Blogs;