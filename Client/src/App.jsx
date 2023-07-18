import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Register from './pages/Register'
import Home from './pages/Home'
import './App.css'
import SignIn from './pages/Signin'
import Feed from './pages/Feed'
import MyLibrary from './pages/Library'
import Review from './pages/Review'
import ReviewForm from './components/ReviewForm'




// Step 4.1 -- import CheckSession
import { CheckSession } from './services/Auth'

const App = () => {
  const [user, setUser] = useState(null)

  // Step 4.2 declare FUNCTION to CHECK the TOKEN
  const checkToken = async () => {
    // Step 4.3 -- declare USER
    const user = await CheckSession()
    // Step 4.4 -- INVOKE setUser
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  return (
    <div className="App">
      <Nav
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Part 2.1 -- add setuser to SIGN IN */}
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          {/* Part 3.1 -- pass USER down as a PROP */}
          <Route path="/register" element={<Register user={user}/>} />
          <Route path="/feed" element={<Feed user={user}/>} />
          {/* Adding a route for the library page */}
          <Route path="/library" element={<MyLibrary user={user}/>} />
          <Route path="/Review" element={<Review user={user}/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
