import { Link } from "react-router-dom"

export default function Navbar(props) {




  return (
    <div >
      <nav className={`navbar navbar-expand-lg bg-${props.theme === 'dark' ? 'light' : 'dark'} text-${props.theme === 'dark' ? 'dark' : 'light'}}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.theme === 'dark' ? 'dark' : 'light'}`} to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse  navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link active text-${props.theme === 'dark' ? 'dark' : 'light'}`} aria-current="page" to="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.theme === 'dark' ? 'dark' : 'light'}`} to="/about" >About</Link>
              </li>

            </ul>
            <form className="d-flex" role="search">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                  <button type="button" className="btn btn-secondary  mx-2" style={{backgroundColor:'#403310', border:'2px solid black' , borderRadius:'50%'}} onClick={props.colorHandler}> </button>
                  <button type="button" className="btn btn-secondary mx-2" style={{backgroundColor:'#061445', border:'2px solid black' , borderRadius:'50%'}} onClick={props.colorHandler}> </button>
                  <button type="button" className="btn btn-secondary mx-2" style={{backgroundColor:'#40103f', border:'2px solid black' , borderRadius:'50%'}} onClick={props.colorHandler}></button>
                  <button type="button" className="btn btn-secondary mx-2" style={{backgroundColor:'#66102e', border:'2px solid black' , borderRadius:'50%'}} onClick={props.colorHandler}> </button>
                </div>
              <div className="form-check form-switch">
                <input className="form-check-input mx-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handleClick} />
                <label className={`form-check-label text-${props.theme === 'dark' ? 'dark' : 'light'}`}  htmlFor="flexSwitchCheckDefault">{props.mode}</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
