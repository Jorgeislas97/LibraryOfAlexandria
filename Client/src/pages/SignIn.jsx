import { useState } from 'react'
// Step 2.3 == IMPORT SignInUser
import { SignInUser } from '../services/Auth'
// Step 2.7 -- IMPORT useNavigate
import { useNavigate } from 'react-router-dom'


// Step 2.2 -- add setUser as a PROP
const SignIn = (props) => {
  // Step 2.8 -- DECLARE Navigate to useNavigate
  let navigate = useNavigate()
  
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Step 2.4 -- add PAYLOAD to SUBMIT REQUEST
    const payload = await SignInUser(formValues)
    // Step 2.5 -- RESET FORM VALUES
    setFormValues({ email: '', password: ''})
    // Step 2.6 -- UPDATE our USER STATE
    props.setUser(payload)
    // Step 2.9 -- NAVIGATE to NEW ROUTE
    navigate('/Feed')
  } 

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn