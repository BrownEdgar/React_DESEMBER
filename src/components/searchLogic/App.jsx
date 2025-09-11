import { useState, useEffect, useTransition } from 'react';



function Comment({ comment }) {
  return (
    <div>
      <span>{comment.id}</span>
      <h2>{comment.name}</h2>
      <p>{comment.body}</p>
      <p className="email">
        {comment.email}
      </p>
    </div>
  )
}


function Home() {
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState('')
  const [loading, startTransition] = useTransition();
  const [timeOutId, setTimeOutId] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(res => setComments(res))
  }, [])

  const handleSearch = (e) => {
    if (timeOutId) {
      clearTimeout(timeOutId)
    }
    const id = setTimeout(() => {
      console.log('handleSearch')
      startTransition(() => setValue(() => e.target.value))
    }, 300)
    setTimeOutId(id)
  }
  console.log('ok');

  const filteredComments = value.trim() === '' ? comments : comments.filter(comment => comment.name.includes(value.trim()))

  return (
    <div>
      <h1>Use Transition</h1>
      <form>
        <input type="text" onChange={handleSearch} />
      </form>
      <div className="comments">
        {
          loading
            ? <h2>Loading...</h2>
            : (
              <>
                {filteredComments.map(comment => <Comment comment={comment} key={comment.id} />)}
              </>
            )
        }
      </div>
    </div>
  )
}

export default Home