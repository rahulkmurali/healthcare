import { Link } from "react-router-dom";
import Header from "../../components/Header"
import Footer from "../../components/Footer"

function Home() {

  return (
    <>
      <Header></Header>
      <main className="home-container pt-4 pb-md-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3 mb-3">
              <div className="card py-4 px-2 text-center shadow">
                <i className="fas fa-users main-icons"></i>
                <div className="card-body py-0">
                  <h2 className="pt-2 pb-1"><Link to="/users">Staff</Link></h2>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="card py-4 px-2 text-center shadow">
                <i className="fas fa-users main-icons"></i>
                <div className="card-body py-0">
                  <h2 className="pt-2 pb-1">Patients</h2>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="card py-4 px-2 text-center shadow">
                <i className="fas fa-users main-icons"></i>
                <div className="card-body py-0">
                  <h2 className="pt-2 pb-1">Leaves</h2>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="card py-4 px-2 text-center shadow">
                <i className="fas fa-users main-icons"></i>
                <div className="card-body py-0">
                  <h2 className="pt-2 pb-1">Tasks</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Home
