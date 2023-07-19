import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome {user.user}!</h3>
        <Link to="/feed">Feed</Link>
        <Link to="/library">Library</Link>
        
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
    
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://i.imgur.com/KfuGZo7.png"
            alt="welcome banner"
          />
          
        </div>
      </Link>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav