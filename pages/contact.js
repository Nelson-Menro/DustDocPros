import Head from "next/head";
import { InlineWidget } from "react-calendly";
import Layout from "../components/layouts";
import MyMarker from "../components/mapMarker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import GoogleMapReact from "google-map-react";
import Fade from "react-reveal/Fade";
export default function Contact() {
  const distanceToMouse = (pt, mp) => {
    if (pt && mp) {
      // return distance between the marker and mouse pointer
      return Math.sqrt(
        (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
      );
    }
  };
  //points for google maps, london
  const points = [
    { id: 1, title: "DC", lat: 38.89511, lng: -77.03637 },
    { id: 2, title: "Hagerstown", lat: 39.64176, lng: -77.71999 },
    { id: 3, title: "Leesburg", lat: 39.1155, lng: -77.5645 },
  ];
  return (
    <>
      <div
        className="container"
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <div className="col-md-7">
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
        <div style={{ width: "400px", height: "400px" }}>
          <GoogleMapReact 
            bootstrapURLKeys={{
              key: "AIzaSyAqus7ufng9E4u4tZtsH0QnR-Mx5zDh1Go",
              language: "en",
              region: "US",
            }}
            defaultCenter={{ lat: 39.412327, lng: -77.425461 }}
            defaultZoom={8}
            distanceToMouse={distanceToMouse}
          >
            {points.map(({ lat, lng, id, title }) => {
              return (
                <MyMarker
                  key={id}
                  lat={lat}
                  lng={lng}
                  text={id}
                  tooltip={title}
                />
              );
            })}
          </GoogleMapReact>
        </div>
      </div>
      <Fade bottom>
        <div className="section-title text-center">
          <h1>Or Schedule an appointment!</h1>
          <p>
            Our team of experts will help you decide what best suits your needs and any further details!
          </p>
        </div>
      </Fade>
      <div style={{ width: "80%" }} id="appointment">
        <InlineWidget url="https://calendly.com/nelsonmendez99/30min" />
      </div>
    </>
  );
}

Contact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
