import "./style.css";
import NftInitialRelease from "../../assets/nft-initial-release.png";

function InitialRelease(props) {
  const {
    title,
    descriptionTop,
    openSea,
    descriptionMiddle,
    descriptionBottom,
    color,
    imageOnRight,
    series,
    name,
    number,
  } = props;
  return (
    <div
      className={`nft-card-with-text ${color} ${
        imageOnRight ? "image-on-right" : ""
      }`}
    >
      <div className="initial-release-nft">
        <img src={NftInitialRelease} />
        <div className="nft-initial-release-type">
          <span className="nft-initial-release-series">{series}</span>
          <span className="nft-initial-release-name">{name}</span>
          <span className="nft-initial-release-number">#{number}</span>
        </div>
        <span></span>
      </div>
      <div className="nft-card-with-text__text">
        <h3>{title}</h3>
        <p>
          {descriptionTop} {openSea}
        </p>
        <p>{descriptionMiddle}</p>
        <p>{descriptionBottom}</p>
        <span className="check-them-out-link">
          Check them out
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </span>
      </div>
    </div>
  );
}
export default InitialRelease;
