import "./style.css";
import AppLogo from "../../assets/app-logo.png";
import FacebookLogo from "../../assets/facebook.png";
import TwitterLogo from "../../assets/twitter.png";
import InstagramLogo from "../../assets/instagram.png";
import TikTokLogo from "../../assets/tiktok.png";
function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={AppLogo} />
        <p>Exclusive NFT Collection</p>
        <span>
          <img src={FacebookLogo} />
          <img src={TwitterLogo} />
          <img src={InstagramLogo} />
          <img src={TikTokLogo} />
        </span>
      </div>
      <div>
        <div>About</div>
        <div>NFT</div>
        <div>Contact</div>
        <div>Social</div>
      </div>
    </div>
  );
}
export default Footer;
