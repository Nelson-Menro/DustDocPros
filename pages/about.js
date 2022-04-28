import Head from "next/head";
import Layout from "../components/layouts";
import Fade from "react-reveal/Fade";

export default function About() {
  const imageStyle = {
    width: "29%",
  };
  return (
    <>
      <div className="container">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Dust Doc Pro </h2>
            <p className="lead">
              Dust Doc Pro<sup>®</sup> is so much more than just a home cleaning
              service. We are a company dedicated to giving our customers back
              the time they deserve to enjoy the things they love. We put The
              Extra In Your Ordinary
              <sup>®</sup>, restoring balance to your life by taking care of
              your home.
            </p>
          </div>
          <div className="col-md-5">
            <img
              style={{ width: "90%" }}
              src="/DustDocProImages/logo.jpg"
            ></img>
          </div>
        </div>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <hr
          className="featurette-divider"
          style={{ color: "black", width: "90%" }}
        />
        <section id="team" className="team_member section-padding">
          {/* <div className="container">
            <Fade bottom>
              <div className="section-title text-center">
                <h1>Meet our team</h1>
                <p>
                  Our team of experts that will help you with any cleaning
                  services needed!
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="row text-center">
                <div
                  className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.1s"
                  data-wow-offset="0"
                >
                  <div className="our-team">
                    <div className="team_img">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="team-image"
                      />
                      <ul className="social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <h3 className="title">Steven Medrano</h3>
                      <span className="post">CEO & Founder</span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  data-wow-offset="0"
                >
                  <div className="our-team">
                    <div className="team_img">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        alt="team-image"
                      />
                      <ul className="social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <h3 className="title">Rachel Park</h3>
                      <span className="post">Associate</span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                  data-wow-offset="0"
                >
                  <div className="our-team">
                    <div className="team_img">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt="team-image"
                      />
                      <ul className="social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <h3 className="title">Dan Billson</h3>
                      <span className="post">Associate</span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                  data-wow-offset="0"
                >
                  <div className="our-team">
                    <div className="team_img">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        alt="team-image"
                      />
                      <ul className="social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <h3 className="title">Gina Mellow</h3>
                      <span className="post">Co-founder</span>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div> */}
          <Fade bottom>
            <div className="section-title text-center">
              <h1>Meet our team</h1>
              <p>
                Our team of experts that will help you with any cleaning
                services needed!
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="row">
              <div className=" col-lg-6">
                <div className="card">
                  <div className="row g-0">
                    <div className="col-sm-5" style={{ background: "#868e96" }}>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        className="card-img-top h-100"
                        alt="..."
                      />
                    </div>
                    <div className="col-sm-7">
                      <div className="card-body">
                        <h5 className="card-title">Steven Medrano</h5>
                        <p className="card-text">
                          Steven Medrano is the CEO and founder of Dust Doc Pro based
                          in Maryland. He is a hard working Professional that specializes
                          in Deep cleaning, COVID 19 dis-infection and many cleaning protocols.
                          He cares deeply about the health and safety of his staff and others.
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-6">
                <div className="card">
                  <div className="row g-0">
                    <div className="col-sm-5" style={{ background: "#868e96" }}>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        className="card-img-top h-100"
                        alt="..."
                      />
                    </div>
                    <div className="col-sm-7">
                      <div className="card-body">
                        <h5 className="card-title">Andrea Padilla</h5>
                        <p className="card-text">
                          Andrea Padilla is the Co-founder of Dust Doc Pro based
                          in Maryland. He is a hard working Professional that specializes
                          in Deep cleaning, COVID 19 dis-infection and many cleaning protocols.
                          He cares deeply about the health and safety of his staff and others.
                        </p>
                        {/* <a href="#" className="btn btn-primary stretched-link">
                          View Profile
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </section>
      </div>
    </>
  );
}
About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
