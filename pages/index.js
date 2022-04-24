import Head from "next/head";
import Layout from "../components/layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBuilding,
  faCakeCandles,
} from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <>
      <div
        id="myCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ width: "100%" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/DustDocProImages/IMG_4583.jpeg" />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p>
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Schedule an appointment today!
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/DustDocProImages/IMG_6951.jpeg" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Second Example headline.</h1>
                <p>
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src="/DustDocProImages/bed.jpeg"
              style={{ height: "100%", width: "100%" }}
            />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Third Example headline.</h1>
                <p>
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <FontAwesomeIcon icon={faHouse} />
            </svg>

            <h2>Home</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img "
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <FontAwesomeIcon icon={faBuilding} />
            </svg>

            <h2>Office</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <FontAwesomeIcon icon={faCakeCandles} />
            </svg>

            <h2>Events</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
        </div>

        <hr
          className="featurette-divider"
          style={{ color: "black", width: "90%" }}
        />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Deep Cleaning.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src="/DustDocProImages/IMG_8546.jpg"
              style={{ width: "100%", borderRadius: "5px" }}
            />
          </div>
        </div>

        <hr
          className="featurette-divider"
          style={{ color: "black", width: "90%" }}
        />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Oh yeah, it’s that good.{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src="/DustDocProImages/IMG_0152.jpeg"
              style={{ width: "100%", borderRadius: "5px" }}
            />
          </div>
        </div>

        <hr
          className="featurette-divider"
          style={{ color: "black", width: "90%" }}
        />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              And lastly, this one.{" "}
              <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src="/DustDocProImages/IMG_8546.jpg"
              style={{ width: "100%", borderRadius: "5px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
