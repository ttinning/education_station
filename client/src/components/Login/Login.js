import { useState } from 'react'
import PropTypes from 'prop-types'

import './Login.css'

async function loginUser(credentials) {
    return fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}
const Login = ({ setToken }) => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('') 

    const handleSubmit = async event => {
        event.preventDefault()
        const token = await loginUser({
            username,
            password
        })
        setToken(token)
        window.location.reload(false)
    }

    return(
        <div className='login-wrapper'>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit} id='login-submit'>
                <label>
                    <p>Username</p>
                    <input type="text" name="username" id="username" onChange={event => setUserName(event.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" id="password" onChange={ event => setPassword(event.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;