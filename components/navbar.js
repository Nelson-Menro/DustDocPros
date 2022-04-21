import Link from "next/link";
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img src="/DustDocProImages/logo.jpg" alt="DustDoc Pro" width="80" height="80"></img>
        </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/work">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="d-flex">
      <button className="btn btn-outline-success" type="submit">Call Now!</button>
    </div>
            
          </div>
        </div>
      </nav>
    )
}
