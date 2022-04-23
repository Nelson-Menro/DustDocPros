import Head from "next/head";
import Layout from "../components/layouts";
export default function Work() {
  const imageStyle = {
    filter: "brightness(50%)",
    width: "auto",
    maxWidth: "100%",
    borderRadius: "5px",
    height: "auto ",
  };
  return (
    <>
      <div className="container">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Dust Doc Pro <span className="text-muted">in action.</span>
            </h2>
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
            <video
              autoPlay
              loop
              style={{ borderRadius: "5px", width: "100%", height: "50%" }}
            >
              <source src="/DustDocProImages/IMG_4778.MOV" type="video/mp4" />
            </video>
          </div>
        </div>
        {/* <hr
          className="featurette-divider"
          style={{ color: "black", width: "90%" }}
        /> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        />
        <div className="container bootstrap snippets bootdey">
          <section id="services" className="current">
            <div className="services-top">
              <div className="container bootstrap snippets bootdey">
                <div className="row text-center">
                  <div className="col-sm-12 col-md-12 col-md-12">
                    <h2>What We Offer</h2>
                    <h2
                      style={{
                        "font-size": "60px",
                        "line-height": "60px",
                        "margin-bottom": "20px",
                        "font-weight": "900",
                      }}
                    >
                      Our Services
                    </h2>
                    <p>
                      Our <span className="highlight">experienced</span> and{" "}
                      <span className="highlight">dedicated</span> staff provide
                      these services with a smile.
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
                            style={{ visibility: "visible;" }}
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
                            style={{ visibility: "visible;" }}
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
                            style={{ visibility: "visible;" }}
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
                            style={{ visibility: "visible;" }}
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
            </div>
          </section>
        </div>
        <hr
          className="featurette-divider"
          style={{ color: "black", width: "90%" }}
        />
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
          <li>
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
      </div>
    </>
  );
}

Work.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
