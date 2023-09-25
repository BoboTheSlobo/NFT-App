import "./style.css";
import EthBigLogo from "../../assets/eth-big-logo.png";
import EthBigLogoNoColor from "../../assets/eth-big-no-color-logo.png";

function NftTextCards(props) {
  const { textTop, textMiddle, textBottom } = props;
  return (
    <div className="nft-text-cards">
      <div className="nft-text-card">
        <img src={EthBigLogo} />
        <h2>{textTop}</h2>
        <p>{textMiddle}</p>
        <p>{textBottom}</p>
      </div>
      <div className="nft-text-card">
        <img src={EthBigLogoNoColor} />
        <h2>{textTop}</h2>
        <p>{textMiddle}</p>
        <p>{textBottom}</p>
      </div>
    </div>
  );
}

export default NftTextCards;
