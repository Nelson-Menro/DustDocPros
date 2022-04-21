import Head from "next/head";
import Layout from "../components/layouts";

export default function About() {
  const imageStyle = {
    width: "29%",
  };
  return (
    <>
      <div className="row justify-content-evenly">
        <article className="col-4">
          <div >
            <h3>About Dust Doc Pro</h3>
            <p>The customer is always right</p>
            <br />
            <p>
              Dust Doc Pro<sup>®</sup> is so much more than just a home cleaning
              service. We are a company dedicated to giving our customers back
              the time they deserve to enjoy the things they love. We put The
              Extra In Your Ordinary
              <sup>®</sup>, restoring balance to your life by taking care of
              your home.
            </p>
            <p>
              Dust Doc Pro<sup>®</sup> is so much more than just a home cleaning
              service. We are a company dedicated to giving our customers back
              the time they deserve to enjoy the things they love. We put The
              Extra In Your Ordinary
              <sup>®</sup>, restoring balance to your life by taking care of
              your home.
            </p>
          </div>
        </article>
        <div style={imageStyle}>
          <img style={{"width" : "90%", "border-radius" : "5px"}} src="/DustDocProImages/IMG_8546.jpg"></img>
        </div>
      </div>
    </>
  );
}
About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};