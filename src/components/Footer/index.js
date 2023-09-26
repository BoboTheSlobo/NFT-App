import "./style.css";
import AppLogo from "../../assets/app-logo.png";
import FacebookLogo from "../../assets/facebook.png";
import TwitterLogo from "../../assets/twitter.png";
import InstagramLogo from "../../assets/instagram.png";
import TikTokLogo from "../../assets/tiktok.png";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-section-left">
          <img src={AppLogo} />
          <p>Exclusive NFT Collection</p>
          <span className="socials-logo-container">
            <img src={FacebookLogo} />
            <img src={TwitterLogo} />
            <img src={InstagramLogo} />
            <img src={TikTokLogo} />
          </span>
        </div>
        <div className="footer-section-right">
          <div className="footer-information">
            <h4>About</h4>
            <span>About</span>
            <span>Terms</span>
            <span>Legal</span>
          </div>
          <div className="footer-information">
            <h4>NFT</h4>
            <span>OpenSea</span>
            <span>Maker</span>
            <span>Learn</span>
          </div>
          <div className="footer-information">
            <h4>Contact</h4>
            <span>Press</span>
            <span>Support</span>
          </div>
          <div className="footer-information">
            <h4>Social</h4>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
      <p className="copyright">© Copyright 2022 NFTlanding</p>
    </div>
  );
}
export default Footer;
