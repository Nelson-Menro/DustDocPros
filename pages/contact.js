import Head from "next/head";
import Layout from "../components/layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
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

const leftSideContainer = {
  display: "flex",
  "flex-direction": "column",
  "justify-content": "flex-start",
  width: "100%",
};
export default function Contact() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="col">
          <h4>Feel free to contact us for any kind of business query</h4>
          <p style={{ width: "75%", color: "grey" }}>
            Thank you for your interest in having Dust Doc Pro as your
            Professional cleaning services. Customer feedback is our greatest
            source of improvement
          </p>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div className=" mt-5 mb-3">
              <div className="row">
                <div className="">
                  <div className="p-3 mb-2">
                    <div>
                      <div
                        className="ms-2 c-details"
                        style={{
                          justifyContent: "space-evenly",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <FontAwesomeIcon icon={faPhone} />
                        <div>
                          <h6 className="mb-0">Phone No:</h6>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="mt-5">
                        <div className="mt-3">
                          {" "}
                          <span className="text1" style={{ color: "grey" }}>
                            Head Office: (123)456-7890
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-5 mb-3">
              <div className="row">
                <div className="">
                  <div className="p-3 mb-2">
                    <div>
                      <div
                        className="ms-2 c-details"
                        style={{
                          justifyContent: "space-evenly",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                        <div>
                          <h6 className="mb-0">Email Address:</h6>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="mt-5">
                        <div className="mt-3">
                          {" "}
                          <span className="text1" style={{ color: "grey" }}>
                            company@dustdoc.com
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div className=" mt-5 mb-3">
              <div className="row">
                <div className="">
                  <div className="p-3 mb-2">
                    <div>
                      <div
                        className="ms-2 c-details"
                        style={{
                          justifyContent: "space-evenly",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <FontAwesomeIcon icon={faClock} />
                        <div>
                          <h6 className="mb-0">Operating Hours</h6>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="mt-5">
                        <div className="mt-3">
                          {" "}
                          <span className="text1" style={{ color: "grey" }}>
                            10 AM - 6 PM (Monday - Saturday)
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-5 mb-3">
              <div className="row">
                <div className="">
                  <div className="p-3 mb-2">
                    <div>
                      <div
                        className="ms-2 c-details"
                        style={{
                          justifyContent: "space-evenly",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <FontAwesomeIcon icon={faLocationDot} />
                        <div>
                          <h6 className="mb-0">Office Address:</h6>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="mt-5">
                        <div className="mt-3">
                          {" "}
                          <span className="text1" style={{ color: "grey" }}>
                            Main Address: 122 Main St, State, City
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="calendly-inline-widget col"
          data-url="https://calendly.com/nelsonmendez99"
         
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
