
export default function Footer() {
  const style = {
    left: "0",
    bottom: "0",
    width: "100%",
  };

  return (
    <footer style={style}>
      <div style={{"display" : "flex", "flexDirection" : "column", "alignItems" : "center"}}>
        <p> © 2022 Copyright: Dust Doc Pro</p>
        <div style={{"display" : "flex", "justifyContent" : "space-evenly"}}>
          <img src="/socials/instagram-brands.svg" alt="Instagram" style={{"height" : "5%", "width" : "5%"}}></img>
          <img src="/socials/facebook-brands.svg" alt="facebook" style={{"height" : "5%", "width" : "5%"}}></img>
          <img src="/socials/twitter-brands.svg" alt="twitter" style={{"height" : "5%", "width" : "5%"}}></img>
        </div>
      </div>
    </footer>
  );
}
