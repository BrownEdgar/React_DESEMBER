
import './App.css'
import { useAppDispatch } from '@/app/hooks'
import { getAsyncPosts } from './features/posts/posts.slice';
import { useEffect } from 'react';
import Posts from './components/Posts/Posts';


function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAsyncPosts())
  }, []);

  return (

    <div>
      <Posts />
    </div>
  )
}

export default App
