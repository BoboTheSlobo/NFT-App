import "./style.css";
import Button from "../../components/Button";

function HeroBottom(props) {
  const { heroImage } = props;
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-left-launching">Launching soon</span>
        <h1 className="hero-left-heading">An NFT like no other</h1>
        <p className="dont-miss-out-text">
          Don’t miss out on the release of our new NFT. Sign up below to receive
          updates when we go live.
        </p>
        <Button text="Sign Up" />
      </div>
      <div className="hero-right">
        <div className="hero-right-image-wrapper">
          <img className="hero-right-image" src={heroImage} alt="hero image" />
          <div className="hero-right-image-shadow-pink"></div>
          <div className="hero-right-image-shadow-orange"></div>
        </div>
      </div>
    </section>
  );
}
export default HeroBottom;
