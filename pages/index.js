import Head from "next/head";
import Layout from "../components/layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBuilding } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const container = {
    position: "relative",
    textAlign: "center",
    color: "white",
    width: "100%",
  };
  const bottomLeft = {
    position: "absolute",
    top: "50%",
    left: "30%",
    transform: "translate(-50%, -50%)",
  };
  const imageStyle = {
    filter: "brightness(50%)",
    width: "auto",
    maxWidth: "100%",
    borderRadius: "5px",
    height: "auto ",
  };
  const cardContent = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "20px",
  };

  return (
    <>
      <div style={container}>
        <img
          style={imageStyle}
          src="/DustDocProImages/stockCleaningImage.jpg"
          alt="DustDoc Pro"
          width="100%"
          height="500"
        ></img>
        <div style={bottomLeft}>
          <h4>Best Cleaning Services</h4>
        </div>
      </div>

      {/* <div className="container">
        <div className="d-flex flex-wrap justify-content-evenly">
          <div className="col-4">
            <div className="card">
              <div style={cardContent}>
                <div>
                  <FontAwesomeIcon icon={faHouse} />
                </div>
                <h5>House Cleaning</h5>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div style={cardContent}>
                <div>
                  <FontAwesomeIcon icon={faBuilding} />
                </div>
                <h5>Office Cleaning</h5>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="flex-container wrap justify-content-evenly">
          <div className="col">
            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={faHouse} />
                <h5 className="card-title">House Cleaning</h5>
                <p className="card-text">
                  We provide day to day cleaning in any home!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={faBuilding} />
                <h5 className="card-title">Office Cleaning</h5>
                <p className="card-text">
                  We provide day to day cleaning in any office!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


     
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
