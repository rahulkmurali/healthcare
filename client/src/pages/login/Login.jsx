import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/AuthSlice';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   body: JSON.stringify({ email, password }),
      //   headers: { 'Content-Type': 'application/json' }
      // });

      // if (!response.ok) throw new Error('Login failed');

      // const data = response.json();
      const data = {
        user: {
          email: email
        },
        token: 'sADSASFDSVDFBDFBGFNGDN'
      }
      dispatch(login({ user: data.user, token: data.token }));
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <section className="login-bg d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6  offset-md-3">
            <div className="card">
              <div className="card-body px-md-5 py-4">
                <div className="col text-center">
                  <img src="images/logo.png" className="logo text-center" alt="Logo" />
                </div>
                <div className="mb-3">
                  <label for="emailFormControlInput" className="form-label">Email</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="emailFormControlInput" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label for="passwordFormControlInput" className="form-label">Password</label>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="passwordFormControlInput" placeholder="password" />
                </div>
                <div className="col-12 text-center pt-3">
                  <button type="button" onClick={handleLogin} className="btn btn-primary"> Login </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
