import './Login.css'

const Login = () => {
    return(
        <div className='login-wrapper'>
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" name="username" id="username"/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" id="password"/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;