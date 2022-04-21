import Head from "next/head";
import Layout from "../components/layouts";
const myComponentStyle = {
  width: "100%",
  height: "100%"
};

const calendlyStyle = {
    width: "100%",
    height: "100%"
  };
const containerStyle = {
  "display": "flex",
  "justify-content": "space-evenly",
};
export default function Contact() {
  return (
    <>
      <div style={containerStyle}>
        <h2>Setup an appointment!</h2>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/nelsonmendez99?hide_landing_page_details=1&hide_gdpr_banner=1"
          style={calendlyStyle}
        ></div>
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
