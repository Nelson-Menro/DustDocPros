import Head from "next/head";
import Layout from "../components/layouts";

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
        <section id="team" class="team_member section-padding">
          <div class="container">
            <div class="section-title text-center">
              <h1>Meet our team</h1>
              <p>
                Our team of experts that will help you with any cleaning services needed!
              </p>
            </div>
            <div class="row text-center">
              <div
                class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                data-wow-offset="0"
              >
                <div class="our-team">
                  <div class="team_img">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="team-image"
                    />
                    <ul class="social">
                      <li>
                        <a href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="team-content">
                    <h3 class="title">Stephen Cronin</h3>
                    <span class="post">CEO & Co-Founder</span>
                  </div>
                </div>
              </div>
              <div
                class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-wow-offset="0"
              >
                <div class="our-team">
                  <div class="team_img">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      alt="team-image"
                    />
                    <ul class="social">
                      <li>
                        <a href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="team-content">
                    <h3 class="title">Rachel Park</h3>
                    <span class="post">Associate</span>
                  </div>
                </div>
              </div>
              <div
                class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                data-wow-offset="0"
              >
                <div class="our-team">
                  <div class="team_img">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt="team-image"
                    />
                    <ul class="social">
                      <li>
                        <a href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="team-content">
                    <h3 class="title">Dan Billson</h3>
                    <span class="post">Associate</span>
                  </div>
                </div>
              </div>
              <div
                class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                data-wow-offset="0"
              >
                <div class="our-team">
                  <div class="team_img">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt="team-image"
                    />
                    <ul class="social">
                      <li>
                        <a href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="team-content">
                    <h3 class="title">Gina Mellow</h3>
                    <span class="post">Co-founder</span>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
