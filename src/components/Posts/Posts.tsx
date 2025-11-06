import { useAppSelector, } from '@/app/hooks'
import type { PostsState } from '../../features/posts/posts.slice';
import './Posts.css'
import { Link } from 'react-router';

function Posts() {
  const posts: PostsState = useAppSelector((state) => state.posts)
  return (
    <div className='Posts'>
      {posts.data.map(post => {
        return (

          <div className='Posts__block' key={post.id}>
            <img src={post.image} alt={post.title} />
            <div className='Posts__info'>
              <span className='Posts__category'>{post.category}</span>
              <Link to={`/posts/${post.id}`} className='Posts__Title'>{post.title}</Link>
              <ul>
                <li>{post.author}</li>
                <li>
                  <span className='circle'></span>
                </li>
                <li>{post.date}</li>
                <li>
                  <span className='circle'></span>
                </li>
                <li>{post.views}</li>
              </ul>

              <p className='Posts__description'>{post.description}</p>
            </div>
          </div>
        )

      })}
    </div>
  )
}

export default Posts;
