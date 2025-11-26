import "../../styles/SigninStyle.css"
export function SigninPage(){

    return (
        <div className="auth-container">
            <div className="signin-container">
                <div className="signin-header">
                    <p className="signin-icon">🔒</p>
                    <h2>Welcome back</h2>
                    <p style={{color: "Gray"}}>Sign in to your account</p>
                </div>

                <div className="inputs-container">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />


                        <div className="auth-options">
                            <div className="remember-me">
                                <input type="checkbox"/>
                                <p>Remember me</p>
                            </div>
                            <p style={{color: "#072bf5ff", cursor: "pointer"}}>Forget password?</p>
                        </div>
                    </div>
                </div>



            <div className="buttons-container">
                <button className="signin-button">Sign in</button>
                <div className="divider">
                    <span>or</span>
                </div>
                <button className="signup-button">Register</button>
            </div>

            </div>
        </div>
    )
}