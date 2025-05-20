function Login() {

  return (
    <section className="login-bg d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6  offset-md-3">
            <div className="card">
              <div className="card-body px-md-5 py-4">
                <div className="col text-center">
                  <img src="images/logo.png" className="logo text-center" alt=""/>
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">User Name</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password"/>
                </div>
                <div className="col-12 text-center pt-3">
                  <button type="submit" className="btn btn-primary"> Login </button>
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
