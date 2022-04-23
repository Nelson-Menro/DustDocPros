import Link from "next/link";
export default function NavBar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link href="/">
          <a className="navbar-brand">
            <img
              src="/DustDocProImages/logo.jpg"
              alt="DustDoc Pro"
              width="80"
              height="80"
            ></img>
          </a>
        </Link>
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
              <Link href="/work">
                <a className="nav-link">Work</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About Us</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-success" type="submit">
              Call Now!
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
