import axios from 'axios';
import { User, Eye, CalendarDays } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import type { IPost } from '../../types/types';
import './Post.css'

function Post() {
  const { id } = useParams()
  const [post, setPost] = useState<IPost | null>();

  const viewAddapter = (n: number) => {
    if (n > 1000) {
      return `${(n / 1000).toFixed(1)}k`
    }
    return n
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`)
      .then(res => setPost(res.data))
  }, [id]);


  return (
    <div>
      <h1>POSTS N {id}</h1>
      <Link to="/posts" className='button'>Back</Link>
      <hr />
      <div className='Post'>
        <img src={`${post?.image}`} />
        <div>
          <h2>{post?.title}</h2>
          <p>{post?.description}</p>
          <hr />
          <ul>
            <li><User absoluteStrokeWidth size={20} /> {post?.author}</li>
            <li>
              <Eye absoluteStrokeWidth size={20} />
              {post?.views && viewAddapter(post.views)}
            </li>
            <li>
              <CalendarDays absoluteStrokeWidth size={20} />
              {post?.date}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Post;
