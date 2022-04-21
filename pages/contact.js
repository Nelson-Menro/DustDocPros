import Head from "next/head";
import Layout from "../components/layouts";
const myComponentStyle = {
  width: "100%",
  height: "100%",
};

const calendlyStyle = {
  width: "100%",
  height: "100%",
};
const containerStyle = {
  display: "flex",
  "justify-content": "space-evenly",
  width: "100%",
};
export default function Contact() {
  return (
    <>
      <h3>Feel free to contact us for any kind of business query</h3>
      <p>
        Thank you for your interest in having Dust Doc Pro as your Professional
        cleaning services. Customer feedback is our greatest source of
        improvement
      </p>
      <div style={containerStyle}>
        <div style={{ width: "100%" }} className="row justify-content-evenly">
          <div className="col-4">
            <div className="row row-cols-2">
              <div className="col">Column</div>
              <div className="col">Column</div>
              <div className="col">Column</div>
              <div className="col">Column</div>
            </div>
          </div>

          <div className="col-4">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/nelsonmendez99?hide_landing_page_details=1&hide_gdpr_banner=1"
              style={calendlyStyle}
            ></div>
          </div>
        </div>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </div>
    </>
  );
}

Contact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
