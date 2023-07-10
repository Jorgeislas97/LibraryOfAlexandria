import { useEffect, useState } from 'react'
import { GetPosts } from '../services/PostServices'
// Step 3.4 -- IMPORT useNavigate
import { useNavigate } from 'react-router-dom'

// Step 3.2 -- DESTRUCTURE User into Feed
const Feed = ({ user }) => {
  // Step 3.5 -- Declare NAVIGATE to useNavigate
  let navigate = useNavigate()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const handlePosts = async () => {
      const data = await GetPosts()
      setPosts(data)
    }
    handlePosts()
  }, [])

  return user ? (
    <div className="grid col-4">
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <h3>{post.title}</h3>
          <div>
            <img src={post.image} alt="post" />
          </div>
          {post.body.length >= 100 ? (
            <p>{post.body.substring(0, 100)}...</p>
          ) : (
            <p>{post.body}</p>
          )}
        </div>
      ))}
    </div>
  ) : (
    // Step 3.6 Add HTML to Ternary to PROTECT ROUTE
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default Feed