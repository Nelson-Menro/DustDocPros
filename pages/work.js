import Head from "next/head";
import Layout from "../components/layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
export default function Work() {
  return (
    <>
      <div className="container">
        <div className="row featurette" style={{ alignItems: "center" }}>
          <div className="col-md-7">
            <Pulse>
              <h2 className="featurette-heading">
                Dust Doc Pro <span className="text-muted">in action.</span>
              </h2>
            </Pulse>
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
              src="/DustDocProImages/cleaningStove.gif"
              style={{ borderRadius: "5px", width: "75%" }}
            />
          </div>
        </div>
        <hr
          className="featurette-divider"
          style={{ color: "black", width: "90%" }}
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        />
        <div className="container bootstrap snippets bootdey">
          <section id="services" className="current">
            <div className="services-top">
              <Fade bottom>
                <div
                  className="container bootstrap snippets bootdey"
                  style={{ justifyContent: "flex-start" }}
                >
                  <div className="row text-center">
                    <div className="col-sm-12 col-md-12 col-md-12" id="servicesDiv">
                      <h2>What We Offer</h2>
                      <h2
                        style={{
                          fontSize: "60px",
                          lineHeight: "60px",
                          marginBottom: "20px",
                          fontWeight: "900",
                        }}
                      >
                        Our Services
                      </h2>
                      <p>
                        Our <span className="highlight">experienced</span> and{" "}
                        <span className="highlight">dedicated</span> staff
                        provide these services with a smile.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-offset-1 col-sm-12 col-md-12 col-md-10">
                      <div className="services-list">
                        <div className="row">
                          <div className="col-sm-6 col-md-4 col-md-4">
                            <div
                              className="service-block"
                              style={{ visibility: "visible" }}
                            >
                              <div className="ico fa fa-magic highlight"></div>
                              <div className="text-block">
                                <div className="name">Example text</div>
                                <div className="info">Example text</div>
                                <div className="text">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque habitant morbi
                                  tristique senectus et netus et malesuada fames{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4 col-md-4">
                            <div
                              className="service-block"
                              style={{ visibility: "visible" }}
                            >
                              <div className="ico fa fa-code highlight"></div>
                              <div className="text-block">
                                <div className="name">Example text</div>
                                <div className="info">Example text</div>
                                <div className="text">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque habitant morbi
                                  tristique senectus et netus et malesuada fames{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4 col-md-4">
                            <div
                              className="service-block"
                              style={{ visibility: "visible" }}
                            >
                              <div className="ico fa fa-pencil highlight"></div>
                              <div className="text-block">
                                <div className="name">Example text</div>
                                <div className="info">Example text</div>
                                <div className="text">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque habitant morbi
                                  tristique senectus et netus et malesuada fames{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4 col-md-4">
                            <div
                              className="service-block"
                              style={{ visibility: "visible" }}
                            >
                              <div className="ico fa fa-bullhorn highlight"></div>
                              <div className="text-block">
                                <div className="name">Example text</div>
                                <div className="info">Example text</div>
                                <div className="text">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque habitant morbi
                                  tristique senectus et netus et malesuada fames{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4 col-md-4">
                            <div
                              className="service-block"
                              style={{ visibility: "visible" }}
                            >
                              <div className="ico fa fa-eye highlight"></div>
                              <div className="text-block">
                                <div className="name">Example text</div>
                                <div className="info">Example text</div>
                                <div className="text">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque habitant morbi
                                  tristique senectus et netus et malesuada fames{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4 col-md-4">
                            <div
                              className="service-block"
                              style={{ visibility: "visible" }}
                            >
                              <div className="ico fa fa-umbrella highlight"></div>
                              <div className="text-block">
                                <div className="name">Example text</div>
                                <div className="info">Example text</div>
                                <div className="text">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Pellentesque habitant morbi
                                  tristique senectus et netus et malesuada fames{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </section>
        </div>
        <hr
          className="featurette-divider"
          style={{ color: "black", width: "90%", marginTop: "0" }}
        />
        <Fade bottom>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">Packages</h1>
            <p className="fs-5 text-muted">
              Quickly build an effective pricing table for your potential
              customers with this Bootstrap example. It’s built with default
              Bootstrap components and utilities with little customization.
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="row mb-3 text-center" style={{ width: "100%" }}>
            <div className="col-md-4">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Standard Cleaning</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <small className="text-muted fw-light">from</small> $100+
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                  >
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Deep Cleaning</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <small className="text-muted fw-light">from</small> $200+
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-white bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Office/Event</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <small className="text-muted fw-light">from</small> $500+
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary"
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <h2 className="display-6 text-center mb-4">Compare plans</h2>
        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th style={{ width: "34%" }}></th>
                <th style={{ width: "22%" }}>Standard</th>
                <th style={{ width: "22%" }}>Deep</th>
                <th style={{ width: "22%" }}>Office/Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Public
                </th>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Private
                </th>
                <td></td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Permissions
                </th>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Sharing
                </th>
                <td></td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Unlimited members
                </th>
                <td></td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Extra security
                </th>
                <td></td>
                <td></td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr
          className="featurette-divider"
          style={{ color: "black", width: "90%" }}
        />
        <Fade bottom>
          <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
            <h4
              className="font-cond-l fg-accent lts-md mgb-10"
              contenteditable="false"
            >
              Not Yet Convinced?
            </h4>
            <h1
              className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg"
              contenteditable="false"
            >
              Read Customer Reviews
            </h1>
          </div>
        </Fade>
        <Fade bottom>
          <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
            <li>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                className="wpx-100 img-round mgb-20"
                title=""
                alt=""
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
              />
              <p className="fs-110 font-cond-l" contenteditable="false">
                " Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. "
              </p>
              <h5
                className="font-cond mgb-5 fg-text-d fs-130"
                contenteditable="false"
              >
                Martha Stewart
              </h5>
              <small
                className="font-cond case-u lts-sm fs-80 fg-text-l"
                contenteditable="false"
              >
                Business Woman - New York
              </small>
            </li>
            <li>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar4.png"
                className="wpx-100 img-round mgb-20"
                title=""
                alt=""
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
              />
              <p className="fs-110 font-cond-l" contenteditable="false">
                " Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. "
              </p>
              <h5
                className="font-cond mgb-5 fg-text-d fs-130"
                contenteditable="false"
              >
                Ariana Menage
              </h5>
              <small
                className="font-cond case-u lts-sm fs-80 fg-text-l"
                contenteditable="false"
              >
                Recording Artist - Los Angeles
              </small>
            </li>
            <li style={{ borderRight: "0" }}>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar5.png"
                className="wpx-100 img-round mgb-20"
                title=""
                alt=""
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
              />
              <p className="fs-110 font-cond-l" contenteditable="false">
                " Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. "
              </p>
              <h5
                className="font-cond mgb-5 fg-text-d fs-130"
                contenteditable="false"
              >
                Sean Carter
              </h5>
              <small
                className="font-cond case-u lts-sm fs-80 fg-text-l"
                contenteditable="false"
              >
                Fund Manager - Chicago
              </small>
            </li>
          </ul>
        </Fade>
      </div>
    </>
  );
}

Work.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
