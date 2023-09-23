import SponsorItem from "../SponsorItems";
import LogoBoomerang from "../../assets/logo-boomerang.png";
import LogoBlimp from "../../assets/logo-blimp.png";
import LogoQrco from "../../assets/logo-qrco.png";
import LogoOpenDoor from "../../assets/logo-opendoor.png";
import LogoDroplet from "../../assets/logo-droplet.png";
import "./style.css";
function SponsorItemsList() {
  return (
    <div className="sponsor-items-list">
      <SponsorItem logo={LogoBoomerang} text="Boom" />
      <SponsorItem logo={LogoBlimp} text="Blimp" />
      <SponsorItem logo={LogoQrco} text="Qrco" />
      <SponsorItem logo={LogoOpenDoor} text="OpenDoor" />
      <SponsorItem logo={LogoDroplet} text="Droplet" />
    </div>
  );
}
export default SponsorItemsList;
