import PropTypes from 'prop-types'; // ES6
import { FaRegBookmark} from 'react-icons/fa';
// step6:handleAddToBookmark
const Blog = ({blog , handleAddToBookmark}) => {
    // console.log(blog);
    const {title,cover,author,author_img,posted_date, reading_time, hashtags}= blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>

        <div className='flex mb-8'>
        <img className='w-14' src={author_img} alt="" />
        <div className='ml-6'>

            <h3 className='text-2xl'>{author}</h3>
            <p>{posted_date}</p>
        </div>
        </div>
<div>

<span>{reading_time} min read</span>
{/* step7:onclick button */}
<button
onClick={handleAddToBookmark}
 className='ml-2 text-red-600 text-2xl'><FaRegBookmark></FaRegBookmark></button>
</div>

            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;