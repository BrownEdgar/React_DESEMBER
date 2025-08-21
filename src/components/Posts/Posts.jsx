import { useEffect, useState } from 'react';
import "./Posts.scss";

function Posts() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    // 1
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=14')
      const data = await response.json()
      setPosts(data)
    }
    fetchData()
  }, [])


  return (
    <div className='Posts'>
      <pre>{JSON.stringify(posts, null, 3)}</pre>
    </div>
  );
}

export default Posts;
