import Head from "next/head";
import Layout from "../components/layouts";

export default function About() {
  const imageStyle = {
    width: "29%",
  };
  return (
    <>
      <div className="container">
        {/* <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <article className="col-lg-6">
            <div>
              <h3>About Dust Doc Pro</h3>
              <p>The customer is always right</p>
              <br />
              <p>
                Dust Doc Pro<sup>®</sup> is so much more than just a home
                cleaning service. We are a company dedicated to giving our
                customers back the time they deserve to enjoy the things they
                love. We put The Extra In Your Ordinary
                <sup>®</sup>, restoring balance to your life by taking care of
                your home.
              </p>
              <p>
                Dust Doc Pro<sup>®</sup> is so much more than just a home
                cleaning service. We are a company dedicated to giving our
                customers back the time they deserve to enjoy the things they
                love. We put The Extra In Your Ordinary
                <sup>®</sup>, restoring balance to your life by taking care of
                your home.
              </p>
            </div>
          </article>
          <div style={imageStyle}>
            <img
              style={{ width: "90%", borderRadius: "5px" }}
              src="/DustDocProImages/logo.jpg"
            ></img>
          </div>
        </div> */}
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Dust Doc Pro{" "}
              {/* <span className="text-muted">It’ll blow your mind.</span> */}
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
            <img
              style={{ width: "90%"}}
              src="/DustDocProImages/logo.jpg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
