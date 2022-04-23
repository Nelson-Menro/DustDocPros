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
        
          <div class="mgb-40 padb-30 auto-invert line-b-4 align-center">
            <h4
              class="font-cond-l fg-accent lts-md mgb-10"
              contenteditable="false"
            >
              Not Yet Convinced?
            </h4>
            <h1
              class="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg"
              contenteditable="false"
            >
              Read Customer Reviews
            </h1>
          </div>
          <ul class="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
            <li>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                class="wpx-100 img-round mgb-20"
                title=""
                alt=""
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
              />
              <p class="fs-110 font-cond-l" contenteditable="false">
                " Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. "
              </p>
              <h5
                class="font-cond mgb-5 fg-text-d fs-130"
                contenteditable="false"
              >
                Martha Stewart
              </h5>
              <small
                class="font-cond case-u lts-sm fs-80 fg-text-l"
                contenteditable="false"
              >
                Business Woman - New York
              </small>
            </li>
            <li>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar4.png"
                class="wpx-100 img-round mgb-20"
                title=""
                alt=""
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
              />
              <p class="fs-110 font-cond-l" contenteditable="false">
                " Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. "
              </p>
              <h5
                class="font-cond mgb-5 fg-text-d fs-130"
                contenteditable="false"
              >
                Ariana Menage
              </h5>
              <small
                class="font-cond case-u lts-sm fs-80 fg-text-l"
                contenteditable="false"
              >
                Recording Artist - Los Angeles
              </small>
            </li>
            <li>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar5.png"
                class="wpx-100 img-round mgb-20"
                title=""
                alt=""
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
              />
              <p class="fs-110 font-cond-l" contenteditable="false">
                " Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. "
              </p>
              <h5
                class="font-cond mgb-5 fg-text-d fs-130"
                contenteditable="false"
              >
                Sean Carter
              </h5>
              <small
                class="font-cond case-u lts-sm fs-80 fg-text-l"
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
