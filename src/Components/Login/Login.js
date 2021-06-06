import React from 'react'
import GoogleLogo from '../../Assets/GoogleLogo';
import './Login.css';

function Login() {
    return (
      <div>
        <div className="loginMainDiv">
          <span>
            <h2 className="loginh2">&#x1F860; Login</h2>
          </span>
          <form className="form">
            
              <label className="label" htmlFor="fname">
                Email/Phone Number
              </label>
              <br />
              <input
                className="input"
                type="email/number"
                id="fname"
                name="email"
                defaultValue=""
              />
              <br />
            <div className="types">
              <label className="label" htmlFor="">
                Password
              </label>
              <br />
              <input
                className="input"
                type="password"
                id="fname"
                name="password"
                defaultValue=""
              />
            </div>
            <a className='Forgot' href="">Forgot Password</a>
            <br />
            <br />
            <span className='loginButton'>
                <button>Login</button>
            </span>
            <h6 className='orh6'>or</h6>
            <div className="google">
              <GoogleLogo></GoogleLogo>
            </div>
            <div className="facebook">
              <img className='fb' src="https://img-premium.flaticon.com/png/512/179/179319.png?token=exp=1622973589~hmac=20a552ddc7d0674fa39484b7d7c4883f" alt="" />
            </div>
            <div className="creatAccount">
              <h6 className='q'>Don't have an account</h6>
              <a className='new' href="">Create New Account</a>
            </div>
            
          </form>

          
        </div>
      </div>
    );
}

export default Login
